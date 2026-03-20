import { Monitor, Palette, Layout, Briefcase } from "lucide-react";

const items = [
  { icon: Briefcase, text: "2 years of professional experience in web development" },
  { icon: Monitor, text: "CRM & HRM system development for mid-sized businesses" },
  { icon: Layout, text: "Landing page development for small companies & startups" },
  { icon: Palette, text: "Branding work including logos, posters & visual identity" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-accent py-24 lg:py-32">
      <div className="container max-w-4xl">
        <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl tracking-tight mb-14 text-center">
          EXPERI<span className="text-foreground/70">ENCE</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-card rounded-2xl p-6 shadow-[0_2px_16px_hsl(0_0%_0%/0.05)] flex items-start gap-4 transition-shadow duration-300 hover:shadow-[0_4px_24px_hsl(0_0%_0%/0.1)]`}
            >
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                <item.icon size={20} className="text-accent-foreground" />
              </div>
              <p className="text-sm font-medium leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
