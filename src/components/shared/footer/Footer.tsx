import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/shared/Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Technology", href: "/technology" },
    { name: "Blog", href: "https://www.blinqmobility.com/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
    { name: "ESG Policy", href: "/esg" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-electric-blue mb-4">Blinq Mobility</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Revolutionizing urban mobility with sustainable electric vehicles. 
                Purpose-built pods offering 4-wheeler experience at 3-wheeler price.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-electric-blue flex-shrink-0" />
                <span className="text-muted-foreground">9555869337</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-electric-blue flex-shrink-0" />
                <a href="mailto:info@blinqmobility.com" className="text-muted-foreground hover:text-electric-blue transition-colors">
                  info@blinqmobility.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-electric-blue flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  69, Sikandarpur Badha, Sector 85<br />
                  Gurgaon, Haryana - 122004
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <Button size="sm" variant="ghost" className="p-2 h-auto hover:bg-electric-blue/10">
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-electric-blue" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 h-auto hover:bg-electric-blue/10">
                <Twitter className="w-4 h-4 text-muted-foreground hover:text-electric-blue" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 h-auto hover:bg-electric-blue/10">
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-electric-blue" />
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

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-electric-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Details */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="bg-muted/30 rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-4">Company Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>
                <span className="font-medium">Legal Name:</span><br />
                Blinq Mobility Private Limited
              </div>
              <div>
                <span className="font-medium">CIN:</span><br />
                U29302HR2024PTC125372
              </div>
              <div>
                <span className="font-medium">GST:</span><br />
                06AAMCB9499F1Z2
              </div>
            </div>
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
    </footer>
  );
};

export default Footer;