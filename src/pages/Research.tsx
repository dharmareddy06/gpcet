import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo } from "@/data/collegeData";
import { BookOpen, Lightbulb, Award, Users, FileText, ExternalLink } from "lucide-react";

const Research = () => {
  const researchAreas = [
    { title: "Artificial Intelligence & Machine Learning", papers: 45, icon: "🤖" },
    { title: "Internet of Things (IoT)", papers: 32, icon: "📡" },
    { title: "Cloud Computing & Big Data", papers: 28, icon: "☁️" },
    { title: "Renewable Energy Systems", papers: 24, icon: "⚡" },
    { title: "VLSI Design", papers: 20, icon: "🔌" },
    { title: "Structural Engineering", papers: 18, icon: "🏗️" },
  ];

  const recentPublications = [
    { title: "Deep Learning Approach for Medical Image Analysis", journal: "IEEE Transactions", year: 2024, author: "Dr. K. Venkata Rao" },
    { title: "Smart Grid Energy Management Using IoT", journal: "Elsevier", year: 2024, author: "Dr. P. Srinivas" },
    { title: "Optimization of VLSI Circuit Design", journal: "Springer", year: 2023, author: "Dr. M. Lakshmi" },
    { title: "Sustainable Construction Materials Research", journal: "Taylor & Francis", year: 2023, author: "Dr. S. Ramesh" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Research | {collegeInfo.shortName}</title>
        <meta name="description" content={`Research and innovation at ${collegeInfo.name} - publications, patents, and funded projects across engineering disciplines.`} />
      </Helmet>

      {/* Banner */}
      <section 
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
        <div className="college-container relative z-10 h-full flex items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Research & Innovation</h1>
            <p className="text-primary-foreground/80 text-lg">Advancing knowledge through cutting-edge research</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="college-section bg-background">
        <div className="college-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Publications", icon: FileText },
              { value: "15+", label: "Patents Filed", icon: Lightbulb },
              { value: "₹5 Cr+", label: "Funded Projects", icon: Award },
              { value: "50+", label: "Research Scholars", icon: Users },
            ].map((stat) => (
              <div key={stat.label} className="college-card p-6 text-center">
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary font-serif mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="college-section bg-college-cream">
        <div className="college-container">
          <h2 className="college-heading text-center mb-12">Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area) => (
              <div key={area.title} className="college-card p-6">
                <span className="text-4xl mb-4 block">{area.icon}</span>
                <h3 className="font-serif font-bold text-lg text-primary mb-2">{area.title}</h3>
                <p className="text-muted-foreground">{area.papers} Publications</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="college-section bg-background">
        <div className="college-container">
          <h2 className="college-heading text-center mb-12">Recent Publications</h2>
          <div className="space-y-4">
            {recentPublications.map((pub, index) => (
              <div key={index} className="college-card p-6 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {pub.author} • {pub.journal} • {pub.year}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
