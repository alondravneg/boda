"use client";

interface HotspotProps {
  className: string;
  href?: string;
  onClick?: () => void;
}

export default function Hotspot({
  className,
  href,
  onClick,
}: HotspotProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute bg-transparent cursor-pointer ${className}`}
      //className={`absolute border-2 border-red-500 bg-red-500/20 ${className}`}
      aria-label="Hotspot"
    />
  );
}