import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import writerPortrait from "@/assets/writer-portrait.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1jIVnFfQ90oJqmVXIy64-KSf1WHqWkQax/view?usp=sharing';
    link.download = 'Iman_Elawady_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 55, 79, 0.85), rgba(34, 55, 79, 0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Column */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight animate-scale-in">
                Iman Elawadi
              </h1>
              <div className="w-20 h-1 accent-gradient animate-slide-in-right"></div>
              <h2 className="text-xl md:text-2xl font-inter font-light text-white/90 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Content Creator | Scriptwriter & Storyteller
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-white/80 font-inter max-w-xl leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            I write impactful content that comes to life in engaging video projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-accent transition-smooth hover-scale"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}
              >
                <FileText className="mr-2 h-5 w-5" />
                My Work
              </Button>

              <Button 
                variant="outline" 
                size="lg"
                className="border-accent/30 text-accent hover:bg-accent/10 transition-smooth hover-scale"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-5 w-5" />
                View My CV
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative group">
              {/* Oval Frame Container */}
              <div className="relative w-80 h-96 flex items-center justify-center">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-full blur-3xl scale-110 animate-pulse-glow"></div>
                
                {/* Main Oval Frame */}
                <div className="relative w-72 h-80 rounded-full overflow-hidden shadow-editorial border-4 border-white/20 backdrop-blur-sm">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-transparent to-accent/20 animate-gradient-shift"></div>
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={writerPortrait} 
                      alt="Iman Elawady - Professional Content Writer and Journalist"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 accent-gradient rounded-full opacity-80 animate-float shadow-accent"></div>
                <div className="absolute -top-6 -left-6 w-14 h-14 bg-white/30 rounded-full opacity-70 animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-accent/40 rounded-full opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/4 -left-8 w-6 h-6 bg-white/40 rounded-full opacity-50 animate-float" style={{animationDelay: '0.5s'}}></div>
                
                {/* Sparkle Effects */}
                <div className="absolute top-8 right-8 w-2 h-2 bg-white rounded-full animate-sparkle"></div>
                <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-accent rounded-full animate-sparkle" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-white rounded-full animate-sparkle" style={{animationDelay: '3s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
