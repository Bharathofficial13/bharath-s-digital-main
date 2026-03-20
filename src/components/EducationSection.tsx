import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 lg:py-32">
      <div className="container max-w-3xl text-center">
        <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl tracking-tight mb-16">
          EDU<span className="text-accent">CA</span>TION
        </h2>
        <div className="reveal reveal-delay-1 bg-card rounded-2xl p-8 shadow-[0_2px_24px_hsl(0_0%_0%/0.06)] flex flex-col sm:flex-row items-center gap-6 text-left">
          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
            <GraduationCap className="text-accent" size={28} />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl">B.E Computer Science Engineering</h3>
            <p className="text-muted-foreground mt-1">Graduated 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}
