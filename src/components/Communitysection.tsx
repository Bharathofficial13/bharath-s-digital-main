import { Facebook, Youtube } from "lucide-react";

interface PhoneContentProps {
  type: "video" | "gif" | "placeholder";
  src?: string;
  label?: string;
}

interface PhoneProps {
  content: PhoneContentProps;
  position: "left" | "right";
  delay: number;
}

const Phone = ({ content, position, delay }: PhoneProps) => {
  const positionClass = position === "left" ? "absolute left-0" : "absolute right-0";
  const zIndex = position === "left" ? "z-20" : "z-10";

  return (
    <div
      className={`${positionClass} ${zIndex} w-40 sm:w-48`}
      style={{
        animation: `float 3s ease-in-out infinite`,
        animationDelay: `${delay * 0.5}s`,
      }}
    >
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl p-3 shadow-2xl">
        {/* Phone frame */}
        <div className="bg-black rounded-2xl aspect-[9/20] flex items-center justify-center overflow-hidden border-8 border-gray-900">
          {/* Phone content */}
          <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black flex items-center justify-center overflow-hidden">
            {content.type === "video" && content.src ? (
              <video
                src={content.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : content.type === "gif" && content.src ? (
              <img
                src={content.src}
                alt="Phone content"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center text-gray-400 text-xs">
                <p className="opacity-50">{content.label || "Phone Screen"}</p>
              </div>
            )}
          </div>
        </div>

        {/* Phone speaker */}
        <div className="flex justify-center mt-2">
          <div className="w-20 h-1 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default function CommunitySection() {
  // Configure your videos/GIFs here
  // Type: 'video' for .mp4 or 'gif' for .gif
  // src: path to your video/gif file

  const leftPhoneContent: PhoneContentProps = {
    type: "placeholder", // Change to 'video' or 'gif' when you have content
    label: "Upload Video/GIF",
    // src: "/videos/community-left.mp4", // Example: video
    // src: "/gifs/community-left.gif", // Example: gif
  };

  const rightPhoneContent: PhoneContentProps = {
    type: "placeholder",
    label: "Upload Video/GIF",
    // src: "/videos/community-right.mp4",
    // src: "/gifs/community-right.gif",
  };

  return (
    <section id="community" className="section-light py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <div className="reveal space-y-8">
            <div>
              <p className="text-muted-foreground uppercase tracking-widest text-sm mb-2">
                Join the movement
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight leading-tight">
                meet my
                <br />
                <span className="text-foreground">COMM</span><span className="text-accent">UNITY</span>
              </h2>
            </div>

            <p className="text-foreground/70 leading-relaxed max-w-md text-base">
              Through organic reach, I've connected with over 135K+ amazing people who are ready to level up in the digital world. I share practical tips on Canva, work-from-home opportunities, AI tools, and the best websites to boost creativity and productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-7 py-3 font-semibold text-sm hover:shadow-lg transition-all duration-300 active:scale-95"
              >
                <Facebook size={16} className="mr-2" />
                Facebook Page
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-7 py-3 font-semibold text-sm hover:shadow-lg transition-all duration-300 active:scale-95"
              >
                <Youtube size={16} className="mr-2" />
                TikTok Channel
              </a>
            </div>
          </div>

          {/* Right - Floating Phone Mockups */}
          <div className="reveal reveal-delay-2 relative h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Left phone - floating */}
            <Phone content={leftPhoneContent} position="left" delay={0} />

            {/* Right phone - floating with slight delay */}
            <Phone content={rightPhoneContent} position="right" delay={1} />
          </div>
        </div>
      </div>
    </section>
  );
}