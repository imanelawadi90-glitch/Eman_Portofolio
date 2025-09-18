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
  videoCategories, 
  formatVideoUrl, 
  getVideoPlatform, 
  getFallbackThumbnail,
  type PortfolioItem 
} from "@/data/videos";

// Memoized Portfolio Card Component
const MemoizedPortfolioCard = memo(({ item, index, onEdit, onDelete }: { 
  item: PortfolioItem, 
  index: number, 
  onEdit: (item: PortfolioItem) => void, 
  onDelete: (item: PortfolioItem) => void 
}) => {
  const formattedVideoUrl = useMemo(() => formatVideoUrl(item.videoUrl), [item.videoUrl]);
  const platform = useMemo(() => getVideoPlatform(item.videoUrl), [item.videoUrl]);
  const fallbackColor = useMemo(() => getFallbackThumbnail(item.category), [item.category]);
  
  return (
    <Card 
      className={`group hover:shadow-editorial transition-all duration-300 hover:scale-[1.02] animate-fade-in ${
        item.featured ? 'ring-2 ring-accent/20 shadow-lg' : ''
      }`}
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <CardContent className="p-0">
        {/* Optimized Video Player */}
        <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
          <Suspense fallback={
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          }>
            <iframe
              src={formattedVideoUrl}
              title={item.title}
              className="w-full h-full transition-transform duration-300 group-hover:scale-105"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; unload"
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-scripts allow-same-origin allow-presentation allow-forms"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLIFrameElement;
                target.style.display = 'none';
                const nextElement = target.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'flex';
                }
              }}
            />
          </Suspense>
          
          <div 
            className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground absolute inset-0"
            style={{ display: 'none' }}
          >
            <div className="text-center">
              <Video className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Video unavailable</p>
              <p className="text-sm">Please check the video URL</p>
            </div>
          </div>
          
          <div className="absolute top-4 left-4">
            <Badge 
              variant="secondary"
              className={`bg-background/90 backdrop-blur-sm ${item.featured ? 'ring-1 ring-accent' : ''}`}
            >
              <Video className="h-3 w-3 mr-1" />
              {item.duration || 'Video'}
            </Badge>
          </div>
          
          {item.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-accent text-accent-foreground animate-pulse">
                Featured
              </Badge>
            </div>
          )}
        </div>
        
        {/* Card Content */}
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

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [visibleItems, setVisibleItems] = useState(4);
  const [isAddArticleOpen, setIsAddArticleOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  
  // Form state for new article
  const [newArticle, setNewArticle] = useState({
    title: "",
    category: "",
    publication: "",
    date: "",
    duration: "",
    description: "",
    videoUrl: "",
    tags: "",
    featured: false
  });

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(portfolioVideos);

  // Optimized filtering
  const filteredItems = useMemo(() => {
    return selectedCategory === "All" 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === selectedCategory);
  }, [portfolioItems, selectedCategory]);

  // Visible items for pagination
  const visiblePortfolioItems = useMemo(() => {
    return filteredItems.slice(0, visibleItems);
  }, [filteredItems, visibleItems]);

  const hasMoreItems = visibleItems < filteredItems.length;
  
  // Optimized handlers
  const handleCategoryFilter = useCallback((category) => {
    setSelectedCategory(category);
    setVisibleItems(4);
  }, []);
  

  const handleLoadMore = useCallback(async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setVisibleItems(prev => Math.min(prev + 4, filteredItems.length));
    setIsLoading(false);
  }, [filteredItems.length]);

  // Article management functions
  const handleAddArticle = useCallback(() => {
    setIsAddArticleOpen(true);
    setIsEditing(false);
    setEditingItem(null);
    setNewArticle({
      title: "",
      category: "",
      publication: "",
      date: "",
      duration: "",
      description: "",
      videoUrl: "",
      tags: "",
      featured: false
    });
  }, []);

  const handleEditArticle = useCallback((item) => {
    setEditingItem(item);
    setIsEditing(true);
    setIsAddArticleOpen(true);
    setNewArticle({
      title: item.title,
      category: item.category,
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
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
            Videos & Articles
          </h2>
          <div className="w-20 h-1 accent-gradient mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my documentary work, investigative pieces, and educational content.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {videoCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className="transition-all duration-200"
              onClick={() => handleCategoryFilter(category)}
            >
              {category}
              {selectedCategory === category && filteredItems.length > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {filteredItems.length}
                </Badge>
              )}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center text-sm text-muted-foreground mb-8">
          {selectedCategory !== "All" ? (
            <span>
              Showing {visiblePortfolioItems.length} of {filteredItems.length} videos in {selectedCategory}
            </span>
          ) : (
            <span>Showing {visiblePortfolioItems.length} of {portfolioItems.length} videos</span>
          )}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visiblePortfolioItems.length > 0 ? (
            visiblePortfolioItems.map((item, index) => (
              <MemoizedPortfolioCard
                key={item.id}
                item={item}
                index={index}
                onEdit={handleEditArticle}
                onDelete={handleDeleteArticle}
              />
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <Video className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                No videos found
              </h3>
              <p className="text-muted-foreground">
                No videos in this category
              </p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {hasMoreItems && (
          <div className="text-center mt-12">
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="px-8 py-3"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Load More Videos
                </>
              )}
                  </Button>
          </div>
        )}

        {/* Add Article Modal */}
        {isAddArticleOpen && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-fade-in"
               onClick={() => setIsAddArticleOpen(false)}>
            <div className="container mx-auto px-4 py-8 h-full flex items-center justify-center">
              <div className="w-full max-w-2xl bg-card rounded-lg shadow-editorial animate-scale-in max-h-[90vh] overflow-y-auto"
                   onClick={(e) => e.stopPropagation()}>
                
                {/* Modal Header */}
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
                      {isEditing ? 'Edit Article' : 'Add New Article'}
                    </h3>
                    <p className="text-muted-foreground">
                      {isEditing ? 'Update your article details' : 'Create a new video article for your portfolio'}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setIsAddArticleOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Form Content */}
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={newArticle.title}
                        onChange={(e) => setNewArticle(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Enter article title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select value={newArticle.category} onValueChange={(value) => setNewArticle(prev => ({ ...prev, category: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {videoCategories.filter(cat => cat !== "All").map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="publication">Publication</Label>
                      <Input
                        id="publication"
                        value={newArticle.publication}
                        onChange={(e) => setNewArticle(prev => ({ ...prev, publication: e.target.value }))}
                        placeholder="Publication name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        value={newArticle.date}
                        onChange={(e) => setNewArticle(prev => ({ ...prev, date: e.target.value }))}
                        placeholder="e.g., March 2024"
                      />
                    </div>
                    </div>

                  <div>
                    <Label htmlFor="videoUrl">Video URL *</Label>
                      <Input
                        id="videoUrl"
                        value={newArticle.videoUrl}
                        onChange={(e) => setNewArticle(prev => ({ ...prev, videoUrl: e.target.value }))}
                      placeholder="https://youtube.com/watch?v=..."
                      />
                    </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        value={newArticle.description}
                        onChange={(e) => setNewArticle(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your video/article"
                        rows={3}
                      />
                    </div>

                  <div>
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                      <Input
                        id="tags"
                        value={newArticle.tags}
                        onChange={(e) => setNewArticle(prev => ({ ...prev, tags: e.target.value }))}
                      placeholder="Technology, Business, Innovation"
                      />
                    </div>

                  <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={newArticle.featured}
                        onChange={(e) => setNewArticle(prev => ({ ...prev, featured: e.target.checked }))}
                        className="rounded"
                      />
                    <Label htmlFor="featured">Featured article</Label>
                  </div>
                  </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-border flex justify-end gap-3">
                  <Button variant="outline" onClick={() => setIsAddArticleOpen(false)}>
                      Cancel
                    </Button>
                  <Button onClick={handleSaveArticle} disabled={!newArticle.title || !newArticle.category || !newArticle.videoUrl || !newArticle.description}>
                      <Save className="h-4 w-4 mr-2" />
                      {isEditing ? 'Update Article' : 'Add Article'}
                    </Button>
                  </div>
                </div>
              </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;