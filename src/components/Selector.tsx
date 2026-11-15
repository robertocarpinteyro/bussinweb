"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { nombreNivel, paquetes, pesos, ubicaciones } from "@/data/paquetes";
import Escena from "./Escena";
import { Camara, Candado, Chat, Chica, Clip, Foto, Nube } from "./Iconos";

const incluye = [
  { icono: Camara, texto: "Cámara e iluminación profesional" },
  { icono: Foto, texto: "50 fotos editadas" },
  { icono: Clip, texto: "10 clips con corrección de color" },
  { icono: Nube, texto: "Entrega por Drive en 3 días hábiles" },
  { icono: Chat, texto: "1 mes de gestión de tu cuenta" },
];

export default function Selector() {
  const [chicas, setChicas] = useState(1);
  const [aviso, setAviso] = useState<string | null>(null);
  const previo = useRef(chicas);
  const reduce = useReducedMotion();

  const paquete = paquetes.find((p) => p.chicas === chicas)!;

  useEffect(() => {
    const antes = previo.current;
    previo.current = chicas;
    const nuevas = ubicaciones.filter((u) => u.minimo <= chicas && u.minimo > antes);
    if (nuevas.length) {
      setAviso(
        nuevas.length === 1
          ? `Desbloqueaste ${nuevas[0].nombre}`
          : `Desbloqueaste ${nuevas.length} ubicaciones ${nombreNivel[nuevas[0].nivel].toLowerCase()}`
      );
      const t = setTimeout(() => setAviso(null), 2600);
      return () => clearTimeout(t);
    }
  }, [chicas]);

  return (
    <div>
      {/* Selector de número de chicas */}
      <div role="radiogroup" aria-label="¿Cuántas chicas vienen?" className="grid grid-cols-5 gap-2 sm:gap-4">
        {paquetes.map((p) => {
          const activo = p.chicas === chicas;
          return (
            <button
              key={p.chicas}
              role="radio"
              aria-checked={activo}
              onClick={() => setChicas(p.chicas)}
              className={`group relative flex flex-col items-center rounded-2xl border px-1 py-3 transition-colors sm:py-5 ${
                activo
                  ? "border-magenta bg-gradient-to-b from-magenta to-[#a8205a] text-white shadow-[0_0_36px_-8px_rgba(224,57,122,0.95)]"
                  : "border-white/10 bg-white/[0.03] text-bruma hover:border-magenta/50 hover:text-arena"
              }`}
            >
              <span className="font-display text-4xl leading-none sm:text-6xl">{p.chicas}</span>
              <span className="mt-1 text-xs font-semibold sm:text-sm">{p.chicas === 1 ? "chica" : "chicas"}</span>
              <span className="mt-2 hidden gap-0.5 sm:flex" aria-hidden="true">
                {Array.from({ length: p.chicas }).map((_, i) => (
                  <Chica key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative">
        <AnimatePresence>
          {aviso && (
            <motion.p
              role="status"
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute left-1/2 top-4 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-noche/90 px-5 py-2 font-display text-sm text-oro ring-1 ring-oro/60 shadow-[0_0_30px_-6px_rgba(243,199,122,0.7)] backdrop-blur"
            >
              {aviso}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Resumen del paquete */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl bg-gradient-to-b from-ciruela to-noche p-6 ring-1 ring-white/10 shadow-[0_0_80px_-30px_rgba(224,57,122,0.7)] sm:p-8">
            <p className="font-semibold text-magenta">
              Paquete de {chicas} {chicas === 1 ? "chica" : "chicas"}
            </p>
            <motion.p
              key={paquete.precio}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 font-display text-5xl sm:text-6xl"
            >
              {pesos(paquete.precio)}
            </motion.p>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/5">
                <dt className="text-bruma">Por chica</dt>
                <dd className="text-lg font-bold">{pesos(Math.round(paquete.precio / chicas))}</dd>
              </div>
              <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/5">
                <dt className="text-bruma">Anticipo para apartar</dt>
                <dd className="text-lg font-bold">{pesos(paquete.precio / 2)}</dd>
              </div>
              <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/5">
                <dt className="text-bruma">Ubicaciones</dt>
                <dd className="text-lg font-bold">{nombreNivel[paquete.nivel]}</dd>
              </div>
              <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/5">
                <dt className="text-bruma">Sesión</dt>
                <dd className="text-lg font-bold">
                  {paquete.dias} {paquete.dias === 1 ? "día" : "días"}
                </dd>
              </div>
            </dl>

            <p className="mt-6 font-bold">Cada chica recibe</p>
            <ul className="mt-3 space-y-2.5">
              {incluye.map(({ icono: Icono, texto }) => (
                <li key={texto} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-magenta/15 text-magenta">
                    <Icono className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[15px] text-arena/90">{texto}</span>
                </li>
              ))}
            </ul>

            <a
              href="#reserva"
              className="mt-7 block rounded-full bg-magenta py-4 text-center font-display text-lg text-white shadow-[0_0_30px_-6px_rgba(224,57,122,0.9)] transition hover:bg-rec"
            >
              Elegir fecha
            </a>
          </div>
        </div>

        {/* Ubicaciones */}
        <ul className="grid gap-4 sm:grid-cols-2">
          {ubicaciones.map((u) => {
            const bloqueada = u.minimo > chicas;
            const destacada = u.nivel === "superpremium";
            return (
              <motion.li
                key={u.id}
                layout={!reduce}
                className={`relative overflow-hidden rounded-3xl bg-ciruela ring-1 ${
                  destacada ? "sm:col-span-2" : ""
                } ${bloqueada ? "ring-white/10" : "ring-magenta/50"}`}
              >
                <div className={`relative ${destacada ? "aspect-[16/7]" : "aspect-[16/10]"}`}>
                  <div
                    className={`h-full w-full transition duration-700 ${
                      bloqueada ? "scale-105 brightness-[0.18] grayscale blur-[2px]" : ""
                    }`}
                  >
                    <Escena tipo={u.escena} />
                  </div>

                  <AnimatePresence>
                    {bloqueada && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.6, rotate: -12 }}
                        transition={{ duration: 0.45 }}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center"
                      >
                        <span className="grid h-14 w-14 place-items-center rounded-full bg-noche/80 text-oro ring-1 ring-oro/60 backdrop-blur">
                          <Candado className="h-7 w-7" />
                        </span>
                        <span className="font-display text-arena">Se desbloquea con {u.minimo} chicas</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${
                      u.nivel === "basica"
                        ? "bg-noche/70 text-arena ring-1 ring-white/20 backdrop-blur"
                        : u.nivel === "premium"
                          ? "bg-oro text-noche"
                          : "bg-rec text-white"
                    }`}
                  >
                    {nombreNivel[u.nivel]}
                  </span>
                </div>

                <div className="flex items-end justify-between gap-3 p-4">
                  <div>
                    <h3 className={`font-display text-xl ${bloqueada ? "text-bruma/50" : "text-arena"}`}>
                      {bloqueada ? "???" : u.nombre}
                    </h3>
                    <p className={`mt-1 text-sm ${bloqueada ? "text-bruma/40" : "text-bruma"}`}>
                      {bloqueada ? "Sube de nivel para ver esta ubicación." : u.descripcion}
                    </p>
                  </div>
                  {bloqueada && (
                    <button
                      onClick={() => setChicas(u.minimo)}
                      className="shrink-0 rounded-full border border-oro/70 px-3 py-1.5 text-sm font-bold text-oro transition hover:bg-oro hover:text-noche"
                    >
                      Subir a {u.minimo}
                    </button>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <p className="mt-6 text-sm text-bruma/70">
        Ubicaciones de ejemplo. Las definitivas se anuncian pronto.
      </p>
    </div>
  );
}
