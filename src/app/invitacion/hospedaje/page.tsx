import InvitationPage from "@/components/ui/InvitationPage";
import SectionImage from "@/components/ui/SectionImage";
import Hotspot from "@/components/ui/Hotspot";
import InternalHotspot from "@/components/ui/InternalHotspot";
import { ROUTES } from "@/lib/links";

export default function HospedajePage() {
  return (
    <InvitationPage>
      <div className="relative">
        <SectionImage
          src="/images/hospedaje.png"
          alt="Hospedaje"
        />

        {/* Gamma - Ver ruta */}

        <Hotspot
          href="https://maps.app.goo.gl/HD4oVwoeMdUhaHMc8"
          className="
            left-[25%]
            top-[27%]
            w-[50%]
            h-[4%]
          "
        />

        {/* City Express - Ver ruta */}

        <Hotspot
          href="https://maps.app.goo.gl/UdUiK12b5TL1qmB69"
          className="
            left-[25%]
            top-[58%]
            w-[50%]
            h-[4%]
          "
        />

        {/* Holiday Inn - Reservar */}

        <Hotspot
          href="https://www.ihg.com/holidayinnexpress/hotels/us/es/find-hotels/select-roomrate?fromRedirect=true&qSrt=sBR&qIta=99801505&icdv=99801505&qSlH=MTYEG&qCiD=17&qCiMy=062026&qCoD=19&qCoMy=062026&qGrpCd=CD1&setPMCookies=true&qSHBrC=EX&qDest=AV.%20EUGENIO%20GARZA%20SADA%20%3A%203680%20SUR%2C%20MONTERREY%2C%20NLE%2C%20MX&showApp=true&adjustMonth=false&srb_u=1"
          className="
            left-[25%]
            bottom-[12%]
            w-[50%]
            h-[4%]
          "
        />

        {/* Holiday Inn - Ver ruta */}

        <Hotspot
          href="https://maps.app.goo.gl/rvpK7ZGQnHERQ7af8"
          className="
            left-[25%]
            bottom-[7%]
            w-[50%]
            h-[4%]
          "
        />

        {/* Volver */}

        <InternalHotspot
          href={ROUTES.hotels}
          className="
            left-[18%]
            bottom-[0%]
            w-[50%]
            h-[4%]
          "
        />
      </div>
    </InvitationPage>
  );
}