import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { placements, collegeInfo } from "@/data/collegeData";
import { TrendingUp, Building2, DollarSign, Users, Award, Target } from "lucide-react";

import { useState } from "react";

const RecruiterLogo = ({ name, logo }: { name: string; logo: string }) => {
  const [error, setError] = useState(false);

  // Generate initials (e.g., "Value Labs" -> "VL")
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="bg-background p-6 rounded-lg flex flex-col items-center justify-center h-32 shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-border">
      <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
        {!error ? (
          <img
            src={logo}
            alt={name}
            className="max-w-full max-h-full object-contain transition-all"
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted/30 rounded text-primary font-bold text-2xl font-serif">
            {initials}
          </div>
        )}
      </div>
      <span className="text-xs font-medium text-muted-foreground mt-3 group-hover:text-primary transition-colors">
        {name}
      </span>
    </div>
  );
};

const Placements = () => {
  const recruiterLogos = placements.topRecruiters;

  const highlights = [
    { icon: DollarSign, value: placements.highlights.highestPackage, label: "Highest Package", color: "text-green-600" },
    { icon: TrendingUp, value: placements.highlights.averagePackage, label: "Average Package", color: "text-blue-600" },
    { icon: Users, value: placements.highlights.totalOffers, label: "Total Offers", color: "text-purple-600" },
    { icon: Building2, value: placements.highlights.companiesVisited, label: "Companies Visited", color: "text-orange-600" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Placements | {collegeInfo.shortName}</title>
        <meta name="description" content={`Training and placements at ${collegeInfo.name} - ${placements.highlights.highestPackage} highest package, ${placements.highlights.totalOffers} offers from ${placements.highlights.companiesVisited} companies.`} />
      </Helmet>

      {/* Banner */}
      <section
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
        <div className="college-container relative z-10 h-full flex items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Training & Placements</h1>
            <p className="text-primary-foreground/80 text-lg">Building careers, shaping futures</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="college-section bg-background">
        <div className="college-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.label} className="college-card p-6 text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-muted ${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">
                  {item.value}
                </div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters */}
      <section className="college-section bg-college-cream">
        <div className="college-container">
          <h2 className="college-heading text-center mb-12">Our Recruiters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {recruiterLogos.map((company, index) => (
              <RecruiterLogo key={index} name={company.name} logo={company.logo} />
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="college-section bg-background">
        <div className="college-container">
          <h2 className="college-heading text-center mb-12">Training Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Technical Training", desc: "Programming languages, Data Structures, Algorithms, and core technical skills" },
              { icon: Users, title: "Soft Skills", desc: "Communication, presentation, group discussion, and interview preparation" },
              { icon: Award, title: "Certifications", desc: "Industry certifications from Microsoft, Oracle, AWS, and more" },
            ].map((item) => (
              <div key={item.title} className="college-card p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="college-section bg-primary">
        <div className="college-container">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground text-center mb-12">
            Placement Process
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {["Pre-Placement Talk", "Online Test", "Technical Round", "HR Interview", "Final Selection"].map((step, index) => (
              <div key={step} className="relative">
                <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
                  <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-primary-foreground text-sm font-medium">{step}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-accent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Placements;
