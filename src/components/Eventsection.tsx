import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "Canva Community Labs 2024",
    location: "India",
    date: "2024",
    description: "Met with 50+ creative professionals and expanded my network",
  },
  {
    title: "GetHired Job Fair 2024",
    location: "Conference",
    date: "2024",
    description: "Participated in industry networking and career development",
  },
  {
    title: "Digital Marketing Summit",
    location: "Online",
    date: "2024",
    description: "Explored latest trends in digital marketing and content creation",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="section-dark py-24 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight mb-4">
            Event I attended
            <br />
            in <span className="text-accent">2024</span>
          </h2>
          <p className="text-section-dark-foreground/70 max-w-2xl mx-auto">
            Connecting with communities and staying updated with industry trends
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {events.map((event, idx) => (
            <div
              key={event.title}
              className={`reveal reveal-delay-${Math.min(idx + 1, 5)} group`}
            >
              <div className="bg-section-dark-foreground/5 border border-section-dark-foreground/10 rounded-2xl overflow-hidden hover:border-accent transition-all duration-300">
                {/* Image placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-section-dark-foreground/10 to-section-dark-foreground/5 flex items-center justify-center overflow-hidden group-hover:from-accent/20 group-hover:to-accent/10 transition-colors duration-300">
                  <div className="text-center text-section-dark-foreground/30 group-hover:text-accent/40 transition-colors">
                    <Calendar size={32} className="mx-auto mb-2" />
                    <p className="text-xs">Event Photo</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-section-dark-foreground mb-2 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-section-dark-foreground/60">
                      <MapPin size={16} className="text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-section-dark-foreground/70 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="pt-4 border-t border-section-dark-foreground/10">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {event.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="reveal reveal-delay-4 text-center">
          <p className="text-section-dark-foreground/70 mb-6">
            Looking forward to more events and opportunities to collaborate in 2025!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-accent text-accent px-8 py-3 font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 active:scale-95"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}