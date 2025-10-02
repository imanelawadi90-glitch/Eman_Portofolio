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
    description: "هتعمل إيه لو عرفت إنّ كل التاريخ القديم اللي بتدرسه غلط، وإنّ الإنسان زمان ماكانش مجرد صيّاد بيعيش في الكهوف والغابات، وانه كان صاحب حضارة متطورة ومعقدة جدًّا؟",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fcairotime%2Fvideos%2F2385571818281826%2F&show_text=false&width=540&t=0",
    tags: ["CairoTime"],
    featured: true,
  },
  {
    id: 2,
    title: "خوفك من الضلمة سببه جدك!",
    publication: "CairoTime",
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
    publication: "CairoTime",
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
    publication: "CairoTime",
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
    publication: "CairoTime",
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
    publication: "CairoTime",
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
    publication: "CairoTime",
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
    publication: "CairoTime",
    date: "Mar 2023",
    duration: "03:17",
    description: "الهيلز أو الكعب العالي الأحمر، كان في الاصل موضة للرجالة مش للستات.. لا ومش اي رجالة دي كانت خاصة بالفرسان والملوك والشخصيات المهمة، يعني ماكنش معمول عشان يخلي البنات أطول ولا كان معمول للمشي أصلًا، بالعكس ده اتصمم مخصوص لسبب مش ممكن يُخطر على بال حد.",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fcairotime%2Fvideos%2F723478312598453%2F&show_text=false&width=540&t=0",
    tags: ["CairoTime"],
    featured: true,
  },
  {
    id: 9,
    title: "ليه صوابعك مش زي بعضها؟",
    publication: "Break",
    date: "Jun 2022",
    duration: "04:01",
    description: "العلماء قضوا سنين طويلة بيحاولوا يفهموا ليه صوابع الإنسان مش كلها زي بعض.. جربوا يحطوا تصورات ليها لو غيروا أماكنها ويتلاعبوا بالترتيب، لحد ما اكتشفوا أسرار مذهلة هتعرفوها كلها بالتفصيل في الفيديو!",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fa7mdReeda%2Fvideos%2F742509880271934%2F&show_text=false&width=540&t=0",
    tags: ["Break"],
    featured: true,
  },
  {
    id: 10,
    title: "ليه صوابعك مش زي بعضها؟",
    publication: "Break",
    date: "Jun 2022",
    duration: "04:01",
    description: "العلماء قضوا سنين طويلة بيحاولوا يفهموا ليه صوابع الإنسان مش كلها زي بعض.. جربوا يحطوا تصورات ليها لو غيروا أماكنها ويتلاعبوا بالترتيب، لحد ما اكتشفوا أسرار مذهلة هتعرفوها كلها بالتفصيل في الفيديو!",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fa7mdReeda%2Fvideos%2F1913863395468926%2F&show_text=false&width=540&t=0",
    tags: ["Break"],
    featured: true,
  },
  {
    id: 11,
    title: "تعمل ايه لو حد ثبتك بسلاح؟",
    publication: "Break",
    date: "May 2022",
    duration: "03:32",
    description: "مهما كان شكلك، ومهما كانت قوتك، ممكن جدًا تلاقي نفسك متثبت في الشارع من حد بسلاح، وعلشان كده علم النفس قدملنا شوية إستراتيجيات مهمة، هتساعدك تتصرف صح لو اتحطيت في الموقف ده.",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fa7mdReeda%2Fvideos%2F1485668328556117%2F&show_text=false&width=540&t=0",
    tags: ["Break"],
    featured: true,
  },
  {
    id: 12,
    title: "أطفال العيون السود.. مين دول؟",
    publication: "Break",
    date: "Apr 2022",
    duration: "04:16",
    description: "أطفال عيونهم سودا وبيطلبوا طلبات غريبة، ولو اتصرفت معاهم غلط، حياتك هتكون في خطر.. مين دول وايه حكايتهم، كل حاجة عنهم هتعرفها في الفيديو ده",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fa7mdReeda%2Fvideos%2F4893744754069742%2F&show_text=false&width=540&t=0",
    tags: ["Break"],
    featured: true,
  },
  {
    id: 13,
    title: "ليه البغبغان بيتكلم.. وليه مش كل الطيور زيه؟",
    publication: "Break",
    date: "Jun 2022",
    duration: "03:01",
    description: "العلماء قضوا سنين طويلة بيحاولوا يفهموا ليه صوابع الإنسان مش كلها زي بعض.. جربوا يحطوا تصورات ليها لو غيروا أماكنها ويتلاعبوا بالترتيب، لحد ما اكتشفوا أسرار مذهلة هتعرفوها كلها بالتفصيل في الفيديو!",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fa7mdReeda%2Fvideos%2F422095743174143%2F&show_text=false&width=540&t=0",
    tags: ["Break"],
    featured: true,
  },
  {
    id: 14,
    title: "اغرب جريمتين في التاريخ!",
    publication: "Break",
    date: "Apr 2022",
    duration: "03:22",
    description: "جريمتين زي بعض بكل تفاصيلهم، وكمان بنفس الأماكن والأسماء، ولكن الفرق بينهم 157 سنة",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fa7mdReeda%2Fvideos%2F4919252501477135%2F&show_text=false&width=540&t=0",
    tags: ["Break"],
    featured: true,
  },
  {
    id: 15,
    title: "قصة الخرزة الزرقاء.. هل فعلًا بتبعد العين؟",
    publication: "Break",
    date: "Aug 2022",
    duration: "03:45",
    description: "الخرزة الزرقاء في الثقافة المصرية، وعلاقتها بالحسد",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fa7mdReeda%2Fvideos%2F583163069983453%2F&show_text=false&width=540&t=0",
    tags: ["Break"],
    featured: true,
  },
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
