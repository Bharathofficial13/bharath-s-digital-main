import { useState, FormEvent, useRef } from "react";
import { Mail, Phone, Linkedin, Github, Instagram, Send, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const socials = [
  { icon: Mail, label: "bharathofficial1310@gmail.com", href: "mailto:bharathofficial1310@gmail.com" },
  { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
];

// Initialize EmailJS (happens once when component mounts)
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YX-uoXps6tz0Ypp3J");

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Send email via EmailJS
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_8uh2cop",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ullzwao",
        formRef.current!
      );

      if (response.status === 200) {
        setSubmitted(true);
        setLoading(false);
        
        // Reset form
        formRef.current?.reset();
        
        // Clear success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      setLoading(false);
      setError("Failed to send message. Please try again or contact directly via email.");
      console.error("EmailJS Error:", err);
      
      // Clear error after 5 seconds
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <section id="contact" className="section-dark py-24 lg:py-32">
      <div className="container max-w-5xl">
        <div className="reveal text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight mb-4">
            CON<span className="text-accent">TA</span>CT
          </h2>
          <p className="text-section-dark-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div className="reveal space-y-8">
            <p className="text-section-dark-foreground/70 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            {/* Social Links */}
            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-4 p-4 rounded-lg bg-section-dark-foreground/5 border border-section-dark-foreground/10 hover:border-accent hover:bg-section-dark-foreground/10 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <social.icon size={20} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium text-section-dark-foreground group-hover:text-accent transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Additional info */}
            <div className="pt-8 border-t border-section-dark-foreground/10">
              <p className="text-xs uppercase tracking-widest text-section-dark-foreground/50 mb-4">
                Response Time
              </p>
              <p className="text-section-dark-foreground/70">
                I typically respond to messages within 24-48 hours during business days.
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form onSubmit={handleSubmit} ref={formRef} className="reveal reveal-delay-1 space-y-5">
            {/* Error Alert */}
            {error && (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 animate-fade-up">
                <AlertCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                <p className="text-sm text-red-500">{error}</p>
              </div>
            )}

            {/* Name Field */}
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-section-dark-foreground mb-2">
                Your Name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
                className="w-full rounded-lg bg-section-dark-foreground/5 border border-section-dark-foreground/10 px-5 py-3 text-sm text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-section-dark-foreground mb-2">
                Your Email
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
                className="w-full rounded-lg bg-section-dark-foreground/5 border border-section-dark-foreground/10 px-5 py-3 text-sm text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-section-dark-foreground mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                required
                className="w-full rounded-lg bg-section-dark-foreground/5 border border-section-dark-foreground/10 px-5 py-3 text-sm text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-section-dark-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="w-full rounded-lg bg-section-dark-foreground/5 border border-section-dark-foreground/10 px-5 py-3 text-sm text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || submitted}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground px-7 py-3 text-sm font-semibold shadow-lg hover:shadow-xl disabled:opacity-70 transition-all duration-300 active:scale-[0.98]"
            >
              {loading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  Sending...
                </>
              ) : submitted ? (
                <>
                  <span>✓ Message Sent!</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {/* Success Message */}
            {submitted && (
              <p className="text-sm text-green-400 text-center">
                Thank you! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}