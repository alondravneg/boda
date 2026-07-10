"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  trigger: ReactNode;
  children: ReactNode;
}

export default function Modal({
  trigger,
  children,
}: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>

      <Dialog.Portal>

        <Dialog.Overlay
          className="
            fixed
            inset-0
            bg-black/60
            backdrop-blur-sm
            z-50
          "
        />

        <Dialog.Content
          className="
            fixed
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-full
            max-w-[430px]
            max-h-[95vh]
            overflow-auto
            rounded-xl
            z-50
          "
        >

          {children}

          <Dialog.Close
            className="
              fixed
              right-4
              top-4
              h-10
              w-10
              rounded-full
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
            "
          >
            <X size={20} />
          </Dialog.Close>

        </Dialog.Content>

      </Dialog.Portal>
    </Dialog.Root>
  );
}