"use client";

import { toast } from "sonner";

interface Props {
  className: string;
  text: string;
}

export default function CopyHotspot({
  className,
  text,
}: Props) {

  const copy = async () => {
    await navigator.clipboard.writeText(text);

    toast.success("Número de tarjeta copiado");
  };

  return (
    <button
      onClick={copy}
      className={`absolute ${className}`}
      aria-label="Copiar número de tarjeta"
    />
  );
}