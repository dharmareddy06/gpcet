import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo } from "@/data/collegeData";
import { Award, Target, Eye, Users, Building2 } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us | {collegeInfo.shortName}</title>
        <meta name="description" content={`Learn about ${collegeInfo.name} - our vision, mission, history, and commitment to excellence in engineering education.`} />
      </Helmet>

      {/* Banner */}
      <section
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/gpcet-video-cover.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
        <div className="college-container relative z-10 h-full flex items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">About Us</h1>
            <p className="text-primary-foreground/80 text-lg">Discover the legacy of excellence at GPCET</p>
          </div>
        </div>
      </section>

      {/* Legacy / Intro */}
      <section className="college-section bg-college-cream">
        <div className="college-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Est. {collegeInfo.established}
              </span>
              <h2 className="college-heading mb-6">Our Legacy</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                G. Pullaiah College of Engineering and Technology, Kurnool was established in the year 2007 and is run by Sri Krishna Educational Society founded by a devoted Pioneer duo in the field of education Sri G. Pullaiah & his son Sri G.V.M Mohan Kumar.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                It is one of the best colleges to acquire an engineering degree because it stands out unique in every aspect starting from infrastructure to the labs and from faculty to the Trainings being imparted. It started as a regular Engineering college unlike others and now it is an autonomous college where it has become the student’s first choice with 100% admissions every year in the entire state of Andhra Pradesh.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-primary font-serif">18+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-secondary font-serif">5K+</div>
                  <div className="text-sm text-muted-foreground">Alumni</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-accent font-serif">A</div>
                  <div className="text-sm text-muted-foreground">NAAC</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/gpcet-history.jpg"
                alt="College History"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Governing Body */}
      <section id="management" className="college-section bg-background">
        <div className="college-container">
          <h2 className="college-heading text-center mb-12">Governing Body</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left border-b border-primary-foreground/20">Name</th>
                  <th className="p-4 text-left border-b border-primary-foreground/20">Designation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: "Sri. G. V. M. Mohan Kumar", designation: "Chairman, GPCET" },
                  { name: "Sri. G. Pullaiah", designation: "Secretary & Correspondent, GPCET" },
                  { name: "Sri. G. Gopinath", designation: "Joint Secretary & Treasurer, GPCET" },
                  { name: "Sri. G. Vamsidhar", designation: "Vice-Chairman, GPCET" },
                  { name: "Prof. N. Visali", designation: "Professor, Dept. of EEE, JNTUA" },
                  { name: "Sri. E. S. Chakravarthy", designation: "Advisor, GPCET" },
                  { name: "Dr A.Rajanikanth", designation: "Director, Symbiosis Institute of Technology" },
                  { name: "Sri. Sandeep Srivastava", designation: "Director of Product, Microsoft Agentic AI" },
                  { name: "Dr S.Vamsi Krishna", designation: "Adjunct Engineer, CDAC" },
                  { name: "Sri.I.Suresh Babu", designation: "Managing Director, Sailotech" },
                  { name: "Sri. D. V. Jogaiah Sharma", designation: "Senior Advocate" },
                  { name: "Sri. H. Venkatesh Babu", designation: "Civil Engineer" },
                  { name: "Dr. J. Mamatha", designation: "Professor, Dept. of Chemistry, GPCET" },
                  { name: "Dr. M. Giridhar Kumar", designation: "Dean Administration, GPCET" },
                  { name: "Dr. C. Srinivasa Rao", designation: "Principal & Member Secretary, GPCET" }
                ].map((member, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">{member.name}</td>
                    <td className="p-4 text-muted-foreground">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="college-section bg-college-cream">
        <div className="college-container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="college-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg italic">
                "To prepare professionally superior and ethically strong global manpower in technology and management to serve the nation and the world in the 21st Century."
              </p>
            </div>

            <div className="college-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-secondary">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To strive hard in training the students with the current technology and motivate them to take up research problems and innovations associated with professional, personality development programs to meet the challenges in this competitive world in an efficient manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="college-section bg-primary">
        <div className="college-container">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground text-center mb-12">
            Accreditations & Recognitions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "NAAC A", desc: "National Assessment and Accreditation Council" },
              { name: "NBA", desc: "National Board of Accreditation" },
              { name: "AICTE", desc: "All India Council for Technical Education" },
              { name: "JNTUA", desc: "Jawaharlal Nehru Technological University" },
            ].map((item) => (
              <div key={item.name} className="bg-primary-foreground/10 rounded-lg p-6 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-xl text-primary-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
