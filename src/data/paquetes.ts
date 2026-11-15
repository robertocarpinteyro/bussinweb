// Datos provisionales del prototipo. Precios y ambientes por confirmar.

export type Catalogo = "basico" | "especial" | "lujo";
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

// El ambiente Lujo es un extra que se puede agregar a cualquier paquete.
export const PRECIO_LUJO = 2000;

export type Escena = "neon" | "terracota" | "loft" | "jacuzzi" | "mansion";

// Las ubicaciones se presentan como ambientes (la vibra del lugar),
// sin decir qué tipo de espacio es. Las fotos reales se comparten por WhatsApp.
export interface Ambiente {
  id: string;
  nombre: string;
  descripcion: string;
  catalogo: Catalogo;
  escena: Escena; // ilustración de respaldo si la foto no carga
  foto: { id: string; autor: string };
}

export const ambientes: Ambiente[] = [
  {
    id: "neon",
    nombre: "Neón",
    descripcion: "Luces de color y una vibra nocturna.",
    catalogo: "basico",
    escena: "neon",
    foto: { id: "photo-1734943451393-0f922a7ea5a0", autor: "Pongracz Noemi" },
  },
  {
    id: "calido",
    nombre: "Cálido",
    descripcion: "Tonos tierra, texturas y luz suave.",
    catalogo: "basico",
    escena: "terracota",
    foto: { id: "photo-1631642659688-ea5ee49f099e", autor: "Matthieu Lemarchal" },
  },
  {
    id: "urbano",
    nombre: "Urbano",
    descripcion: "Ventanales con la ciudad de fondo.",
    catalogo: "especial",
    escena: "loft",
    foto: { id: "photo-1771287490603-fbf9b6211cc3", autor: "Franco Debartolo" },
  },
  {
    id: "agua",
    nombre: "Agua",
    descripcion: "Reflejos, vapor y luz ambiental.",
    catalogo: "especial",
    escena: "jacuzzi",
    foto: { id: "photo-1646974400439-8472d58bb19e", autor: "Masato Tsuchiya" },
  },
  {
    id: "lujo",
    nombre: "Lujo",
    descripcion: "Espacios amplios con acabados de lujo.",
    catalogo: "lujo",
    escena: "mansion",
    foto: { id: "photo-1700586834181-1a2f3bd87eda", autor: "reza pratama" },
  },
];

// Fotos de muestra de Unsplash (licencia libre). Se reemplazan por las reales.
export const urlFoto = (id: string, ancho = 900) =>
  `https://images.unsplash.com/${id}?w=${ancho}&q=75&auto=format&fit=crop`;

export const nombreCatalogo: Record<Catalogo, string> = {
  basico: "Básico",
  especial: "Especial",
  lujo: "Lujo",
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
