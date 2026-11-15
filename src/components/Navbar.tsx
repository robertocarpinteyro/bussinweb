"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// La barra se oculta mientras se ve el hero y aparece al hacer scroll.
export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const revisar = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    revisar();
    window.addEventListener("scroll", revisar, { passive: true });
    window.addEventListener("resize", revisar);
    return () => {
      window.removeEventListener("scroll", revisar);
      window.removeEventListener("resize", revisar);
    };
  }, []);

  return (
    <header
      inert={!visible}
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-noche/75 backdrop-blur-xl transition duration-500 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hero" aria-label="Bussin', inicio">
          <Image src="/logo-bussin.png" alt="Bussin'" width={954} height={317} className="h-8 w-auto sm:h-9" />
        </a>
        <nav className="flex items-center gap-6 text-sm font-semibold">
          <a href="#como-funciona" className="hidden text-bruma transition hover:text-arena sm:inline">
            Cómo funciona
          </a>
          <a href="#paquetes" className="hidden text-bruma transition hover:text-arena sm:inline">
            Paquetes
          </a>
          <a href="#preguntas" className="hidden text-bruma transition hover:text-arena md:inline">
            Preguntas
          </a>
          <a
            href="#paquetes"
            className="rounded-full bg-magenta px-4 py-2 text-white shadow-[0_0_24px_-6px_rgba(224,57,122,0.9)] transition hover:bg-rec"
          >
            Reservar
          </a>
        </nav>
      </div>
    </header>
  );
}
