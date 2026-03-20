const categories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Angular", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "SQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    skills: ["AWS", "Docker", "CMS", "WordPress", "Git"],
  },
  {
    title: "Design & Editing",
    skills: ["Canva", "Photoshop", "Premiere Pro", "Figma"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="container">
        <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl tracking-tight mb-14 text-center">
          SK<span className="text-accent">IL</span>LS
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, ci) => (
            <div key={cat.title} className={`reveal reveal-delay-${Math.min(ci + 1, 5)}`}>
              <h3 className="font-heading font-bold text-lg mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-muted text-sm font-medium transition-colors duration-200 hover:bg-accent hover:text-accent-foreground cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
