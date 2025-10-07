import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, Users, Award, Globe } from "lucide-react";

const About = () => {

  const skills = [
    "Creative Storytelling",
    "Scriptwriting for Digital Platforms",
    "Video Script Editing",
    "Simplifying Complex Topics",
    "Content Strategy",
    "Copywriting",
    "Creative Content Creation",
    "Journalism",
    "Collaborative Project Management",
    "Critical Thinking",
    "Adaptability",
  ];

  return (
    <section id="about" className="py-20 subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 accent-gradient mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I’m Iman, a passionate Content Writer and Scriptwriter dedicated to creating compelling, creative, and audience-focused content for digital platforms.
            I specialize in producing visually engaging material that not only captures attention but also builds meaningful connections with audiences.
            With a background in Drama and Theater Criticism, I began my career in journalism, which sharpened my storytelling skills and ability to craft impactful narratives.
            Over time, I expanded my expertise through courses in content writing, visual storytelling, and human resources, allowing me to blend creativity with strategic communication.
            This unique journey enables me to deliver high-quality, practical, and versatile content tailored to diverse audiences and digital platforms.
            </p>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* About Text */}
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h4 className="text-lg font-playfair font-semibold text-primary mb-3">
                  Education & Courses
                </h4>
                <ul className="space-y-2 text-foreground">
                  <li>
                    <span className="font-semibold">• Ain Shams University</span>
                    <div className="ml-4 text-sm">
                      - Studied at Faculty of Arts, Department of Drama and Theatrical Criticism
                    </div>
                  </li>
                  <li>
                    <span className="font-semibold">• Human Resources (HR) Course</span>
                  </li>
                  <li>
                    <span className="font-semibold">• Radio Presentation Course</span>
                    <div className="ml-4 text-sm">
                      - at Pioneer Academy
                    </div>
                  </li>
                  <li>
                    <span className="font-semibold">• Radio and Presentation Workshop</span>
                    <div className="ml-4 text-sm">
                      - at Cairo Time Academy
                    </div>
                  </li>
                  <li>
                    <span className="font-semibold">• Screenwriting Workshop</span>
                    <div className="ml-4 text-sm">
                      - with Screenwriter Eman El-Naggar
                    </div>
                  </li>
                  <li>
                    <span className="font-semibold">• Voice Acting and Dubbing Workshop</span>
                    <div className="ml-4 text-sm">
                      - with Professor Ahmed Mokhtar
                    </div>
                  </li>
                </ul>
            </div>

         
            {/* Skills */}
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <h3 className="text-2xl font-playfair font-semibold text-primary">
                Expertise & Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="group px-4 py-2 text-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover-scale hover-glow animate-scale-in relative overflow-hidden"
                    style={{animationDelay: `${index * 0.05 + 0.5}s`}}
                  >
                    {/* Background shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10">{skill}</span>
                  </Badge>
                ))}


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
