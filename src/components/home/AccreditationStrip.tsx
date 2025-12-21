import { accreditations } from "@/data/collegeData";

const AccreditationStrip = () => {
  // Double the items for seamless loop
  const items = [...accreditations, ...accreditations];

  return (
    <section className="bg-secondary py-4 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content flex gap-12">
          {items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-3 text-secondary-foreground whitespace-nowrap"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-semibold text-sm md:text-base">{item.name}</span>
              <span className="text-accent text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationStrip;
