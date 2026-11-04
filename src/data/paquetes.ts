// Datos provisionales del prototipo. Precios y ubicaciones por confirmar.

export type Nivel = "basica" | "premium" | "superpremium";

export interface Paquete {
  chicas: number;
  precio: number;
  dias: number;
  nivel: Nivel;
}

export const paquetes: Paquete[] = [
  { chicas: 1, precio: 5000, dias: 1, nivel: "basica" },
  { chicas: 2, precio: 9000, dias: 1, nivel: "basica" },
  { chicas: 3, precio: 13500, dias: 1, nivel: "premium" },
  { chicas: 5, precio: 20000, dias: 1, nivel: "premium" },
  { chicas: 7, precio: 26000, dias: 2, nivel: "superpremium" },
];

export type Escena = "neon" | "terracota" | "loft" | "jacuzzi" | "mansion";

export interface Ubicacion {
  id: string;
  nombre: string;
  descripcion: string;
  nivel: Nivel;
  minimo: number; // chicas necesarias para desbloquear
  escena: Escena;
}

export const ubicaciones: Ubicacion[] = [
  {
    id: "neon",
    nombre: "Suite Neón",
    descripcion: "Motel boutique con luces de neón y cama redonda.",
    nivel: "basica",
    minimo: 1,
    escena: "neon",
  },
  {
    id: "terracota",
    nombre: "Cuarto Terracota",
    descripcion: "Hotel en el centro de Puebla, muros de talavera y luz cálida.",
    nivel: "basica",
    minimo: 1,
    escena: "terracota",
  },
  {
    id: "loft",
    nombre: "Loft Angelópolis",
    descripcion: "Ventanales de piso a techo con la ciudad de fondo.",
    nivel: "premium",
    minimo: 3,
    escena: "loft",
  },
  {
    id: "jacuzzi",
    nombre: "Suite Jacuzzi",
    descripcion: "Jacuzzi privado, espejos y luz ambiental.",
    nivel: "premium",
    minimo: 3,
    escena: "jacuzzi",
  },
  {
    id: "mansion",
    nombre: "La Mansión",
    descripcion: "Casa completa con alberca y jardín, todo el día para ustedes.",
    nivel: "superpremium",
    minimo: 7,
    escena: "mansion",
  },
];

export const nombreNivel: Record<Nivel, string> = {
  basica: "Básica",
  premium: "Premium",
  superpremium: "Súper premium",
};

export const pesos = (n: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
