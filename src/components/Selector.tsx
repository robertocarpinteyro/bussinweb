"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ambientes,
  CHICAS_ESPECIAL,
  type Horario,
  nombreCatalogo,
  nombreHorario,
  paquetes,
  pesos,
  whatsapp,
} from "@/data/paquetes";
import Escena from "./Escena";
import { Camara, Candado, Chat, Chica, Clip, Foto, Luna, Nube, Sol, WhatsApp } from "./Iconos";

const incluye = [
  { icono: Camara, texto: "Cámara e iluminación profesional" },
  { icono: Foto, texto: "50 fotos editadas" },
  { icono: Clip, texto: "10 clips con corrección de color" },
  { icono: Nube, texto: "Entrega por Drive en 3 días hábiles" },
  { icono: Chat, texto: "1 mes de gestión de tu cuenta" },
];

const totalBasico = ambientes.filter((a) => a.catalogo === "basico").length;

export default function Selector() {
  const [chicas, setChicas] = useState(1);
  const [horario, setHorario] = useState<Horario>("noche");
  const [aviso, setAviso] = useState<string | null>(null);
  const previo = useRef(chicas);
  const reduce = useReducedMotion();

  const paquete = paquetes.find((p) => p.chicas === chicas)!;
  const especial = paquete.catalogo === "especial";

  useEffect(() => {
    const antes = previo.current;
    previo.current = chicas;
    if (chicas >= CHICAS_ESPECIAL && antes < CHICAS_ESPECIAL) {
      setAviso("Desbloqueaste el catálogo especial");
      const t = setTimeout(() => setAviso(null), 2600);
      return () => clearTimeout(t);
    }
  }, [chicas]);

  const mensaje = `Hola, me interesa el paquete de ${chicas} ${chicas === 1 ? "chica" : "chicas"} ${
    horario === "dia" ? "de día" : "de noche"
  }. ¿Me pueden compartir las ubicaciones disponibles?`;

  return (
    <div>
      {/* Número de chicas + paquetes próximos */}
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.15fr)] sm:gap-4">
        <div role="radiogroup" aria-label="¿Cuántas chicas vienen?" className="contents">
          {paquetes.map((p) => {
            const activo = p.chicas === chicas;
            return (
              <button
                key={p.chicas}
                role="radio"
                aria-checked={activo}
                onClick={() => setChicas(p.chicas)}
                className={`relative flex flex-col items-center rounded-2xl border px-1 py-4 transition-colors sm:py-5 ${
                  activo
                    ? "border-magenta bg-gradient-to-b from-magenta to-[#a8205a] text-white shadow-[0_0_36px_-8px_rgba(224,57,122,0.95)]"
                    : "border-white/10 bg-white/[0.03] text-bruma hover:border-magenta/50 hover:text-arena"
                }`}
              >
                <span className="font-display text-5xl leading-none sm:text-6xl">{p.chicas}</span>
                <span className="mt-1 text-xs font-semibold sm:text-sm">{p.chicas === 1 ? "chica" : "chicas"}</span>
                <span className="mt-2 flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: p.chicas }).map((_, i) => (
                    <Chica key={i} className="h-3.5 w-3.5" />
                  ))}
                </span>
                {p.catalogo === "especial" && (
                  <span className={`absolute -top-2.5 rounded-full px-2 py-0.5 text-[10px] font-bold sm:text-[11px] ${activo ? "bg-oro text-noche" : "bg-oro/90 text-noche"}`}>
                    Especial
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mazo de tarjetas bloqueadas */}
        <div className="relative col-span-3 h-24 sm:col-span-1 sm:h-auto" aria-label="Próximamente: más paquetes">
          <span className="absolute inset-0 translate-x-3 translate-y-2 rotate-[4deg] rounded-2xl border border-white/5 bg-white/[0.02]" aria-hidden="true" />
          <span className="absolute inset-0 translate-x-1.5 translate-y-1 rotate-2 rounded-2xl border border-white/10 bg-white/[0.03]" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-ciruela px-4 text-center sm:flex-col sm:gap-2">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-oro ring-1 ring-oro/50">
              <Candado className="h-5 w-5" />
            </span>
            <span className="text-left sm:text-center">
              <span className="block font-display text-lg leading-tight text-arena">Próximamente</span>
              <span className="block text-xs text-bruma">Más paquetes</span>
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        <AnimatePresence>
          {aviso && (
            <motion.p
              role="status"
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute left-1/2 top-4 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-noche/90 px-5 py-2 font-display text-sm text-oro shadow-[0_0_30px_-6px_rgba(243,199,122,0.7)] ring-1 ring-oro/60 backdrop-blur"
            >
              {aviso}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Resumen del paquete */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl bg-gradient-to-b from-ciruela to-noche p-6 shadow-[0_0_80px_-30px_rgba(224,57,122,0.7)] ring-1 ring-white/10 sm:p-8">
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

            <fieldset className="mt-6">
              <legend className="mb-2 text-sm font-semibold text-bruma">¿Tu sesión es de día o de noche?</legend>
              <div className="grid grid-cols-2 gap-1 rounded-full bg-white/[0.05] p-1 ring-1 ring-white/10">
                {(["dia", "noche"] as Horario[]).map((h) => {
                  const activo = horario === h;
                  const Icono = h === "dia" ? Sol : Luna;
                  return (
                    <label
                      key={h}
                      className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-full py-2.5 text-sm font-bold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-oro ${
                        activo ? "text-noche" : "text-bruma hover:text-arena"
                      }`}
                    >
                      <input
                        type="radio"
                        name="horario"
                        value={h}
                        checked={activo}
                        onChange={() => setHorario(h)}
                        className="sr-only"
                      />
                      {activo && (
                        <motion.span
                          layoutId="horario"
                          transition={{ type: "spring", stiffness: 500, damping: 38 }}
                          className={`absolute inset-0 rounded-full ${h === "dia" ? "bg-oro" : "bg-arena"}`}
                        />
                      )}
                      <Icono className="relative h-4 w-4" />
                      <span className="relative">{nombreHorario[h]}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/5">
                <dt className="text-bruma">Por chica</dt>
                <dd className="text-lg font-bold">{pesos(Math.round(paquete.precio / chicas))}</dd>
              </div>
              <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/5">
                <dt className="text-bruma">Anticipo para apartar</dt>
                <dd className="text-lg font-bold">{pesos(paquete.precio / 2)}</dd>
              </div>
              <div className="col-span-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/5">
                <dt className="text-bruma">Ubicaciones</dt>
                <dd className="text-lg font-bold">
                  Catálogo {nombreCatalogo[paquete.catalogo].toLowerCase()}
                  <span className="ml-2 text-sm font-medium text-bruma">
                    {especial ? "más ambientes para elegir" : "selección limitada"}
                  </span>
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

        {/* Catálogo de ambientes */}
        <div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl">Catálogo de ambientes</h3>
              <p className="mt-1 text-bruma">
                {especial
                  ? "Tienes acceso a todos los ambientes."
                  : `Con ${chicas === 1 ? "1 chica" : "2 chicas"} eliges entre ${totalBasico} ambientes. Con ${CHICAS_ESPECIAL} se abre el catálogo especial.`}
              </p>
            </div>
            <a
              href={whatsapp(mensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-bold text-arena transition hover:border-[#25d366] hover:text-[#25d366]"
            >
              <WhatsApp className="h-4.5 w-4.5" />
              Pregunta por las ubicaciones
            </a>
          </div>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {ambientes.map((a, i) => {
              const bloqueado = a.catalogo === "especial" && !especial;
              const ancho = i === ambientes.length - 1 && ambientes.length % 2 === 1;
              return (
                <motion.li
                  key={a.id}
                  layout={!reduce}
                  className={`relative overflow-hidden rounded-3xl bg-ciruela ring-1 ${
                    ancho ? "sm:col-span-2" : ""
                  } ${bloqueado ? "ring-white/10" : "ring-magenta/50"}`}
                >
                  <div className={`relative ${ancho ? "aspect-[16/7]" : "aspect-[16/10]"}`}>
                    <div
                      className={`h-full w-full transition duration-700 ${
                        bloqueado ? "scale-105 blur-[2px] brightness-[0.18] grayscale" : ""
                      }`}
                    >
                      <Escena tipo={a.escena} />
                    </div>

                    {/* Luz según el horario elegido */}
                    {!bloqueado && (
                      <div
                        className={`pointer-events-none absolute inset-0 transition-colors duration-700 ${
                          horario === "noche"
                            ? "bg-[#0b1040]/45 mix-blend-multiply"
                            : "bg-[#ffe2b0]/25 mix-blend-soft-light"
                        }`}
                        aria-hidden="true"
                      />
                    )}

                    <AnimatePresence>
                      {bloqueado && (
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
                          <span className="font-display text-arena">Se desbloquea con {CHICAS_ESPECIAL} chicas</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <span
                      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${
                        a.catalogo === "basico"
                          ? "bg-noche/70 text-arena ring-1 ring-white/20 backdrop-blur"
                          : "bg-oro text-noche"
                      }`}
                    >
                      {nombreCatalogo[a.catalogo]}
                    </span>
                  </div>

                  <div className="flex items-end justify-between gap-3 p-4">
                    <div>
                      <h4 className={`font-display text-xl ${bloqueado ? "text-bruma/50" : "text-arena"}`}>
                        {bloqueado ? "???" : a.nombre}
                      </h4>
                      <p className={`mt-1 text-sm ${bloqueado ? "text-bruma/40" : "text-bruma"}`}>
                        {bloqueado ? "Parte del catálogo especial." : a.descripcion}
                      </p>
                    </div>
                    {bloqueado && (
                      <button
                        onClick={() => setChicas(CHICAS_ESPECIAL)}
                        className="shrink-0 rounded-full border border-oro/70 px-3 py-1.5 text-sm font-bold text-oro transition hover:bg-oro hover:text-noche"
                      >
                        Subir a {CHICAS_ESPECIAL}
                      </button>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ul>
          <p className="mt-6 text-sm text-bruma/70">
            Las imágenes son ilustrativas. Te compartimos fotos reales de cada ubicación por WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
