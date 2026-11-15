"use client";

import { useEffect, useRef, useState } from "react";
import { urlFoto } from "@/data/paquetes";

// Foto con aparición suave. Si no carga, queda oculta y se ve la ilustración de respaldo.
export default function FotoAmbiente({ id, alt, sizes }: { id: string; alt: string; sizes: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [lista, setLista] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth > 0) setLista(true);
  }, []);

  return (
    <img
      ref={ref}
      src={urlFoto(id)}
      srcSet={`${urlFoto(id, 600)} 600w, ${urlFoto(id, 900)} 900w, ${urlFoto(id, 1400)} 1400w`}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      onLoad={() => setLista(true)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${lista ? "opacity-100" : "opacity-0"}`}
    />
  );
}
