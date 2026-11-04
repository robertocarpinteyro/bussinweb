"use client";

import { useEffect, useMemo, useState } from "react";

// Vista previa del flujo de reserva. En la versión final la fecha y la hora
// de vencimiento vienen de Supabase, así el timer sigue aunque cierren el navegador.
const CLAVE = "bussin-demo-reserva";
const LIMITE_MS = 5 * 60 * 60 * 1000;
const DIAS = ["L", "M", "M", "J", "V", "S", "D"];

function dosDigitos(n: number) {
  return String(n).padStart(2, "0");
}

export default function ReservaDemo() {
  const hoy = useMemo(() => new Date(), []);
  const [reserva, setReserva] = useState<{ dia: number; vence: number } | null>(null);
  const [ahora, setAhora] = useState(() => Date.now());

  useEffect(() => {
    try {
      const guardada = localStorage.getItem(CLAVE);
      if (guardada) {
        const r = JSON.parse(guardada);
        if (r.vence > Date.now()) setReserva(r);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!reserva) return;
    const t = setInterval(() => setAhora(Date.now()), 1000);
    return () => clearInterval(t);
  }, [reserva]);

  const anio = hoy.getFullYear();
  const mes = hoy.getMonth() + 1 > 11 ? 0 : hoy.getMonth() + 1;
  const anioMes = hoy.getMonth() + 1 > 11 ? anio + 1 : anio;
  const primerDia = (new Date(anioMes, mes, 1).getDay() + 6) % 7;
  const totalDias = new Date(anioMes, mes + 1, 0).getDate();
  const nombreMes = new Intl.DateTimeFormat("es-MX", { month: "long", year: "numeric" }).format(
    new Date(anioMes, mes, 1)
  );
  const ocupados = new Set([3, 4, 11, 17, 18, 24]);

  function apartar(dia: number) {
    const r = { dia, vence: Date.now() + LIMITE_MS };
    setReserva(r);
    setAhora(Date.now());
    try {
      localStorage.setItem(CLAVE, JSON.stringify(r));
    } catch {}
  }

  function cancelar() {
    setReserva(null);
    try {
      localStorage.removeItem(CLAVE);
    } catch {}
  }

  const restante = reserva ? Math.max(0, reserva.vence - ahora) : 0;
  const h = Math.floor(restante / 3_600_000);
  const m = Math.floor((restante % 3_600_000) / 60_000);
  const s = Math.floor((restante % 60_000) / 1000);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border-2 border-uva bg-ciruela p-5 sm:p-6">
        <p className="font-display text-xl first-letter:uppercase">{nombreMes}</p>
        <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-sm">
          {DIAS.map((d, i) => (
            <span key={i} className="pb-1 font-bold text-bruma/70">
              {d}
            </span>
          ))}
          {Array.from({ length: primerDia }).map((_, i) => (
            <span key={`v${i}`} />
          ))}
          {Array.from({ length: totalDias }).map((_, i) => {
            const dia = i + 1;
            const ocupado = ocupados.has(dia);
            const elegido = reserva?.dia === dia;
            return (
              <button
                key={dia}
                disabled={ocupado || !!reserva}
                onClick={() => apartar(dia)}
                aria-label={`${dia} de ${nombreMes}${ocupado ? ", ocupado" : ""}`}
                className={`aspect-square rounded-lg font-semibold transition ${
                  elegido
                    ? "bg-rec text-white rec-glow"
                    : ocupado
                      ? "cursor-not-allowed text-bruma/30 line-through"
                      : reserva
                        ? "text-bruma/50"
                        : "bg-uva/60 text-arena hover:bg-magenta"
                }`}
              >
                {dia}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center rounded-3xl bg-noche p-6 ring-2 ring-uva sm:p-8">
        {reserva ? (
          <>
            <p className="flex items-center gap-2 font-bold text-rec">
              <span className="rec-blink rec-glow inline-block h-3 w-3 rounded-full bg-rec" />
              Fecha apartada: {reserva.dia} de {nombreMes.split(" ")[0]}
            </p>
            <p className="mt-3 font-display text-5xl tabular-nums sm:text-6xl" aria-live="off">
              {dosDigitos(h)}:{dosDigitos(m)}:{dosDigitos(s)}
            </p>
            <p className="mt-3 text-bruma">
              Tienes este tiempo para pagar el 50% de anticipo. Si cierras la página y vuelves, el
              tiempo sigue corriendo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-magenta px-5 py-3 font-bold text-white">Pagar con Mercado Pago</span>
              <span className="rounded-full border-2 border-arena/40 px-5 py-3 font-bold">Pagar por transferencia</span>
            </div>
            <button onClick={cancelar} className="mt-5 self-start text-sm text-bruma underline underline-offset-4">
              Reiniciar vista previa
            </button>
          </>
        ) : (
          <>
            <p className="font-display text-2xl">Elige un día disponible</p>
            <p className="mt-3 text-bruma">
              Al apartarlo, la fecha queda reservada para ti durante 5 horas mientras haces tu
              anticipo. Con el pago confirmado, el día es tuyo.
            </p>
          </>
        )}
        <p className="mt-6 text-xs text-bruma/60">Vista previa: todavía no se cobra ni se aparta nada.</p>
      </div>
    </div>
  );
}
