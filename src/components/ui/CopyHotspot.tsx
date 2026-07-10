"use client";

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
    alert("✅ CLABE copiada");
  };

  return (
    <button
      onClick={copy}
      className={`absolute ${className}`}
      //className={`absolute border-2 border-red-500 bg-red-500/20 ${className}`}
    />
  );
}