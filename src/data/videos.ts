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
    date: "Jan 2023",
    duration: "10:47",
    description: "هتعمل إيه لو عرفت إنّ كل التاريخ القديم اللي بتدرسه غلط، وإنّ الإنسان زمان ماكانش مجرد صيّاد بيعيش في الكهوف والغابات، وانه كان صاحب حضارة متطورة ومعقدة جدًّا؟",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fcairotime%2Fvideos%2F2385571818281826%2F&show_text=false&width=540&t=0",
    tags: ["CairoTime"],
    featured: true,
  },
  {
    id: 2,
    title: "خوفك من الضلمة سببه جدك!",
    date: "Jun 2023",
    duration: "03:05",
    description: "الورث مش بس أرض وفلوس، الورث ممكن يكون كمان مخاوف، صدمات، قلق، وصراعات نفسية، مالكش أي ذنب فيها.. ويطلع في الآخر إن جدك الله يرحمه ويسامحه هو السبب.",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fcairotime%2Fvideos%2F256713040307092%2F&show_text=false&width=540&t=0",
    tags: ["CairoTime"],
    featured: true,
  },
  {
    id: 3,
    title: "ما لا تعرفه عن الغُراب، المُعلم الأول للإنسان.",
    date: "Jul 2023",
    duration: "04:44",
    description: "عنده وعي وإدراك، وبيصنع أدوات يستخدمها، وحاجات تانية كتير ما تعرفهاش عن الغراب، المُعلّم الأول للإنسان.",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fcairotime%2Fvideos%2F1520781531817459%2F&show_text=false&width=540&t=0",
    tags: ["CairoTime"],
    featured: true,
  },
  {
    id: 4,
    title: "مشروع الكتاب الأزرق وحقيقة الكائنات الفضائية اللي بتراقب الأرض!",
    date: "Apr 2023",
    duration: "08:57",
    description: "من حوالي 75 سنة ظهرت أجسام طايرة غريبة عند الحدود بين فرنسا وألمانيا، وبعدها حصلت أحداث وظواهر ملهاش تفسير لحد دلوقتي. اتعملت مشاريع سرية كتير، كان هدفها الأساسي تحليل الظواهر دي وكشف أسرارها، وأشهرهم كان مشروع الكتاب الأزرق، اللي كان هدفه يكشف حقيقة الأجسام الطايرة المجهولة اللي بدأت تظهر في أكتر من مكان. يا ترى هل فعلًا في أطباق طايرة زارت كوكب الأرض؟ وإيه الأسرار اللي بيخفيها مشروع الكتاب الأزرق عن العالم؟.. كل الأسئلة دي وأسئلة تانية هتلاقوا إجابتها في الفيديو.",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fcairotime%2Fvideos%2F1239291290062141%2F&show_text=false&width=540&t=0",
    tags: ["CairoTime"],
    featured: true,
  },
  {
    id: 5,
    title: "البوس بيخسس وبيطول العمر.. في اليوم العالمي للبوس اتعرف على فوايده!",
    date: "Jul 2023",
    duration: "05:28",
    description: "البوس عبارة عن لغة تواصل قوية، اتعمل عنه دراسات وأبحاث، واكتشفوا ليه فوايد مهمة، هتعرفها كلها في الفيديو ده.",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fcairotime%2Fvideos%2F499433019039209%2F&show_text=false&width=540&t=0",
    tags: ["CairoTime"],
    featured: true,
  },
  {
    id: 6,
    title: "السياحة المُظلمة | Dark Tourism",
    date: "Sep 2023",
    duration: "05:34",
    description: " أشهر أماكن السياحة المظلمة في العالم!! ",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fcairotime%2Fvideos%2F268149846119805%2F&show_text=false&width=540&t=0",
    tags: ["CairoTime"],
    featured: true,
  },
  {
    id: 7,
    title: "مكان مش مسموحلك تزوره!",
    date: "Mar 2023",
    duration: "05:46",
    description: " أنتاركتيكا.. القارة اللي محدش مسموح له يزورها! أكتر مكان غامض على الأرض، ومخبي أسرار كتير، مساحتها أكتر من 14 مليون كيلو متر مربع، وبتخزن جواها حوالي 90% من جليد الأرض، و70% من المية العذبة. ",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fcairotime%2Fvideos%2F223157450108519%2F&show_text=false&width=540&t=0",
    tags: ["CairoTime"],
    featured: true,
  },
  {
    id: 8,
    title: "الكعب العالي الأحمر كان مصنوع في الأساس للرجالة",
    date: "Mar 2023",
    duration: "03:17",
    description: "الهيلز أو الكعب العالي الأحمر، كان في الاصل موضة للرجالة مش للستات.. لا ومش اي رجالة دي كانت خاصة بالفرسان والملوك والشخصيات المهمة، يعني ماكنش معمول عشان يخلي البنات أطول ولا كان معمول للمشي أصلًا، بالعكس ده اتصمم مخصوص لسبب مش ممكن يُخطر على بال حد.",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fcairotime%2Fvideos%2F723478312598453%2F&show_text=false&width=540&t=0",
    tags: ["CairoTime"],
    featured: true,
  },
  {
    id: 9,
    title: "Test Video with New Channel",
    publication: "New Tech Channel",
    date: "January 2024",
    duration: "8:15",
    description: "This is a test video to demonstrate the dynamic channel filtering functionality.",
    videoUrl: "https://www.instagram.com/reel/C5_t987r55h/embed?width=540&height=300",
    tags: ["Test", "Technology", "Demo"],
    featured: false,
  }
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

export const getFallbackThumbnail = (): string => {
  return 'bg-gray-600';
};
