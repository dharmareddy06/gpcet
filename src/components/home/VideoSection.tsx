import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="college-section bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="college-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Campus Tour
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Experience GPCET Campus
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Take a virtual tour of our sprawling campus spread across 10 acres.
              Explore our state-of-the-art laboratories, well-equipped classrooms,
              expansive library, sports facilities, and beautiful green spaces that
              make GPCET a perfect place for holistic development.
            </p>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                10+ Acres of Green Campus
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Modern Infrastructure & Labs
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Wi-Fi Enabled Smart Classrooms
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Hostels Facility for Girls
              </li>
            </ul>
          </div>

          {/* Right - Video */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-video">
              {!isPlaying ? (
                <>
                  <img
                    src="/images/gpcet-video-cover.png"
                    alt="Campus Overview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow"
                      aria-label="Play video"
                    >
                      <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                    </button>
                  </div>
                </>
              ) : (
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SqS8bQLSKCE?si=p26YvgziEIWY-Fac" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
