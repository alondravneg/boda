import InvitationPage from "@/components/ui/InvitationPage";
import SectionImage from "@/components/ui/SectionImage";
import Hotspot from "@/components/ui/Hotspot";
import InternalHotspot from "@/components/ui/InternalHotspot";
import { ROUTES } from "@/lib/links";

export default function RecepcionPage() {
  return (
    <InvitationPage>
      <div className="relative">
        <SectionImage src="/images/recepcion.svg" alt="Recepcion" />

        {/* Google */}

        <Hotspot
          href="https://maps.app.goo.gl/r9D86sjdxyJz6gs57"
          className="
            left-[6%]
            top-[60%]
            w-[37%]
            h-[15%]
          "
        />

        {/* Waze */}

        <Hotspot
          href="https://ul.waze.com/ul?place=ChIJqRr0JpvPYoYRFwZFGGUEUdM&ll=25.45198370%2C-100.16075190&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          className="
            right-[4%]
            top-[60%]
            w-[37%]
            h-[15%]
          "
        />

        {/* Volver */}

        <InternalHotspot
          href={ROUTES.details}
          className="
        left-[27%]
        bottom-[0%]
        w-[50%]
        h-[14%]
    "
        />
      </div>
    </InvitationPage>
  );
}
