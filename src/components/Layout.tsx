import { Link, useLocation } from "react-router-dom";
import { Clock, Map, MessageSquare, Calendar } from "lucide-react";
import { type ReactNode } from "react";
import { cn } from "../lib/utils";

export function Navbar() {
  const location = useLocation();

  const links = [
    { href: "/", label: "Accueil", icon: Clock },
    { href: "/destinations", label: "Destinations", icon: Map },
    { href: "/quiz", label: "Trouver mon Époque", icon: MessageSquare },
    { href: "/booking", label: "Réserver", icon: Calendar },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
              TimeTravel Agency
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-amber-400 flex items-center gap-2",
                  location.pathname === link.href
                    ? "text-amber-400"
                    : "text-gray-400"
                )}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} TimeTravel Agency. Tous droits temporels réservés.
        </p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30">
      <Navbar />
      <main className="pt-16 min-h-[calc(100vh-80px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
