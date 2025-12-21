import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Calendar, 
  FileText, 
  DollarSign, 
  Award, 
  Users, 
  User, 
  BookOpen 
} from "lucide-react";
import { quickLinks } from "@/data/collegeData";

const iconMap: Record<string, typeof GraduationCap> = {
  "Admissions 2025": GraduationCap,
  "Academic Calendar": Calendar,
  "Examination Results": FileText,
  "Fee Structure": DollarSign,
  "Scholarships": Award,
  "Alumni Portal": Users,
  "Student Login": User,
  "Faculty Login": BookOpen,
};

const QuickLinksSection = () => {
  return (
    <section className="college-section bg-background">
      <div className="college-container">
        <div className="text-center mb-12">
          <h2 className="college-heading mb-4">Quick Access</h2>
          <p className="college-subheading">
            Important links for students, parents, and faculty
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((link) => {
            const Icon = iconMap[link.name] || FileText;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`flex flex-col items-center gap-3 p-6 rounded-lg border transition-all hover:scale-105 ${
                  link.highlight
                    ? "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/90"
                    : "bg-card border-border hover:border-primary hover:shadow-card"
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                  link.highlight ? "bg-secondary-foreground/10" : "bg-primary/10"
                }`}>
                  <Icon className={`w-7 h-7 ${link.highlight ? "text-secondary-foreground" : "text-primary"}`} />
                </div>
                <span className={`text-sm font-semibold text-center ${
                  link.highlight ? "text-secondary-foreground" : "text-foreground"
                }`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
