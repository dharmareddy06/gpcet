import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Building2, DollarSign, Users } from "lucide-react";
import { placements } from "@/data/collegeData";

const RecruiterLogo = ({ name, logo }: { name: string; logo: string }) => {
  const [error, setError] = React.useState(false);

  // Generate initials (e.g., "Value Labs" -> "VL")
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col items-center gap-2 group w-full">
      <div className="bg-background p-3 rounded-lg flex items-center justify-center h-16 w-full shadow-sm group-hover:shadow-md transition-all overflow-hidden border border-transparent group-hover:border-border">
        {!error ? (
          <img
            src={logo}
            alt={name}
            className="max-w-full max-h-full object-contain transition-all"
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted/30 rounded text-primary font-bold text-xl font-serif">
            {initials}
          </div>
        )}
      </div>
      <span className="text-[10px] font-medium text-muted-foreground text-center truncate w-full group-hover:text-primary transition-colors">
        {name}
      </span>
    </div>
  );
};

const PlacementsSection = () => {
  const recruiters = placements.topRecruiters;

  const highlights = [
    { icon: DollarSign, value: placements.highlights.highestPackage, label: "Highest Package" },
    { icon: TrendingUp, value: placements.highlights.averagePackage, label: "Average Package" },
    { icon: Users, value: placements.highlights.totalOffers, label: "Total Offers" },
    { icon: Building2, value: placements.highlights.companiesVisited, label: "Companies" },
  ];

  return (
    <section className="college-section bg-background">
      <div className="college-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Career Excellence
            </span>
            <h2 className="college-heading mb-4">
              Training & Placements
            </h2>
            <p className="text-muted-foreground mb-8">
              Our dedicated Training and Placement Cell works tirelessly to bridge the gap between
              academia and industry. We ensure every student gets the opportunity to build a
              successful career with top companies.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-college-cream p-4 rounded-lg border border-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary font-serif">{item.value}</div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/placements"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded font-semibold hover:bg-secondary/90 transition-colors"
            >
              Explore Placements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right - Recruiter Logos */}
          <div className="bg-college-cream p-8 rounded-lg">
            <h3 className="font-serif font-bold text-xl text-primary mb-6 text-center">
              Our Top Recruiters
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {recruiters.map((recruiter, index) => (
                <RecruiterLogo key={index} name={recruiter.name} logo={recruiter.logo} />
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              And 39+ more companies recruiting from our campus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
