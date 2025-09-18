import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Send, Facebook, Instagram, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to Send Message",
        description: error instanceof Error ? error.message : "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "imanelawadi90@gmail.com",
      href: "mailto:imanelawadi90@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 1024850630",
      href: "tel:(+20) 01024850630"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/iman-elawadi-462778234/",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/eman.abdelhameed.376?rdid=QLc4F9xt14RnXNBg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B5hnf8oCK%2F#",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/iman.elawadi/",
      target: "_blank",
      rel: "noopener noreferrer",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-20 subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 accent-gradient mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? I'd love to hear about your project and discuss 
            how we can work together to create compelling content.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-playfair font-semibold text-primary mb-6">
                  Let's Connect
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-accent transition-smooth"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-playfair font-semibold text-primary mb-4">
                  Follow My Work
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.target || "_blank"}
                      rel={social.rel || "noopener noreferrer"}
                      className={`w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground transition-smooth hover:bg-accent hover:text-accent-foreground ${social.color || ''}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" /> 
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h4 className="text-lg font-playfair font-semibold text-primary mb-3">
                    Current Availability
                  </h4>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-foreground">Available for new projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Response time: Within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-editorial">
                <CardContent className="p-8">
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-6">
                    Send a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Please enter your name"
                          required
                          className="transition-smooth focus:ring-2 focus:ring-accent/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your email address"
                          required
                          className="transition-smooth focus:ring-2 focus:ring-accent/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Discussion"
                        required
                        className="transition-smooth focus:ring-2 focus:ring-accent/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Tell me about your project, timeline, and how I can help..."
                        required
                        className="transition-smooth focus:ring-2 focus:ring-accent/20"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent transition-smooth disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;