export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-20">
      {/* Decorative wavy lines - bottom left */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path
            d="M10,30 Q20,20 30,30 T50,30 T70,30 T90,30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M10,50 Q20,40 30,50 T50,50 T70,50 T90,50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M10,70 Q20,60 30,70 T50,70 T70,70 T90,70"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="container relative z-10 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 w-full items-center">
          {/* Left - Text Content */}
          <div className="space-y-6 lg:pr-12 animate-fade-up">
            <div>
              <p className="text-muted-foreground font-body text-sm uppercase tracking-widest mb-4">
                Welcome to my portfolio
              </p>
              <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1] tracking-tight text-foreground">
                Hi I'm <span className="text-accent">BHARATH</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl font-semibold text-foreground leading-relaxed">
              Software Developer & Creative Designer
            </p>

            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              I specialize in full-stack web development, responsive design, and creative branding. Let's build something amazing together.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-3 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-foreground text-foreground px-8 py-3 font-semibold hover:bg-foreground hover:text-background transition-all duration-300 active:scale-95"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right - Yellow accent block with placeholder for image */}
          <div className="relative flex items-center justify-center lg:justify-end h-96 lg:h-full animate-slide-in-right" style={{ animationDelay: "200ms" }}>
            {/* Yellow background block */}
            <div className="absolute inset-0 bg-accent rounded-3xl lg:rounded-none" />
            
            {/* Image placeholder or actual image */}
            <div className="relative z-10 flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-accent/80 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-30" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4.5-4.5 3 3 4-4 2.5 2.5V5z" />
                  </svg>
                  <p className="text-sm opacity-60">Your photo here</p>
                </div>
              </div>
            </div>

            {/* Decorative dots - top right */}
            <div className="absolute top-8 right-8 flex gap-3 z-20 hidden lg:flex">
              <span className="w-4 h-4 rounded-full bg-foreground/40" />
              <span className="w-4 h-4 rounded-full bg-foreground/20" />
              <span className="w-4 h-4 rounded-full bg-foreground/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}