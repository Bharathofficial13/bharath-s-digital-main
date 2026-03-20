import { useState } from "react";
import { ExternalLink, ImageIcon } from "lucide-react";
import ProjectCarouselModal from "./Projectcarouselmodal";

const projects = [
  {
    id: 1,
    title: "Sangaas – Course Selling Platform",
    client: "Thomas Hartwhite (Australia)",
    features: [
      "Course management system (Udemy-like)",
      "User authentication & payment integration",
      "Instructor & student dashboards",
      "Scalable architecture with polished UI",
    ],
    color: "bg-accent",
    images: ["sangaas-1.jpg", "sangaas-2.jpg", "sangaas-3.jpg", "sangaas-4.jpg"],
  },
  {
    id: 2,
    title: "HRM System",
    client: "Misyagi (Japan)",
    features: [
      "Full-featured HRM with payroll management",
      "Employee tracking & records",
      "Admin dashboard with reporting tools",
      "Role-based access control",
    ],
    color: "bg-primary",
    images: ["hrm-1.jpg", "hrm-2.jpg", "hrm-3.jpg"],
  },
  {
    id: 3,
    title: "Branding & Design Projects",
    client: "Various Clients",
    features: [
      "Logo design: Jayprakash Sweetstall",
      "Logo design: Kaviya Foods (Tanjore)",
      "Posters & visual assets for businesses",
      "Complete brand identity kits",
    ],
    color: "bg-accent",
    images: ["branding-1.jpg", "branding-2.jpg", "branding-3.jpg", "branding-4.jpg"],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    images: string[];
  } | null>(null);

  const handleOpenCarousel = (project: typeof projects[0]) => {
    setSelectedProject({
      id: project.id,
      title: project.title,
      images: project.images,
    });
  };

  return (
    <>
      <section id="projects" className="py-24 lg:py-32">
        <div className="container">
          <div className="reveal text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight mb-4">
              PRO<span className="text-accent">JE</span>CTS
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out some of my latest work and creative projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} group`}
              >
                <div className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Color accent bar */}
                  <div className={`h-3 ${p.color}`} />

                  {/* Image placeholder */}
                  <div className="relative w-full h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden group-hover:from-accent/10 transition-colors duration-300">
                    <div
                      className="absolute inset-0 cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      onClick={() => handleOpenCarousel(p)}
                    >
                      <div className="bg-foreground/90 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                        <ImageIcon size={32} className="text-background" />
                      </div>
                    </div>
                    <div className="text-center text-muted-foreground">
                      <svg
                        className="w-16 h-16 mx-auto opacity-20 group-hover:opacity-30 transition-opacity"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4.5-4.5 3 3 4-4 2.5 2.5V5z" />
                      </svg>
                      <p className="text-xs mt-2 opacity-50">Project Preview</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col space-y-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl leading-snug text-foreground mb-2">
                        {p.title}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {p.client}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4 border-t border-border">
                      <button
                        onClick={() => handleOpenCarousel(p)}
                        className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-accent-foreground bg-accent px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 active:scale-95"
                      >
                        <ImageIcon size={14} />
                        View Gallery
                      </button>
                      <a
                        href="#"
                        className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground border border-border rounded-full hover:border-accent hover:text-accent transition-all duration-300"
                      >
                        <ExternalLink size={14} />
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal reveal-delay-5 text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-3 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Carousel Modal */}
      {selectedProject && (
        <ProjectCarouselModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          projectTitle={selectedProject.title}
          images={selectedProject.images}
        />
      )}
    </>
  );
}