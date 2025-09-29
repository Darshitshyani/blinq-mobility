import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram ,Facebook } from "lucide-react";
import { Button } from "@/components/shared/Button";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Technology", href: "/technology" },
    { name: "Blog", href: "blogs/iitstartupindia-cohort-12" },
    { name: "Contact", href: "/contact-us" },
  ];
https:  
Insta: 
X: 
FB: 



  return (
    <footer className="bg-card border-t border-border overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-electric-blue mb-4">Blinq Mobility</h3>
            
            {/* Contact Info */}
            <div className="space-y-3">
              
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-electric-blue flex-shrink-0" />
                <a href="mailto:info@blinqmobility.com" className="text-muted-foreground hover:text-electric-blue transition-colors">
                  info@blinqmobility.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-electric-blue flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  169, Sikandarpur Badha, Sector 85<br />
                  Gurgaon, Haryana - 122004
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <Button size="sm" variant="ghost" className="p-2 h-auto hover:bg-electric-blue/10" onClick={() => window.open('//www.linkedin.com/company/blinq-mobility/', '_blank')}>
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-electric-blue" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 h-auto hover:bg-electric-blue/10" onClick={() => window.open('https://x.com/Blinqmobility', '_blank')}>
                <Twitter className="w-4 h-4 text-muted-foreground hover:text-electric-blue" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 h-auto hover:bg-electric-blue/10" onClick={() => window.open('https://www.instagram.com/blinqmobility/', '_blank')}>
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-electric-blue" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 h-auto hover:bg-electric-blue/10" onClick={() => window.open('https://www.facebook.com/profile.php?id=61563763277003', '_blank')}>
                <Facebook className="w-4 h-4 text-muted-foreground hover:text-electric-blue" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-muted-foreground hover:text-electric-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  <div className="mb-6 w-full">
              
              <p className="text-muted-foreground text-start leading-relaxed mb-6">
                Revolutionizing urban mobility with sustainable electric vehicles. Purpose built pods offering 4-wheeler experience at 3-wheeler price
              </p>
            </div>
          
         
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Blinq Mobility Private Limited. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Revolutionizing urban mobility, one ride at a time.
          </p>
        </div>
      </div>
    <div className=" mx-auto px-4 py-4 text-black font-extrabold   uppercase w-full text-primary flex justify-center items-center py-6">
  <h1 className="text-[7vw] leading-none tracking-wide">SWAP DRIVE REPEAT</h1>
</div>
    </footer>
  );
};

export default Footer;