import type { Metadata } from "next";
import "@fontsource/bowlby-one";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bussin' | Producción de contenido para creadoras",
  description:
    "Sesiones de foto y video para creadoras de contenido en Puebla y Cholula, con un mes de gestión de cuenta incluido.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
