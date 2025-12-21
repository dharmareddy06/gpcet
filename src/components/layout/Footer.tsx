import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { collegeInfo, departments, quickLinks } from "@/data/collegeData";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/gpcetofficial", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/gpcetofficial", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/school/gpcet/?originalSubdomain=in", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCn1lCLtsTQtbcbNi-rpj5bA/videos", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/gpcetofficial/", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="college-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/gpcet-logo.png"
                alt={collegeInfo.shortName}
                className="h-12 w-auto object-contain bg-white rounded px-2 py-1"
              />
              <h3 className="font-serif font-bold text-lg">{collegeInfo.shortName}</h3>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              {collegeInfo.name} is committed to providing quality education and
              producing competent engineers who contribute to the nation's growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 pb-2 border-b border-primary-foreground/20">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 pb-2 border-b border-primary-foreground/20">
              Departments
            </h4>
            <ul className="space-y-2">
              {departments.map((dept) => (
                <li key={dept.id}>
                  <Link
                    to={`/departments/${dept.id}`}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {dept.shortName} - {dept.name.split(' ').slice(-1)[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 pb-2 border-b border-primary-foreground/20">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=G.+Pullaiah+College+of+Engineering+and+Technology,+Kurnool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-accent transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5 group-hover:text-accent" />
                  <span className="text-sm text-primary-foreground/80 group-hover:text-accent transition-colors">{collegeInfo.address}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href={`tel:${collegeInfo.phone}`} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {collegeInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${collegeInfo.email}`} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {collegeInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="college-container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} {collegeInfo.name}. All Rights Reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Use</Link>
              <Link to="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
