// Datos provisionales del prototipo. Precios y ambientes por confirmar.

export type Catalogo = "basico" | "especial";
export type Horario = "dia" | "noche";

export interface Paquete {
  chicas: number;
  precio: number;
  catalogo: Catalogo;
}

export const paquetes: Paquete[] = [
  { chicas: 1, precio: 5000, catalogo: "basico" },
  { chicas: 2, precio: 9000, catalogo: "basico" },
  { chicas: 3, precio: 13500, catalogo: "especial" },
];

export const CHICAS_ESPECIAL = 3;

export type Escena = "neon" | "terracota" | "loft" | "jacuzzi" | "mansion";

// Las ubicaciones se presentan como ambientes (la vibra del lugar),
// sin decir qué tipo de espacio es. Las fotos reales se comparten por WhatsApp.
export interface Ambiente {
  id: string;
  nombre: string;
  descripcion: string;
  catalogo: Catalogo;
  escena: Escena;
}

export const ambientes: Ambiente[] = [
  {
    id: "neon",
    nombre: "Neón",
    descripcion: "Luces de color y una vibra nocturna.",
    catalogo: "basico",
    escena: "neon",
  },
  {
    id: "calido",
    nombre: "Cálido",
    descripcion: "Tonos tierra, texturas y luz suave.",
    catalogo: "basico",
    escena: "terracota",
  },
  {
    id: "urbano",
    nombre: "Urbano",
    descripcion: "Ventanales con la ciudad de fondo.",
    catalogo: "especial",
    escena: "loft",
  },
  {
    id: "agua",
    nombre: "Agua",
    descripcion: "Reflejos, vapor y luz ambiental.",
    catalogo: "especial",
    escena: "jacuzzi",
  },
  {
    id: "lujo",
    nombre: "Lujo",
    descripcion: "Espacios amplios con acabados de lujo.",
    catalogo: "especial",
    escena: "mansion",
  },
];

export const nombreCatalogo: Record<Catalogo, string> = {
  basico: "Básico",
  especial: "Especial",
};

export const nombreHorario: Record<Horario, string> = {
  dia: "De día",
  noche: "De noche",
};

const NUMERO_WHATSAPP = "5212201758468";

export const whatsapp = (mensaje: string) =>
  `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

export const pesos = (n: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
