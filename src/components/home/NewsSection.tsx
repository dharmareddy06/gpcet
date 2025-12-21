import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { news } from "@/data/collegeData";

const NewsSection = () => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Achievement: "bg-accent text-accent-foreground",
      Event: "bg-secondary text-secondary-foreground",
      Partnership: "bg-primary text-primary-foreground",
      Placements: "bg-green-600 text-white",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="college-section bg-background">
      <div className="college-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="college-heading mb-2">Latest News & Updates</h2>
            <p className="college-subheading">
              Stay updated with the latest happenings at GPCET
            </p>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
          >
            View All News
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <article key={item.id} className="college-card group">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getCategoryColor(item.category)}`}>
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {formatDate(item.date)}
                </div>
              </div>
            </article>
          ))}
        </div>


      </div>
    </section>
  );
};

export default NewsSection;
