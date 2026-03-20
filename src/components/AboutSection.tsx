export default function AboutSection() {
  return (
    <section id="about" className="section-dark py-24 lg:py-32">
      <div className="container max-w-3xl">
        <div className="reveal space-y-6">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight">
            AB<span className="text-accent">OU</span>T ME
          </h2>

          <div className="space-y-4">
            <p className="text-section-dark-foreground/80 leading-relaxed text-base">
              Hi, I'm Bharath S, a passionate software developer focused on building modern, responsive websites and web applications. I specialize in full-stack development, freelance work, and creative content design.
            </p>

            <p className="text-section-dark-foreground/80 leading-relaxed text-base">
              Beyond code, I have a deep passion for creative design — from posters and branding to video editing. I love combining technical expertise with visual storytelling to create impactful digital experiences.
            </p>

            <p className="text-section-dark-foreground/80 leading-relaxed text-base">
              With 2+ years of professional experience, I've worked on CRM systems, HRM platforms, landing pages, and comprehensive branding projects for clients across different industries.
            </p>
          </div>

          <p className="font-heading font-bold text-accent text-lg pt-4">
            Let's connect and create something awesome!
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-accent text-accent px-8 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 active:scale-95"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
}