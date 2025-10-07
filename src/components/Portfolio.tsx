import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Calendar, Video, Plus, X, Save, Loader2 } from "lucide-react";
import { useState, useMemo, useCallback, memo, Suspense } from "react";
import { 
  portfolioVideos, 
  formatVideoUrl, 
  getVideoPlatform, 
  getFallbackThumbnail,
  type PortfolioItem 
} from "@/data/videos";

// ✅ Memoized Portfolio Card Component
const MemoizedPortfolioCard = memo(({ item, index, onEdit, onDelete }: { 
  item: PortfolioItem, 
  index: number, 
  onEdit: (item: PortfolioItem) => void, 
  onDelete: (item: PortfolioItem) => void 
}) => {
  const formattedVideoUrl = useMemo(() => formatVideoUrl(item.videoUrl), [item.videoUrl]);
  const platform = useMemo(() => getVideoPlatform(item.videoUrl), [item.videoUrl]);
  const fallbackColor = useMemo(() => getFallbackThumbnail(), []);
  
  return (
    <Card 
      className={`group hover:shadow-editorial transition-all duration-300 hover:scale-[1.02] animate-fade-in ${
        item.featured ? 'ring-2 ring-accent/20 shadow-lg' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-0">
        {/* ✅ Fixed Instagram Aspect Ratio (9:16) */}
        <div
          className={`relative bg-muted rounded-t-lg overflow-hidden ${
            platform === "Instagram" ? "pb-[177.78%]" : "aspect-video"
          }`}
        >
          <Suspense
            fallback={
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            }
          >
            <iframe
              src={formattedVideoUrl}
              title={item.title}
              className="absolute top-0 left-0 w-full h-full transition-transform duration-300 group-hover:scale-105"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
              loading="lazy"
              style={{
                border: "none",
                maxHeight: platform === "Instagram" ? "100%" : undefined,
              }}
              onError={(e) => {
                const target = e.target as HTMLIFrameElement;
                target.style.display = "none";
                const nextElement = target.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = "flex";
                }
              }}
            />
          </Suspense>

          {/* Placeholder when video unavailable */}
          <div
            className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground absolute inset-0"
            style={{ display: "none" }}
          >
            <div className="text-center">
              <Video className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Video unavailable</p>
              <p className="text-sm">Please check the video URL</p>
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute top-4 left-4">
            <Badge 
              variant="secondary"
              className={`bg-background/90 backdrop-blur-sm ${item.featured ? 'ring-1 ring-accent' : ''}`}
            >
              <Video className="h-3 w-3 mr-1" />
              {item.duration || 'Video'}
            </Badge>
          </div>
          
          {/* Featured Badge */}
          {item.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-accent text-accent-foreground animate-pulse">
                Featured
              </Badge>
            </div>
          )}
        </div>
        
        {/* ✅ Card Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-playfair font-semibold text-primary line-clamp-2 group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium">{item.publication}</span>
              <span>•</span>
              <span>{platform}</span>
            </div>
          </div>
          
          <p className="text-foreground/80 line-clamp-3 leading-relaxed">
            {item.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, tagIndex) => (
              <Badge 
                key={tagIndex}
                variant="outline" 
                className="text-xs hover:bg-accent/10 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {item.date}
            </div>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="ghost"
                className="text-accent hover:text-accent-foreground hover:bg-accent/10 transition-all"
                onClick={() => window.open(item.videoUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Open Original
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

MemoizedPortfolioCard.displayName = 'MemoizedPortfolioCard';

// ✅ Main Portfolio Component
const Portfolio = () => {
  const [selectedChannel, setSelectedChannel] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [visibleItems, setVisibleItems] = useState(4);
  const [isAddArticleOpen, setIsAddArticleOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  
  const [newArticle, setNewArticle] = useState({
    title: "",
    publication: "",
    date: "",
    duration: "",
    description: "",
    videoUrl: "",
    tags: "",
    featured: false
  });

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(portfolioVideos);

  const availableChannels = useMemo(() => {
    const channels = portfolioItems
      .map(item => item.publication)
      .filter((channel, index, self) => channel && self.indexOf(channel) === index)
      .sort();
    return ["All", ...channels];
  }, [portfolioItems]);

  const filteredItems = useMemo(() => {
    return selectedChannel === "All" 
      ? portfolioItems 
      : portfolioItems.filter(item => item.publication === selectedChannel);
  }, [portfolioItems, selectedChannel]);

  const visiblePortfolioItems = useMemo(() => {
    return filteredItems.slice(0, visibleItems);
  }, [filteredItems, visibleItems]);

  const hasMoreItems = visibleItems < filteredItems.length;

  const handleChannelFilter = useCallback((channel: string) => {
    setSelectedChannel(channel);
    setVisibleItems(4);
  }, []);

  const handleLoadMore = useCallback(async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setVisibleItems(prev => Math.min(prev + 4, filteredItems.length));
    setIsLoading(false);
  }, [filteredItems.length]);

  const handleAddArticle = useCallback(() => {
    setIsAddArticleOpen(true);
    setIsEditing(false);
    setEditingItem(null);
    setNewArticle({
      title: "",
      publication: "",
      date: "",
      duration: "",
      description: "",
      videoUrl: "",
      tags: "",
      featured: false
    });
  }, []);

  const handleEditArticle = useCallback((item: PortfolioItem) => {
    setEditingItem(item);
    setIsEditing(true);
    setIsAddArticleOpen(true);
    setNewArticle({
      title: item.title,
      publication: item.publication,
      date: item.date,
      duration: item.duration || "",
      description: item.description,
      videoUrl: item.videoUrl,
      tags: item.tags.join(", "),
      featured: item.featured
    });
  }, []);

  const handleSaveArticle = useCallback(() => {
    if (isEditing && editingItem) {
      setPortfolioItems(prev => prev.map(item => 
        item.id === editingItem.id 
          ? {
              ...item,
              ...newArticle,
              tags: newArticle.tags.split(",").map(tag => tag.trim()).filter(Boolean),
              id: editingItem.id
            }
          : item
      ));
    } else {
      const newId = Math.max(...portfolioItems.map(item => item.id)) + 1;
      setPortfolioItems(prev => [...prev, {
        ...newArticle,
        tags: newArticle.tags.split(",").map(tag => tag.trim()).filter(Boolean),
        id: newId
      }]);
    }
    setIsAddArticleOpen(false);
    setEditingItem(null);
    setIsEditing(false);
  }, [isEditing, editingItem, newArticle, portfolioItems]);

  const handleDeleteArticle = useCallback((itemToDelete: PortfolioItem) => {
    setPortfolioItems(prev => {
      const updated = prev.filter(item => item.id !== itemToDelete.id);
      if (visibleItems > updated.length - 1) {
        setVisibleItems(4);
      }
      return updated;
    });
  }, [visibleItems]);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... باقي الكود بدون تعديل */}
      </div>
    </section>
  );
};

export default Portfolio;

