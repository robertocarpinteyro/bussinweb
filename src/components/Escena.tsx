import type { Escena as TipoEscena } from "@/data/paquetes";

// Ilustraciones simples de cada ubicación mientras llegan las fotos reales.
export default function Escena({ tipo }: { tipo: TipoEscena }) {
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      {tipo === "neon" && (
        <>
          <rect width="320" height="200" fill="#2a0c3e" />
          <rect y="140" width="320" height="60" fill="#1a0828" />
          <ellipse cx="160" cy="150" rx="110" ry="26" fill="#e0397a" />
          <ellipse cx="160" cy="142" rx="104" ry="22" fill="#ff6ea3" />
          <ellipse cx="128" cy="134" rx="22" ry="8" fill="#ffd1e2" />
          <ellipse cx="192" cy="134" rx="22" ry="8" fill="#ffd1e2" />
          <path
            d="M118 70 Q118 44 142 44 Q160 44 160 64 Q160 44 178 44 Q202 44 202 70 Q202 92 160 112 Q118 92 118 70 Z"
            fill="none"
            stroke="#ff4fa0"
            strokeWidth="6"
          />
          <path
            d="M118 70 Q118 44 142 44 Q160 44 160 64 Q160 44 178 44 Q202 44 202 70 Q202 92 160 112 Q118 92 118 70 Z"
            fill="none"
            stroke="#ff4fa0"
            strokeWidth="16"
            opacity="0.25"
          />
        </>
      )}
      {tipo === "terracota" && (
        <>
          <rect width="320" height="200" fill="#c4562f" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <g key={i} transform={`translate(${i * 40} 0)`}>
              <rect width="40" height="40" fill={i % 2 ? "#f3e6d2" : "#ead8bd"} />
              <circle cx="20" cy="20" r="11" fill="none" stroke="#2b4a9b" strokeWidth="4" />
              <circle cx="20" cy="20" r="3" fill="#2b4a9b" />
            </g>
          ))}
          <rect x="40" y="70" width="70" height="80" rx="35" fill="#ffcc80" opacity="0.9" />
          <rect x="72" y="70" width="6" height="80" fill="#c4562f" />
          <rect x="130" y="128" width="170" height="40" rx="6" fill="#fff0e4" />
          <rect x="130" y="112" width="170" height="20" rx="6" fill="#8e2a2a" />
          <rect y="168" width="320" height="32" fill="#7a2f1c" />
        </>
      )}
      {tipo === "loft" && (
        <>
          <rect width="320" height="200" fill="#1c0f33" />
          <rect x="20" y="20" width="280" height="130" fill="#3d1a63" />
          <rect x="20" y="90" width="280" height="60" fill="#ff8a4d" opacity="0.55" />
          <g fill="#140829">
            <rect x="30" y="100" width="24" height="50" />
            <rect x="60" y="80" width="18" height="70" />
            <rect x="84" y="110" width="30" height="40" />
            <rect x="122" y="70" width="22" height="80" />
            <rect x="150" y="96" width="28" height="54" />
            <rect x="186" y="60" width="16" height="90" />
            <rect x="208" y="104" width="34" height="46" />
            <rect x="248" y="86" width="20" height="64" />
            <rect x="274" y="108" width="24" height="42" />
          </g>
          <g fill="none" stroke="#0e0619" strokeWidth="6">
            <line x1="113" y1="20" x2="113" y2="150" />
            <line x1="206" y1="20" x2="206" y2="150" />
            <rect x="20" y="20" width="280" height="130" />
          </g>
          <rect x="70" y="160" width="180" height="30" rx="14" fill="#e0397a" />
        </>
      )}
      {tipo === "jacuzzi" && (
        <>
          <rect width="320" height="200" fill="#122248" />
          <rect x="230" y="20" width="70" height="110" rx="35" fill="#5fd2e0" opacity="0.25" />
          <ellipse cx="150" cy="140" rx="120" ry="40" fill="#e9e3f5" />
          <ellipse cx="150" cy="134" rx="104" ry="30" fill="#36c2d6" />
          {[
            [100, 128, 6],
            [130, 120, 4],
            [170, 130, 7],
            [200, 122, 5],
            [150, 140, 3],
            [118, 142, 4],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#dff8fc" />
          ))}
          <circle cx="60" cy="50" r="18" fill="#ff9a4d" opacity="0.8" />
          <circle cx="60" cy="50" r="34" fill="#ff9a4d" opacity="0.15" />
        </>
      )}
      {tipo === "mansion" && (
        <>
          <rect width="320" height="200" fill="#ff9a6b" />
          <rect width="320" height="90" fill="#ffc77d" />
          <rect x="60" y="50" width="200" height="80" fill="#fff0e4" />
          <path d="M50 54 L160 18 L270 54 Z" fill="#c64a3a" />
          {[80, 120, 180, 220].map((x) => (
            <rect key={x} x={x} y="70" width="22" height="30" fill="#45185e" />
          ))}
          <rect x="146" y="92" width="28" height="38" fill="#45185e" />
          <rect y="130" width="320" height="70" fill="#2f8f5b" />
          <rect x="70" y="146" width="180" height="40" rx="8" fill="#3cc6e0" />
          <path d="M84 162 Q110 156 136 162 T188 162 T236 162" stroke="#dff8fc" strokeWidth="3" fill="none" />
          <path d="M20 200 Q26 150 38 120 L42 121 Q32 150 28 200 Z" fill="#1f5c3c" />
          <path d="M40 120 Q16 110 0 126 Q20 118 40 124 Z M40 120 Q60 104 80 112 Q60 114 42 124 Z" fill="#1f5c3c" />
        </>
      )}
    </svg>
  );
}
