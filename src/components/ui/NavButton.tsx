"use client";

interface NavButtonProps {
  href: string;
  className: string;
}

export default function NavButton({
  href,
  className,
}: NavButtonProps) {
  const scroll = () => {
    document
      .querySelector(href)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <button
      onClick={scroll}
      className={`absolute ${className}`}
    />
  );
}