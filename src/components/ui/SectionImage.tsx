import Image from "next/image";

interface SectionImageProps {
  src: string;
  alt: string;
}

export default function SectionImage({
  src,
  alt,
}: SectionImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={430}
      height={1000}
      className="block w-full h-auto"
      priority={false}
    />
  );
}