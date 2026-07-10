import InvitationPage from "@/components/ui/InvitationPage";
import SectionImage from "@/components/ui/SectionImage";
import Hotspot from "@/components/ui/Hotspot";
import InternalHotspot from "@/components/ui/InternalHotspot";
import { ROUTES } from "@/lib/links";

export default function MisaPage() {
  return (
    <InvitationPage>
      <div className="relative">
        <SectionImage src="/images/misa.svg" alt="Misa" />

        {/* Google */}

        <Hotspot
          href="https://maps.app.goo.gl/Ay24ruVJ4vPK3msL7"
          className="
            left-[6%]
            top-[60%]
            w-[37%]
            h-[15%]
          "
        />

        {/* Waze */}

        <Hotspot
          href="https://ul.waze.com/ul?place=ChIJTcl0ur6_YoYRF_ktfIpXAVI&ll=25.64841740%2C-100.28735080&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          className="
            right-[6%]
            top-[60%]
            w-[37%]
            h-[15%]
          "
        />

        {/* Volver */}

        <InternalHotspot
          href={ROUTES.details}
          className="
        left-[25%]
        bottom-[0%]
        w-[50%]
        h-[14%]
    "
        />
      </div>
    </InvitationPage>
  );
}
