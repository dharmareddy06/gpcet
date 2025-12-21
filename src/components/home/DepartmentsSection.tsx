import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import { departments } from "@/data/collegeData";

const DepartmentsSection = () => {
  const deptImages: Record<string, string> = {
    cse: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
    ece: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    eee: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=250&fit=crop",
    mech: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=400&h=250&fit=crop",
    civil: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop",
    cai: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&h=250&fit=crop",
  };

  return (
    <section className="college-section bg-college-light-blue">
      <div className="college-container">
        <div className="text-center mb-12">
          <h2 className="college-heading mb-4">Academic Departments</h2>
          <p className="college-subheading max-w-2xl mx-auto">
            Choose from a wide range of engineering programs designed to prepare you for a successful career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <Link
              key={dept.id}
              to={`/departments/${dept.id}`}
              className="college-card group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deptImages[dept.id]}
                  alt={dept.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded text-sm font-semibold mb-2">
                    {dept.shortName}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-serif font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
                  {dept.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {dept.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>Intake: {dept.intake}</span>
                  </div>
                  <span className="flex items-center gap-1 text-secondary text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-secondary transition-colors"
          >
            View All Departments
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
