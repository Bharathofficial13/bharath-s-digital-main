export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-heading font-bold">Bharath<span className="text-accent">.</span>S</p>
        <p className="text-primary-foreground/60">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
