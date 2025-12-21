import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo, facilities, studentClubs, studentChapters } from "@/data/collegeData";

const facilityImages: Record<string, string> = {
  "Central Library": "/images/facilities/library.jpg",
  "Computer Labs": "/images/facilities/computer lab.jpg",
  "Sports Complex": "/images/facilities/sports.jpeg",
  "Hostel": "/images/facilities/hostel.jpg",
  "Cafeteria": "/images/facilities/canteen.jpg",
  "Auditorium": "/images/facilities/auditorim.jpg",
};

const CampusLife = () => {
  return (
    <Layout>
      <Helmet>
        <title>Campus Life | {collegeInfo.shortName}</title>
        <meta name="description" content={`Experience campus life at ${collegeInfo.name} - world-class facilities, student clubs, hostels, and vibrant activities.`} />
      </Helmet>

      {/* Banner */}
      <section
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
        <div className="college-container relative z-10 h-full flex items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Campus Life</h1>
            <p className="text-primary-foreground/80 text-lg">Where learning meets living</p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="college-section bg-background">
        <div className="college-container">
          <h2 className="college-heading text-center mb-12">Our Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">{facility.name}</h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Clubs */}
      <section id="clubs" className="college-section bg-college-cream">
        <div className="college-container">
          <h2 className="college-heading text-center mb-12">Student Clubs & Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {studentClubs.map((club) => (
              <div key={club.name} className="college-card p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                <h3 className="font-serif font-bold text-xl text-primary mb-3">{club.name}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{club.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-serif font-bold text-center mb-8 text-primary">Professional Chapters</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {studentChapters.map((chapter) => (
              <div key={chapter.name} className="college-card p-6 border-t-4 border-secondary hover:transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-lg text-foreground mb-2">{chapter.name}</h3>
                <p className="text-sm text-muted-foreground">{chapter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section id="events" className="college-section bg-background">
        <div className="college-container">
          <h2 className="college-heading text-center mb-12">Campus Events</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
            ].map((src, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden aspect-video">
                <img src={src} alt={`Event ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CampusLife;
