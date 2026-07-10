"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
  trigger: ReactNode;
  children: ReactNode;
}

export default function ImageModal({
  trigger,
  children,
}: ImageModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />

        <Dialog.Content
          className="
            fixed
            left-1/2
            top-1/2
            z-50
            w-full
            max-w-[430px]
            max-h-[95vh]
            -translate-x-1/2
            -translate-y-1/2
            overflow-y-auto
            rounded-xl
            bg-[#F8F4EB]
            shadow-2xl
            focus:outline-none
          "
        >
          {children}

          <Dialog.Close
            className="
              absolute
              right-3
              top-3
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-lg
            "
          >
            <X size={20} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}