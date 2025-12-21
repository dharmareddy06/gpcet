import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo } from "@/data/collegeData";
import { GraduationCap, Award, DollarSign, BookOpen, Users, Heart } from "lucide-react";

const services = [
  {
    title: "Scholarships",
    description: "Merit-based and need-based scholarships for deserving students",
    icon: DollarSign,
    details: ["Central & State Government Scholarships", "Management Merit Scholarships", "SC/ST/BC/EBC Scholarships"],
  },
  {
    title: "Career Guidance",
    description: "Counseling and guidance for career planning and higher studies",
    icon: GraduationCap,
    details: ["GATE/GRE Preparation", "Career Counseling", "Industry Expert Sessions"],
  },
  {
    title: "Student Welfare",
    description: "Health services, counseling, and support systems",
    icon: Heart,
    details: ["Medical Facility on Campus", "Mental Health Support", "Anti-Ragging Cell"],
  },
  {
    title: "Academic Support",
    description: "Remedial classes and academic assistance programs",
    icon: BookOpen,
    details: ["Bridge Courses", "Remedial Classes", "Peer Tutoring"],
  },
  {
    title: "Skill Development",
    description: "Industry-oriented training and certification programs",
    icon: Award,
    details: ["Soft Skills Training", "Technical Workshops", "Industry Certifications"],
  },
  {
    title: "Student Organizations",
    description: "NSS, NCC, and various student bodies for holistic development",
    icon: Users,
    details: ["NSS Unit", "Sports Committee", "Cultural Committee"],
  },
];

const StudentServices = () => {
  return (
    <Layout>
      <Helmet>
        <title>Student Services | {collegeInfo.shortName}</title>
        <meta name="description" content={`Student services at ${collegeInfo.name} - scholarships, career guidance, welfare, and support programs.`} />
      </Helmet>

      {/* Banner */}
      <section 
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
        <div className="college-container relative z-10 h-full flex items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Student Services</h1>
            <p className="text-primary-foreground/80 text-lg">Supporting your academic journey</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="college-section bg-background">
        <div className="college-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="college-card p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="college-section bg-primary">
        <div className="college-container text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">Need Assistance?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Our student services team is here to help. Reach out for any queries regarding scholarships, counseling, or support services.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded font-semibold hover:bg-accent/90 transition-colors"
          >
            Contact Student Services
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default StudentServices;
