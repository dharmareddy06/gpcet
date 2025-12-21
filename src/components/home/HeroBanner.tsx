import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, Award } from "lucide-react";
import { collegeInfo } from "@/data/collegeData";

const HeroBanner = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/gpcet-campus.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="college-container relative z-10 py-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">NAAC A Accredited | NBA Approved</span>
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {collegeInfo.name}
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/90 mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {collegeInfo.tagline}
          </p>

          <p
            className="text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Affiliated to {collegeInfo.affiliatedTo} | Approved by {collegeInfo.approvedBy} |
            Established {collegeInfo.established}
          </p>

          <div
            className="flex flex-wrap gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded font-semibold hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded font-semibold hover:bg-primary-foreground/20 transition-all"
            >
              Explore Campus
            </Link>
          </div>

          {/* Quick Stats */}
          <div
            className="grid grid-cols-3 gap-6 max-w-lg animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-2 mx-auto">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">5000+</div>
              <div className="text-sm text-primary-foreground/70">Students</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-2 mx-auto">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">250+</div>
              <div className="text-sm text-primary-foreground/70">Faculty</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-2 mx-auto">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">90%</div>
              <div className="text-sm text-primary-foreground/70">Placement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroBanner;
