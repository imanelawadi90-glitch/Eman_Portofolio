# 📹 Video Data Management

This directory contains the video data for the portfolio. Adding new videos is now super easy!

## 🎯 How to Add a New Video

### 1. Open the Videos File
Edit `src/data/videos.ts` and add your new video to the `portfolioVideos` array.

### 2. Video Object Structure
```typescript
{
  id: 6, // Next available ID
  title: "Your Video Title",
  category: "Category Name", // Must match one from videoCategories
  publication: "Publication Name",
  date: "Month Year", // e.g., "April 2024"
  description: "Brief description of your video content...",
  videoUrl: "https://your-video-url.com",
  tags: ["Tag1", "Tag2", "Tag3"],
  featured: false, // Set to true for featured videos
  duration: "5:30" // Optional: video duration
}
```

### 3. Supported Video Platforms
- **YouTube**: `https://youtube.com/watch?v=...` or `https://youtu.be/...`
- **Facebook**: `https://facebook.com/.../videos/...` or `https://fb.watch/...`
- **Instagram**: `https://instagram.com/reel/...` or `https://instagram.com/p/...`
- **Vimeo**: `https://vimeo.com/...`

### 4. Available Categories
- Investigative Documentary
- Lifestyle Documentary
- Educational Series
- Social Impact

### 5. Adding New Categories
To add a new category:
1. Add it to the `videoCategories` array
2. Add a color mapping in `getFallbackThumbnail` function

## 🚀 Example: Adding a New Video

```typescript
{
  id: 6,
  title: "Climate Change Solutions",
  category: "Social Impact",
  publication: "Eco News",
  date: "April 2024",
  description: "Exploring innovative solutions to combat climate change through technology and community action.",
  videoUrl: "https://youtu.be/example-video-id",
  tags: ["Climate", "Technology", "Environment"],
  featured: true,
  duration: "12:45"
}
```

## ✨ Benefits of This Structure

- ✅ **Easy to add videos** - just edit one file
- ✅ **Type safety** - TypeScript ensures correct data structure
- ✅ **Centralized data** - all videos in one place
- ✅ **Reusable utilities** - video processing functions available
- ✅ **Clean component** - Portfolio.tsx focuses on UI logic

## 🔧 Video Processing

The system automatically:
- Converts YouTube URLs to embed format
- Handles Facebook video embeds
- Processes Instagram reels and posts
- Supports Vimeo videos
- Generates appropriate thumbnails
- Determines video platform

Just add your video URL and the system handles the rest!
