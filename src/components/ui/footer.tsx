export function Footer() {
  return (
    <footer className="w-full  bg-black px-8 py-16 z-10">
      <div className="container flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © 2025 Your Company. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
