// Precios por chica (MXN). La ubicación exacta se define al reservar.

export type Nivel = "basica" | "premium" | "superpremium";

export interface Paquete {
  chicas: number;
  precioPorChica: number;
  nivel: Nivel;
  ubicacion: string;
  produccion: string;
  fotos: number;
  clips: number;
  notaClips?: string;
  diasGestion: number;
  catering: boolean;
}

export const paquetes: Paquete[] = [
  {
    chicas: 1,
    precioPorChica: 6000,
    nivel: "basica",
    ubicacion: "Motel o Airbnb sencillo, sin jacuzzi",
    produccion: "2.5 horas",
    fotos: 30,
    clips: 10,
    notaClips: "hasta 30 s c/u; 5 pueden ser largos para OnlyFans",
    diasGestion: 15,
    catering: true,
  },
  {
    chicas: 2,
    precioPorChica: 5500,
    nivel: "premium",
    ubicacion: "Motel luxury con jacuzzi o cualquier ubicación dentro del precio",
    produccion: "5 horas",
    fotos: 30,
    clips: 10,
    diasGestion: 15,
    catering: true,
  },
  {
    chicas: 3,
    precioPorChica: 5000,
    nivel: "superpremium",
    ubicacion: "Ubicación premium con rodaje de día y de noche",
    produccion: "Día completo (día y noche)",
    fotos: 50,
    clips: 13,
    diasGestion: 30,
    catering: true,
  },
];

export const precioTotal = (p: Paquete) => p.precioPorChica * p.chicas;

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
    descripcion: "Airbnb estándar en el centro de Puebla, muros de talavera y luz cálida.",
    nivel: "basica",
    minimo: 1,
    escena: "terracota",
  },
  {
    id: "loft",
    nombre: "Loft Angelópolis",
    descripcion: "Ventanales de piso a techo con la ciudad de fondo.",
    nivel: "premium",
    minimo: 2,
    escena: "loft",
  },
  {
    id: "jacuzzi",
    nombre: "Suite Jacuzzi",
    descripcion: "Motel luxury con jacuzzi privado, espejos y luz ambiental.",
    nivel: "premium",
    minimo: 2,
    escena: "jacuzzi",
  },
  {
    id: "mansion",
    nombre: "La Mansión",
    descripcion: "Casa completa con alberca y jardín, rodaje de día y de noche.",
    nivel: "superpremium",
    minimo: 3,
    escena: "mansion",
  },
];

export const nombreNivel: Record<Nivel, string> = {
  basica: "Estándar",
  premium: "Luxury",
  superpremium: "Premium",
};

export const pesos = (n: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
