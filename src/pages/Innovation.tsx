import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo } from "@/data/collegeData";
import { Lightbulb, Rocket, Users, Award, Building2 } from "lucide-react";

const Innovation = () => {
  const initiatives = [
    {
      title: "Innovation & Incubation Centre",
      description: "Supporting student startups with mentorship, funding, and infrastructure",
      icon: Rocket,
      stats: "15+ Startups Incubated",
    },
    {
      title: "Industry Collaboration Cell",
      description: "Partnerships with leading companies for research and development",
      icon: Building2,
      stats: "50+ Industry Partners",
    },
    {
      title: "IPR Cell",
      description: "Assistance in filing patents and protecting intellectual property",
      icon: Lightbulb,
      stats: "20+ Patents Filed",
    },
    {
      title: "Entrepreneurship Development",
      description: "Workshops, bootcamps, and mentorship for aspiring entrepreneurs",
      icon: Users,
      stats: "500+ Students Trained",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Innovation | {collegeInfo.shortName}</title>
        <meta name="description" content={`Innovation and entrepreneurship at ${collegeInfo.name} - incubation center, industry partnerships, and startup support.`} />
      </Helmet>

      {/* Banner */}
      <section 
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
        <div className="college-container relative z-10 h-full flex items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Innovation & Entrepreneurship</h1>
            <p className="text-primary-foreground/80 text-lg">Fostering creativity and business acumen</p>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="college-section bg-background">
        <div className="college-container">
          <h2 className="college-heading text-center mb-12">Our Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((item) => (
              <div key={item.title} className="college-card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <span className="inline-block bg-accent/20 text-accent-foreground px-3 py-1 rounded text-sm font-semibold">
                      {item.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons */}
      <section className="college-section bg-primary">
        <div className="college-container">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground text-center mb-12">
            Innovation Events
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Hackathon 2024", participants: "500+", prize: "₹1 Lakh" },
              { name: "Idea Pitch Contest", participants: "200+", prize: "₹50,000" },
              { name: "Tech Innovation Summit", participants: "1000+", prize: "Incubation Support" },
            ].map((event) => (
              <div key={event.name} className="bg-primary-foreground/10 rounded-lg p-6 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-xl text-primary-foreground mb-2">{event.name}</h3>
                <p className="text-primary-foreground/70 text-sm mb-2">{event.participants} Participants</p>
                <p className="text-accent font-semibold">Prize: {event.prize}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Innovation;
