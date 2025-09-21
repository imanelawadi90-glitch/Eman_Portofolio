import { Mail, Linkedin, Twitter, Heart } from "lucide-react";

import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/iman-elawadi-462778234/",
      label: "LinkedIn",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/eman.abdelhameed.376?rdid=QLc4F9xt14RnXNBg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B5hnf8oCK%2F#",
      label: "Facebook",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/iman.elawadi/",
      label: "Instagram",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      icon: Mail,
      href: "mailto:imanelawadi90@gmail.com",
      label: "Email",
      target: "_self"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Videos & Articles", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="editorial-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold">Iman Elawadi</h3>
            <p className="text-white/80 max-w-xs">
              Content Writer & Journalist crafting compelling stories that 
              engage audiences and drive results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.target || "_blank"}
                  rel={social.rel || "noopener noreferrer"}
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-smooth group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Stay Updated</h4>
            <p className="text-white/80 text-sm">
              Follow my latest articles and insights in content writing and journalism.
            </p>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <Mail className="h-4 w-4" />
              <span>imanelawadi90@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Iman Elawadi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
