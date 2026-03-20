import { Layers, Globe, AppWindow, PenTool, Search, RefreshCw, ArrowRightLeft } from "lucide-react";

const services = [
  { icon: Layers, title: "UI/UX Design", desc: "Intuitive interfaces that delight users" },
  { icon: Globe, title: "Static & Dynamic Websites", desc: "Fast, responsive sites built to convert" },
  { icon: AppWindow, title: "Web Applications", desc: "Scalable full-stack web apps" },
  { icon: PenTool, title: "Logo Designing", desc: "Memorable brand identities" },
  { icon: Search, title: "SEO Improvements", desc: "Higher rankings, more visibility" },
  { icon: RefreshCw, title: "UI Re-architecture", desc: "Modernize outdated interfaces" },
  { icon: ArrowRightLeft, title: "Legacy Migration", desc: "Smooth transition to modern stacks" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-dark py-24 lg:py-32">
      <div className="container">
        <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl tracking-tight mb-14 text-center">
          SERV<span className="text-accent">IC</span>ES
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group rounded-2xl bg-section-dark-foreground/5 border border-section-dark-foreground/10 p-6 transition-all duration-300 hover:bg-accent hover:border-accent`}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent-foreground/20 transition-colors">
                <s.icon size={22} className="text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-1 group-hover:text-accent-foreground transition-colors">{s.title}</h3>
              <p className="text-sm text-section-dark-foreground/60 group-hover:text-accent-foreground/80 transition-colors">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
