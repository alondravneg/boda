"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const playMusic = () => {
    // Luego cambiaremos esto por el reproductor integrado
    window.open(
      "https://youtu.be/M-gtVF33vbU?si=5EsCzfE63cKBIwpU&t=7",
      "_blank"
    );
  };

  const scrollNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="flex flex-col items-center bg-[#F8F4EB]">

      <div className="relative w-full">

        {/* FOTO */}

        <Image
          src="/images/hero.png"
          alt="Alondra y Oscar"
          width={1080}
          height={1575}
          priority
          className="w-full h-auto"
        />

        {/* Overlay */}

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F8F4EB] via-[#F8F4EB]/70 to-transparent" />

        {/* Monograma */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 top-[52%] -translate-x-1/2"
        >
          <Image
            src="/images/monogram.png"
            alt="A&O"
            width={170}
            height={170}
            priority
          />
        </motion.div>

        {/* Música */}

        <button
          onClick={playMusic}
          className="absolute left-1/2 top-[73%] -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#5A4B43] text-white shadow-lg transition hover:scale-105"
        >
          ▶
        </button>

        {/* Frase */}

        <div className="absolute bottom-20 left-1/2 w-[80%] -translate-x-1/2 text-center">

          <p
            className="italic text-[#5C5550]"
            style={{
              fontSize: "14px",
              lineHeight: "1.8",
            }}
          >
            "En un latido de mi vida encontré
            <br />
            el principio de nuestra historia."
          </p>

        </div>

      </div>

      {/* Flecha */}

      <motion.button
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        onClick={scrollNext}
        className="my-8 flex h-11 w-11 items-center justify-center rounded-full border border-[#DCC9B5] bg-white shadow"
      >
        <ChevronDown
          size={20}
          color="#8F7965"
        />
      </motion.button>

    </section>
  );
}