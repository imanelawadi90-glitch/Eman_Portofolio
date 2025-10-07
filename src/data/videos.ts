// Portfolio videos data
export interface PortfolioItem {
  id: number;
  title: string;
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
    title: "حضارة ما قبل الطوفان العظيم ونهاية العالم القديم!",
    publication: "CairoTime",
    date: "Jan 2023",
    duration: "10:47",
    description:
      "هتعمل إيه لو عرفت إنّ كل التاريخ القديم اللي بتدرسه غلط، وإنّ الإنسان زمان ماكانش مجرد صيّاد بيعيش في الكهوف والغابات، وانه كان صاحب حضارة متطورة ومعقدة جدًّا؟",
    videoUrl:
      "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fcairotime%2Fvideos%2F2385571818281826%2F&show_text=false&width=540&t=0",
    tags: ["CairoTime"],
    featured: true,
  },
  {
    id: 16,
    title: "أغبى خطة تجسس في التاريخ!",
    publication: "Elkalamalaeh",
    date: "Apr 2024",
    duration: "01:00",
    description:
      "أغبى خطة تجسس في التاريخ، اتعملت في الستينات، وللأسف بطلتها كانت قطة صغيرة؛ كلفت المخابرات الأمريكية 20 مليون دولار، بس اللي حصل بعد كده كان كارثي",
    videoUrl:
      "https://www.instagram.com/reel/C5_t987r55h/?igsh=MWxneHkxN2FxdzBq",
    tags: ["Elkalamalaeh"],
    featured: true,
  },
];

// ✅ Utility functions for video handling
const getYouTubeVideoId = (url: string): string | null => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export const formatVideoUrl = (url: string): string => {
  if (!url) return "";

  // YouTube URLs
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId = getYouTubeVideoId(url);
    return videoId
      ? `https://www.youtube.com/embed/${videoId}`
      : url;
  }

  // Facebook URLs
  if (url.includes("facebook.com") || url.includes("fb.watch")) {
    const fbMatch = url.match(
      /(?:facebook\.com\/.*\/videos\/|fb\.watch\/)(\d+)/
    );
    return fbMatch
      ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          url
        )}&show_text=false&width=560`
      : url;
  }

  // ✅ Instagram URLs (auto convert to /embed)
  if (url.includes("instagram.com")) {
    const cleanUrl = url.split("?")[0]; // remove tracking params
    if (cleanUrl.includes("/reel/")) {
      const reelId = cleanUrl.split("/reel/")[1]?.split("/")[0];
      return `https://www.instagram.com/reel/${reelId}/embed`;
    }
    if (cleanUrl.includes("/p/")) {
      const postId = cleanUrl.split("/p/")[1]?.split("/")[0];
      return `https://www.instagram.com/p/${postId}/embed`;
    }
    return url.endsWith("/embed") ? url : `${cleanUrl}/embed`;
  }

  // Vimeo URLs
  if (url.includes("vimeo.com")) {
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    return vimeoMatch
      ? `https://player.vimeo.com/video/${vimeoMatch[1]}`
      : url;
  }

  return url.includes("/embed/") ? url : url;
};

export const getVideoPlatform = (url: string): string => {
  const platformMap: Record<string, string> = {
    "youtube.com": "YouTube",
    "youtu.be": "YouTube",
    "facebook.com": "Facebook",
    "fb.watch": "Facebook",
    "instagram.com": "Instagram",
    "vimeo.com": "Vimeo",
  };
  return (
    Object.entries(platformMap).find(([key]) => url.includes(key))?.[1] ||
    "Video"
  );
};

export const getFallbackThumbnail = (): string => {
  return "bg-gray-600";
};

