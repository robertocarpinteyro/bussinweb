import Image from "next/image";
import Atardecer from "@/components/Atardecer";
import Selector from "@/components/Selector";
import ReservaDemo from "@/components/ReservaDemo";

const pasos = [
  {
    titulo: "Arma tu paquete",
    texto: "Elige cuántas van a la sesión. Entre más sean, mejores ubicaciones desbloquean.",
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
    r: "En hoteles y moteles seleccionados de Puebla y Cholula. La ubicación depende de tu paquete.",
  },
];

export default function Inicio() {
  return (
    <main className="overflow-x-hidden">
      {/* Encabezado */}
      <header className="fixed inset-x-0 top-0 z-50 bg-noche/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" aria-label="Bussin', inicio">
            <Image src="/logo-bussin.png" alt="Bussin'" width={954} height={317} className="h-9 w-auto sm:h-10" priority />
          </a>
          <nav className="flex items-center gap-6 text-sm font-semibold">
            <a href="#como-funciona" className="hidden text-bruma hover:text-arena sm:inline">
              Cómo funciona
            </a>
            <a href="#paquetes" className="hidden text-bruma hover:text-arena sm:inline">
              Paquetes
            </a>
            <a href="#preguntas" className="hidden text-bruma hover:text-arena md:inline">
              Preguntas
            </a>
            <a href="#paquetes" className="rounded-full bg-magenta px-4 py-2 text-white hover:bg-rec">
              Reservar
            </a>
          </nav>
        </div>
      </header>

      {/* Hero: visor de cámara sobre el atardecer de Puebla */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-20">
        <Atardecer />
        <div className="pointer-events-none absolute inset-x-4 bottom-6 top-20 sm:inset-x-8 sm:top-24" aria-hidden="true">
          <span className="absolute left-0 top-0 h-10 w-10 border-l-4 border-t-4 border-arena/80" />
          <span className="absolute right-0 top-0 h-10 w-10 border-r-4 border-t-4 border-arena/80" />
          <span className="absolute bottom-0 left-0 h-10 w-10 border-b-4 border-l-4 border-arena/80" />
          <span className="absolute bottom-0 right-0 h-10 w-10 border-b-4 border-r-4 border-arena/80" />
          <span className="absolute left-5 top-4 flex items-center gap-2 font-bold text-arena">
            <span className="rec-blink rec-glow h-3.5 w-3.5 rounded-full bg-rec" />
            REC
          </span>
          <span className="absolute right-5 top-4 font-semibold text-arena/80">Puebla y Cholula</span>
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-40 sm:px-12">
          <h1 className="max-w-3xl font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] text-arena [text-shadow:5px_5px_0_#45185e]">
            Tú llegas.
            <br />
            Nosotros grabamos.
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium text-arena/90 sm:text-xl">
            Sesiones de foto y video para creadoras de contenido, con un mes de gestión de tu
            cuenta incluido.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#paquetes"
              className="rounded-full bg-arena px-7 py-4 font-display text-lg text-noche shadow-[5px_5px_0_#e0397a] transition hover:-translate-y-0.5"
            >
              Armar mi paquete
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border-2 border-arena/70 px-7 py-4 font-bold text-arena hover:bg-arena/10"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="scroll-mt-20 bg-noche px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl sm:text-5xl">Cómo funciona</h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((paso, i) => (
              <li key={paso.titulo} className="relative">
                <span className="font-display text-6xl text-magenta">{i + 1}</span>
                <h3 className="mt-2 font-display text-xl">{paso.titulo}</h3>
                <p className="mt-2 text-bruma">{paso.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Selector de paquetes */}
      <section id="paquetes" className="scroll-mt-20 bg-ciruela/40 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl sm:text-6xl">Arma tu squad</h2>
          <p className="mt-4 max-w-xl text-lg text-bruma">
            ¿Cuántas vienen a la sesión? Entre más sean, menos paga cada una y más lugares se
            desbloquean.
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
      <section id="preguntas" className="scroll-mt-20 bg-ciruela/40 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl">Preguntas frecuentes</h2>
          <div className="mt-10 divide-y-2 divide-uva">
            {preguntas.map(({ p, r }) => (
              <details key={p} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                  {p}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-uva text-xl transition group-open:rotate-45 group-open:bg-magenta">
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
          <div className="rounded-[2rem] bg-gradient-to-br from-magenta via-[#c8337a] to-ocaso p-8 text-white sm:p-14">
            <p className="max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
              ¿Dudas antes de reservar? Escríbenos.
            </p>
            <p className="mt-4 max-w-lg text-white/90">
              Te respondemos por WhatsApp y te ayudamos a elegir el paquete que más te conviene.
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded-full bg-noche px-7 py-4 font-display text-lg text-arena transition hover:-translate-y-0.5"
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
