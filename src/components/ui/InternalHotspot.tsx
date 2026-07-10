"use client";

import Link from "next/link";

interface Props {
  href: string;
  className: string;
}

export default function InternalHotspot({
  href,
  className,
}: Props) {
  return (
    <Link
      href={href}
      onClick={() => {
        sessionStorage.setItem("returnTo", href);
      }}
      className={`absolute ${className}`}
    />
  );
}