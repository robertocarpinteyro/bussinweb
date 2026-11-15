"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Timecode HH:MM:SS:FF a 24 cuadros, como en el visor de una cámara de cine.
function Timecode() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const inicio = performance.now();
    let id = 0;
    const dos = (n: number) => String(n).padStart(2, "0");
    const tick = (t: number) => {
      const ms = t - inicio;
      const s = Math.floor(ms / 1000);
      const f = Math.floor((ms % 1000) / (1000 / 24));
      if (ref.current) {
        ref.current.textContent = `${dos(Math.floor(s / 3600))}:${dos(Math.floor(s / 60) % 60)}:${dos(s % 60)}:${dos(f)}`;
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <span ref={ref} className="tabular-nums">
      00:00:00:00
    </span>
  );
}

function Esquina({ className }: { className: string }) {
  return <span className={`absolute h-8 w-8 border-arena/80 sm:h-12 sm:w-12 ${className}`} />;
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="hero" className="relative h-[100svh] min-h-[560px] overflow-hidden bg-noche">
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Viñeta, grano y transición hacia el resto del sitio */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(8_6_26/0.85)_100%)]" />
      <div className="grano pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-noche" />

      {/* Interfaz de cámara */}
      <div className="pointer-events-none absolute inset-4 text-[13px] font-semibold text-arena/85 sm:inset-8 sm:text-sm" aria-hidden="true">
        <Esquina className="left-0 top-0 border-l-2 border-t-2" />
        <Esquina className="right-0 top-0 border-r-2 border-t-2" />
        <Esquina className="bottom-0 left-0 border-b-2 border-l-2" />
        <Esquina className="bottom-0 right-0 border-b-2 border-r-2" />

        <div className="absolute left-5 top-4 flex items-center gap-2.5 sm:left-7 sm:top-6">
          <span className="rec-blink rec-glow h-3 w-3 rounded-full bg-rec" />
          <span className="tracking-wide text-rec">REC</span>
          <span className="ml-2 text-arena/85">
            <Timecode />
          </span>
        </div>

        <div className="absolute right-5 top-4 flex items-center gap-4 sm:right-7 sm:top-6">
          <span className="hidden sm:inline">4K</span>
          <span>24p</span>
          <span className="flex items-center gap-1">
            <span className="relative h-3 w-6 rounded-[3px] border border-arena/85 p-[2px]">
              <span className="block h-full w-3/4 rounded-[1px] bg-arena/85" />
            </span>
            <span className="h-1.5 w-0.5 rounded-r bg-arena/85" />
          </span>
        </div>

        <div className="absolute bottom-4 left-5 hidden gap-5 tabular-nums sm:bottom-6 sm:left-7 sm:flex">
          <span>ISO 800</span>
          <span>1/50</span>
          <span>f/1.8</span>
        </div>

        <div className="absolute bottom-4 right-5 flex items-end gap-[3px] sm:bottom-6 sm:right-7">
          {[5, 9, 7, 12, 10, 6, 4].map((h, i) => (
            <span key={i} className={`w-[3px] rounded-full ${i > 4 ? "bg-arena/30" : "bg-arena/85"}`} style={{ height: h }} />
          ))}
        </div>
      </div>

      {/* Logo al centro dentro del recuadro de enfoque */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div
          initial={reduce ? false : { scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="pointer-events-none absolute aspect-[3/1.6] w-[min(78vw,720px)]"
          aria-hidden="true"
        >
          <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-arena/60" />
          <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-arena/60" />
          <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-arena/60" />
          <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-arena/60" />
          <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-arena/40" />
          <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-arena/40" />
        </motion.div>

        <motion.h1
          initial={reduce ? false : { filter: "blur(14px)", opacity: 0.4 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
          className="relative"
        >
          <Image
            src="/logo-bussin.png"
            alt="Bussin'"
            width={954}
            height={317}
            priority
            className="h-auto w-[min(64vw,560px)] drop-shadow-[0_0_40px_rgba(224,57,122,0.45)]"
          />
          <span className="sr-only">Producción de contenido para creadoras</span>
        </motion.h1>
      </div>

      <a
        href="#como-funciona"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-semibold text-arena/70 transition hover:text-arena sm:bottom-8"
      >
        Desliza
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
