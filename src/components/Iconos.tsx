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

export const Sol = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
  </svg>
);

export const Luna = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" fill="currentColor" stroke="none" />
  </svg>
);

export const WhatsApp = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M12 2.2a9.7 9.7 0 0 0-8.3 14.7L2.3 21.8l5-1.3A9.7 9.7 0 1 0 12 2.2zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.8 2c0 1.2.9 2.3 1 2.5.1.2 1.7 2.6 4.1 3.6 1.5.7 2.1.7 2.9.6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.4-.4z" />
  </svg>
);
