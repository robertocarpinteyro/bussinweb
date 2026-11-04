type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const Candado = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" fill="currentColor" stroke="none" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
  </svg>
);

export const Camara = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 8h3l2-2.5h6L17 8h3v11H4z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export const Foto = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="5" width="17" height="14" rx="2" />
    <path d="m4 17 5-5 4 4 2.5-2.5L20 18" />
    <circle cx="15.5" cy="9.5" r="1.5" />
  </svg>
);

export const Clip = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="6" width="12" height="12" rx="2" />
    <path d="m15.5 10.5 5-3v9l-5-3" />
  </svg>
);

export const Nube = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.4 1.6A3.3 3.3 0 0 0 7 18z" />
    <path d="M12 11v5m-2-2 2 2 2-2" />
  </svg>
);

export const Chat = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 5h14v10H10l-4 4v-4H5z" />
    <path d="M9 10h.01M12 10h.01M15 10h.01" strokeWidth="3" />
  </svg>
);

export const Chica = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <circle cx="12" cy="7" r="4" />
    <path d="M4 21c.5-5 3.6-8 8-8s7.5 3 8 8z" />
  </svg>
);
