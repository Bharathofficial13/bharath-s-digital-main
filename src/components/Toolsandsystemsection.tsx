import { Code2, Palette, Zap, Settings } from "lucide-react";

const toolCategories = [
  {
    title: "Design Tools",
    tools: [
      { name: "Canva Pro", icon: "🎨" },
      { name: "Photoshop", icon: "📸" },
      { name: "Figma", icon: "🎭" },
      { name: "Premiere Pro", icon: "🎬" },
    ],
  },
  {
    title: "Development",
    tools: [
      { name: "React.js", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🌊" },
    ],
  },
  {
    title: "Platforms & Tools",
    tools: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "📚" },
      { name: "Asana", icon: "✓" },
    ],
  },
];

export default function ToolsAndSystemSection() {
  return (
    <section id="tools" className="py-24 lg:py-32 bg-accent">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight text-accent-foreground mb-4">
            TOOLS AND
            <br />
            SYSTEM
          </h2>
          <p className="text-accent-foreground/70 max-w-2xl mx-auto">
            I leverage industry-leading tools and technologies to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {toolCategories.map((category, idx) => (
            <div key={category.title} className={`reveal reveal-delay-${Math.min(idx + 1, 5)}`}>
              <h3 className="font-heading font-bold text-xl text-accent-foreground mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-accent-foreground/10 hover:bg-accent-foreground/20 transition-all duration-300 cursor-default group"
                  >
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <p className="text-sm font-semibold text-accent-foreground text-center">
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional highlight section */}
        <div className="mt-20 pt-20 border-t border-accent-foreground/20">
          <div className="reveal grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Code2 size={32} className="mx-auto mb-3 text-accent-foreground" />
              <h4 className="font-bold text-accent-foreground mb-2">Full-Stack Dev</h4>
              <p className="text-sm text-accent-foreground/70">Frontend & backend expertise</p>
            </div>
            <div className="text-center">
              <Palette size={32} className="mx-auto mb-3 text-accent-foreground" />
              <h4 className="font-bold text-accent-foreground mb-2">Creative Design</h4>
              <p className="text-sm text-accent-foreground/70">Branding & visual identity</p>
            </div>
            <div className="text-center">
              <Settings size={32} className="mx-auto mb-3 text-accent-foreground" />
              <h4 className="font-bold text-accent-foreground mb-2">Performance</h4>
              <p className="text-sm text-accent-foreground/70">Optimized & scalable solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}