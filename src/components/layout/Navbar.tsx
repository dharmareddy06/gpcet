import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, ChevronDown, ChevronRight } from "lucide-react";
import { collegeInfo, navLinks } from "@/data/collegeData";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="college-container">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href={`tel:${collegeInfo.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                {collegeInfo.phone}
              </a>
              <a href={`mailto:${collegeInfo.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                {collegeInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Mon - Sat: 9:00 AM - 4:00 PM
              </span>
              <Link to="/student-login" className="hover:text-accent transition-colors">
                Student Portal
              </Link>
              <Link to="/faculty-login" className="hover:text-accent transition-colors">
                Faculty Portal
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="bg-background py-4 border-b border-border">
        <div className="college-container">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-4">
              <img
                src="/images/gpcet-logo.png"
                alt={collegeInfo.name}
                className="h-16 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-serif font-bold text-primary leading-tight">
                  {collegeInfo.name}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {collegeInfo.affiliatedTo} | {collegeInfo.approvedBy}
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              <div className="flex flex-col items-center p-2 border border-border rounded">
                <span className="text-xs text-muted-foreground">NAAC</span>
                <span className="text-lg font-bold text-accent">A</span>
              </div>
              <div className="flex flex-col items-center p-2 border border-border rounded">
                <span className="text-xs text-muted-foreground">NBA</span>
                <span className="text-lg font-bold text-secondary">✓</span>
              </div>
              <div className="flex flex-col items-center p-2 border border-border rounded">
                <span className="text-xs text-muted-foreground">NIRF</span>
                <span className="text-lg font-bold text-primary">214</span>
              </div>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Announcements Ticker - Home Page Only */}
      {location.pathname === '/' && (
        <div className="bg-primary/10 border-b border-primary/20 overflow-hidden py-2">
          <div className="college-container flex items-center gap-4">
            <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs font-semibold shrink-0">
              📢 Announcements
            </span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap text-sm text-foreground font-medium">
                <span className="mx-8">🎉 Welcome to G.Pullaiah College of Engineering and Technology. Happy to share that GPCET has been re-accredited by NAAC with 'A' grade for a period of 5 years till September 2029</span>
                <span className="mx-8">📢 Admissions Open for 2025-26 Academic Year - Apply Now!</span>
                <span className="mx-8">🎓 Check the "Latest News" section for November 2025 Examination Schedules and Notifications.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="bg-primary shadow-nav sticky top-0 z-50">
        <div className="college-container">
          <div className="hidden lg:flex items-center justify-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-4 text-sm font-medium text-primary-foreground hover:bg-secondary transition-colors",
                    isActive(link.href) && "bg-secondary"
                  )}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                </Link>

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <div className="absolute left-0 top-full hidden group-hover:block w-72 pt-2">
                    <div className="bg-white rounded-md shadow-lg border border-border overflow-visible py-2 animate-in fade-in zoom-in-95 duration-200">
                      {link.subLinks.map((subLink) => (
                        <div key={subLink.name} className="relative group/sub">
                          <Link
                            to={subLink.href}
                            className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                          >
                            <span>{subLink.name}</span>
                            {subLink.subLinks && <ChevronRight className="w-4 h-4 text-gray-400" />}
                          </Link>

                          {/* Nested Dropdown */}
                          {subLink.subLinks && (
                            <div className="absolute left-full top-0 hidden group-hover/sub:block w-72 pl-2">
                              <div className="bg-white rounded-md shadow-lg border border-border overflow-hidden py-2 animate-in fade-in zoom-in-95 duration-200">
                                {subLink.subLinks.map((nestedLink) => (
                                  <Link
                                    key={nestedLink.name}
                                    to={nestedLink.href}
                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                                  >
                                    {nestedLink.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.href}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium border-b border-border",
                    isActive(link.href) ? "bg-primary text-primary-foreground" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
