import InvitationPage from "@/components/ui/InvitationPage";
import SectionImage from "@/components/ui/SectionImage";
import InternalHotspot from "@/components/ui/InternalHotspot";
import { ROUTES } from "@/lib/links";

export default function LosFavoritosPage() {
  return (
    <InvitationPage>
      <div className="relative">
        <SectionImage
          src="/images/losfavoritos.svg"
          alt="Los favoritos de los novios"
        />

        {/* Volver a la invitación */}

        <InternalHotspot
          href={ROUTES.gifts}
          className="
            left-[18%]
            bottom-[5%]
            w-[64%]
            h-[8%]
          "
        />
      </div>
    </InvitationPage>
  );
}