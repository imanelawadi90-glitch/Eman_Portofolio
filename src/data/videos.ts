// Portfolio videos data
export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  publication: string;
  date: string;
  description: string;
  videoUrl: string;
  tags: string[];
  featured: boolean;
  duration?: string;
}

export const portfolioVideos: PortfolioItem[] = [
  {
    id: 1,
    title: "Tech Industry Disruption: Behind the Scenes",
    category: "Investigative Documentary",
    publication: "Tech Today Channel",
    date: "March 2024",
    description: "An investigative documentary exploring how emerging technologies are disrupting traditional business models across industries.",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fcairotime%2Fvideos%2F256713040307092%2F&show_text=false&width=540&t=0",
    tags: ["Technology", "Business", "Innovation"],
    featured: true,
  },
  {
    id: 2,
    title: "Instagram Reel: Tech Innovation Showcase",
    category: "Social Impact",
    publication: "Instagram",
    date: "March 2024",
    duration: "0:30",
    description: "A short-form video showcasing innovative technology solutions and their impact on daily life, designed for social media engagement.",
    videoUrl: "https://www.instagram.com/reel/C9VRsdHtokL/?utm_source=ig_web_copy_link",
    tags: ["Technology", "Social Media", "Innovation"],
    featured: false,
  },
  {
    id: 3,
    title: "Sustainable Living: Real Impact Stories",
    category: "Lifestyle Documentary",
    publication: "EcoLife Network",
    date: "February 2024",
    duration: "8:45",
    description: "Following families who transformed their lifestyle to achieve zero-waste living and documenting their challenges and successes.",
    videoUrl: "https://youtu.be/OYclqtGQWxw?si=UL7L9-d1Cumr6Txj",
    tags: ["Sustainability", "Lifestyle", "Environment"],
    featured: false,
  },
  {
    id: 4,
    title: "Digital Marketing Evolution 2024",
    category: "Educational Series",
    publication: "Marketing Mastery",
    date: "January 2024",
    duration: "15:20",
    description: "A comprehensive analysis of emerging digital marketing trends and their practical applications for businesses of all sizes.",
    videoUrl: "https://youtu.be/BxWv2l31U0g?si=jrmqOpyZJ8ply48g",
    tags: ["Marketing", "Digital Trends", "Business Strategy"],
    featured: true,
  },
  {
    id: 5,
    title: "Mental Health in the Digital Age",
    category: "Social Impact",
    publication: "Wellness Weekly",
    date: "December 2023",
    duration: "12:30",
    description: "Exploring the impact of social media and digital technology on mental health, featuring expert interviews and personal stories.",
    videoUrl: "https://youtu.be/ipBSKYXJPcE?si=6UP2RwfJ1lDNzP5f",
    tags: ["Mental Health", "Technology", "Wellness"],
    featured: false,
  }
];

// Categories for filtering
export const videoCategories = [
  "All", 
  "Investigative Documentary", 
  "Lifestyle Documentary", 
  "Educational Series", 
  "Social Impact"
];

// Utility functions for video handling
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export const formatVideoUrl = (url: string): string => {
  if (!url) return '';
  
  // YouTube URLs
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }
  
  // Facebook URLs
  if (url.includes('facebook.com') || url.includes('fb.watch')) {
    const fbMatch = url.match(/(?:facebook\.com\/.*\/videos\/|fb\.watch\/)(\d+)/);
    return fbMatch ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=560` : url;
  }
  
  // Instagram URLs
  if (url.includes('instagram.com')) {
    if (url.includes('/reel/')) {
      const reelId = url.split('/reel/')[1]?.split('/')[0];
      return reelId ? `https://www.instagram.com/reel/${reelId}/embed/` : url;
    }
    if (url.includes('/p/')) {
      const postId = url.split('/p/')[1]?.split('/')[0];
      return postId ? `https://www.instagram.com/p/${postId}/embed/` : url;
    }
    return url;
  }
  
  // Vimeo URLs
  if (url.includes('vimeo.com')) {
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    return vimeoMatch ? `https://player.vimeo.com/video/${vimeoMatch[1]}` : url;
  }
  
  return url.includes('/embed/') ? url : url;
};

export const getVideoPlatform = (url: string): string => {
  const platformMap: Record<string, string> = {
    'youtube.com': 'YouTube',
    'youtu.be': 'YouTube',
    'facebook.com': 'Facebook',
    'fb.watch': 'Facebook',
    'instagram.com': 'Instagram',
    'vimeo.com': 'Vimeo'
  };
  
  return Object.entries(platformMap).find(([key]) => url.includes(key))?.[1] || 'Video';
};

export const getFallbackThumbnail = (category: string): string => {
  const categoryColors: Record<string, string> = {
    'Investigative Documentary': 'bg-blue-600',
    'Lifestyle Documentary': 'bg-green-600',
    'Educational Series': 'bg-purple-600',
    'Social Impact': 'bg-orange-600'
  };
  return categoryColors[category] || 'bg-gray-600';
};
