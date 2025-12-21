import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { facilities } from "@/data/collegeData";

const FacilitiesSection = () => {
  const facilityImages: Record<string, string> = {
    "Central Library": "/images/facilities/library.jpg",
    "Computer Labs": "images/facilities/computer lab.jpg",
    "Sports Complex": "images/facilities/sports.jpeg",
    "Hostel": "images/facilities/hostel.jpg",
    "Cafeteria": "images/facilities/canteen.jpg",
    "Auditorium": "images/facilities/auditorim.jpg",
  };

  return (
    <section className="college-section bg-college-cream">
      <div className="college-container">
        <div className="text-center mb-12">
          <h2 className="college-heading mb-4">Campus Facilities</h2>
          <p className="college-subheading max-w-2xl mx-auto">
            State-of-the-art infrastructure to support your academic and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div key={facility.name} className="college-card group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facilityImages[facility.name] || "/images/facilities/library.jpg"}
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif font-bold text-lg text-primary mb-2">
                  {facility.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/campus-life"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-secondary transition-colors"
          >
            Explore Campus Life
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
