import { useState } from "react";
import { navigationLinks } from "../data/navigationLinks";

function Navbar({ name }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-white">
          {name}
        </a>
        <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navigationLinks.map((item) => (
            <li key={item.href}>
              <a className="transition hover:text-cyan-300" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded-md border border-white/15 px-3 py-1 text-sm text-slate-200 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          Menu
        </button>
      </nav>
      {isMenuOpen && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <ul className="space-y-3 text-sm text-slate-300">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
