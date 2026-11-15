import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Selector from "@/components/Selector";
import ReservaDemo from "@/components/ReservaDemo";
import { whatsapp } from "@/data/paquetes";

const pasos = [
  {
    titulo: "Arma tu paquete",
    texto: "Elige cuántas van a la sesión y si la quieren de día o de noche. Con 3 chicas se abre el catálogo especial de ubicaciones.",
  },
  {
    titulo: "Aparta tu fecha",
    texto: "Escoge el día en el calendario y paga el 50% de anticipo en las siguientes 5 horas.",
  },
  {
    titulo: "Llega a tu sesión",
    texto: "Nosotros ponemos el lugar, la cámara y la iluminación. Tú solo llegas lista.",
  },
  {
    titulo: "Recibe y crece",
    texto: "Tus fotos y clips llegan en 3 días hábiles, y durante un mes manejamos tu cuenta.",
  },
];

const preguntas = [
  {
    p: "¿Necesito experiencia frente a la cámara?",
    r: "No. Te guiamos en poses, ángulos y ritmo durante toda la sesión.",
  },
  {
    p: "¿Qué pasa si no pago el anticipo en 5 horas?",
    r: "La fecha se libera sola para que otra persona la pueda apartar. Puedes volver a elegir otro día cuando quieras.",
  },
  {
    p: "¿Cómo pago?",
    r: "Con Mercado Pago o por transferencia. El anticipo es del 50% y el resto se liquida el día de la sesión.",
  },
  {
    p: "¿Quién ve mi contenido?",
    r: "Solo tú y nuestro equipo de producción. Tu material se entrega en una carpeta privada de Drive.",
  },
  {
    p: "¿En qué consiste la gestión de cuenta?",
    r: "Durante un mes respondemos mensajes y promocionamos tu perfil en foros, redes y espacios de publicidad.",
  },
  {
    p: "¿Dónde son las sesiones?",
    r: "En ubicaciones seleccionadas de Puebla y Cholula. Los paquetes de 1 y 2 chicas eligen del catálogo básico; desde 3 chicas tienen acceso al catálogo especial, con más opciones.",
  },
];

export default function Inicio() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Cómo funciona */}
      <section id="como-funciona" className="scroll-mt-20 bg-noche px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl sm:text-5xl">Cómo funciona</h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((paso, i) => (
              <li key={paso.titulo} className="relative border-t border-white/10 pt-6">
                <span className="font-display text-5xl text-magenta [text-shadow:0_0_30px_rgba(224,57,122,0.5)]">{i + 1}</span>
                <h3 className="mt-2 font-display text-xl">{paso.titulo}</h3>
                <p className="mt-2 text-bruma">{paso.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Selector de paquetes */}
      <section id="paquetes" className="scroll-mt-20 bg-ciruela/50 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl sm:text-6xl">Arma tu squad</h2>
          <p className="mt-4 max-w-xl text-lg text-bruma">
            ¿Cuántas vienen a la sesión? Entre más sean, menos paga cada una, y con 3 se abre el
            catálogo especial de ubicaciones.
          </p>
          <div className="mt-10">
            <Selector />
          </div>
        </div>
      </section>

      {/* Reserva */}
      <section id="reserva" className="scroll-mt-20 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl sm:text-5xl">Aparta tu fecha</h2>
          <p className="mt-4 max-w-xl text-lg text-bruma">
            Pruébalo: elige un día y mira cómo corre tu tiempo para el anticipo.
          </p>
          <div className="mt-10">
            <ReservaDemo />
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section id="preguntas" className="scroll-mt-20 bg-ciruela/50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl">Preguntas frecuentes</h2>
          <div className="mt-10 divide-y divide-white/10">
            {preguntas.map(({ p, r }) => (
              <details key={p} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                  {p}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-xl transition group-open:rotate-45 group-open:bg-magenta">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-bruma">{r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre */}
      <footer className="relative overflow-hidden px-6 pb-10 pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-ciruela p-8 ring-1 ring-white/10 sm:p-14 before:pointer-events-none before:absolute before:-right-24 before:-top-24 before:h-80 before:w-80 before:rounded-full before:bg-magenta/30 before:blur-[90px]">
            <p className="relative max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
              ¿Dudas antes de reservar? Escríbenos.
            </p>
            <p className="relative mt-4 max-w-lg text-bruma">
              Te respondemos por WhatsApp y te ayudamos a elegir el paquete que más te conviene.
            </p>
            <a
              href={whatsapp("Hola, tengo dudas sobre las sesiones de Bussin'.")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-block rounded-full bg-magenta px-7 py-4 font-display text-lg text-white shadow-[0_0_30px_-6px_rgba(224,57,122,0.9)] transition hover:bg-rec"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 text-sm text-bruma/70 sm:flex-row sm:items-center">
            <Image src="/logo-bussin.png" alt="Bussin'" width={954} height={317} className="h-8 w-auto" />
            <p>Servicio exclusivo para creadoras mayores de 18 años.</p>
            <p>© {new Date().getFullYear()} Bussin&apos;</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
