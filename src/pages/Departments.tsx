import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { departments, mtechPrograms, mbaPrograms, collegeInfo } from "@/data/collegeData";
import { Users, ArrowRight, BookOpen, Award, GraduationCap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// B.Tech images are now handled by the data source or we can use the map if they are missing
const deptImages: Record<string, string> = {
  cse: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  ece: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  eee: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop",
  mech: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&h=400&fit=crop",
  civil: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
  cai: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&h=400&fit=crop",
};

interface ProgramCardProps {
  prog: typeof departments[0];
  isBTech?: boolean;
}

const ProgramCard = ({ prog, isBTech = false }: ProgramCardProps) => (
  // Only link to detail page if it's a B.Tech course (as we only have pages for them currently)
  // or purely for correct behavior as requested by user.
  // The user requested: "in the departments page when i click on b.tech then only is should open b.tech courses and also apply for the m.tech and mba"
  // This implies we need sections for all.
  // For navigation, existing detail pages only exist for departments (B.Tech). 
  // We'll keep the link for B.Tech. For others, we might just show a card. 
  // But to keep it consistent, if we don't have a page, we might point to a generic page or just '#' for now?
  // Actually, let's point B.Tech to their real routes. M.Tech/MBA don't have routes yet in 'App.tsx' so we'll make them static cards or generic links.

  <Link
    to={isBTech || prog.id === 'mba-finance' ? `/departments/${prog.id}` : "#"}
    className="college-card group overflow-hidden h-full block"
  >
    <div className="relative h-56 overflow-hidden">
      <img
        src={isBTech && deptImages[prog.id] ? deptImages[prog.id] : prog.image}
        alt={prog.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded text-sm font-bold">
          {prog.shortName}
        </span>
      </div>
    </div>

    <div className="p-6">
      <h3 className="font-serif font-bold text-xl text-primary mb-3 group-hover:text-secondary transition-colors">
        {prog.name}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {prog.description}
      </p>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-muted-foreground">
            <Users className="w-4 h-4" />
            {prog.intake} seats
          </span>
          {isBTech && (
            <span className="flex items-center gap-1 text-green-600">
              <Award className="w-4 h-4" />
              NBA
            </span>
          )}
        </div>
        <span className="flex items-center gap-1 text-secondary font-medium group-hover:gap-2 transition-all">
          Details <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  </Link>
);

const Departments = () => {
  return (
    <Layout>
      <Helmet>
        <title>Departments | {collegeInfo.shortName}</title>
        <meta name="description" content={`Explore academic departments and programs at ${collegeInfo.name} - B.Tech, M.Tech, and MBA.`} />
      </Helmet>

      {/* Banner */}
      <section
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
        <div className="college-container relative z-10 h-full flex items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Academic Programs</h1>
            <p className="text-primary-foreground/80 text-lg">Undergraduate and Postgraduate Programs</p>
          </div>
        </div>
      </section>

      {/* Programs Accordion */}
      <section className="college-section bg-background">
        <div className="college-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="college-heading mb-4">Our Programs</h2>
              <p className="college-subheading max-w-2xl mx-auto">
                Discover our range of accredited programs designed to foster innovation and leadership.
              </p>
            </div>

            <Accordion type="single" collapsible defaultValue="btech" className="w-full space-y-4">

              {/* B.Tech Section */}
              <AccordionItem value="btech" className="border border-border rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 data-[state=open]:bg-muted/50 text-xl font-serif font-bold text-primary">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-accent" />
                    <span>Bachelor of Technology (B.Tech)</span>
                    <span className="text-sm font-sans font-normal text-muted-foreground ml-2">(Undergraduate - 4 Years)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 bg-muted/10">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {departments.map((dept) => (
                      <ProgramCard key={dept.id} prog={dept} isBTech={true} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* M.Tech Section */}
              <AccordionItem value="mtech" className="border border-border rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 data-[state=open]:bg-muted/50 text-xl font-serif font-bold text-primary">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-secondary" />
                    <span>Master of Technology (M.Tech)</span>
                    <span className="text-sm font-sans font-normal text-muted-foreground ml-2">(Postgraduate - 2 Years)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 bg-muted/10">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mtechPrograms.map((prog) => (
                      <ProgramCard key={prog.id} prog={prog} isBTech={false} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* MBA Section */}
              <AccordionItem value="mba" className="border border-border rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 data-[state=open]:bg-muted/50 text-xl font-serif font-bold text-primary">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-green-600" />
                    <span>Master of Business Administration (MBA)</span>
                    <span className="text-sm font-sans font-normal text-muted-foreground ml-2">(Postgraduate - 2 Years)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 bg-muted/10">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mbaPrograms.map((prog) => (
                      <ProgramCard key={prog.id} prog={prog} isBTech={false} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Departments;
