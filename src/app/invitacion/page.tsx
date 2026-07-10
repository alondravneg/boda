import Section from "@/components/ui/Section";
import SectionImage from "@/components/ui/SectionImage";
import NavButton from "@/components/ui/NavButton";
import MusicPlayer from "@/components/features/MusicPlayer";
import Countdown from "@/components/features/Countdown";
import Hotspot from "@/components/ui/Hotspot";
import { CLABE, LINKS } from "@/lib/links";
import CopyHotspot from "@/components/ui/CopyHotspot";
import ImageModal from "@/components/modals/ImageModal";

export default function Home() {
  return (
    <main className="mx-auto max-w-[430px] bg-[#F8F4EB]">
      <Section id="inicio">
        <div className="relative">
          <SectionImage src="/images/header.svg" alt="Header" />

          <NavButton
            href="#inicio"
            className="left-[4%] top-[20%] h-[45%] w-[14%]"
          />

          <NavButton
            href="#detalles"
            className="left-[19%] top-[20%] h-[45%] w-[17%]"
          />

          <NavButton
            href="#countdown"
            className="left-[40%] top-[20%] h-[45%] w-[12%]"
          />

          <NavButton
            href="#regalos"
            className="left-[55%] top-[20%] h-[45%] w-[25%]"
          />

          <NavButton
            href="#hospedaje"
            className="left-[80%] top-[20%] h-[45%] w-[15%]"
          />
        </div>

        <div className="relative">
          <SectionImage src="/images/home.svg" alt="Home" />

          <MusicPlayer />
        </div>
      </Section>

      <Section id="detalles">
        <SectionImage src="/images/invitacion.svg" alt="Invitación" />
        <div className="relative">
          <SectionImage src="/images/info-y-dresscode.svg" alt="Información" />

          <Hotspot
            href={LINKS.calendar}
            className="left-[25%] top-[7%] w-[50%] h-[5%]"
          />

          <ImageModal
            trigger={
              <button
                className="
        absolute
        left-[37%]
        top-[30%]
        h-[5%]
        w-[50%]
      "
              />
            }
          >
            <div className="relative">
              <SectionImage src="/images/misa.png" alt="Misa" />

              <Hotspot
                href="https://maps.app.goo.gl/Ay24ruVJ4vPK3msL7"
                className="
        left-[6%]
        bottom-[0%]
        w-[40%]
        h-[20%]
      "
              />

              <Hotspot
                href="https://ul.waze.com/ul?place=ChIJTcl0ur6_YoYRF_ktfIpXAVI&ll=25.64841740%2C-100.28735080&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                className="
        right-[5%]
        bottom-[0%]
        w-[40%]
        h-[20%]
      "
              />
            </div>
          </ImageModal>

          <ImageModal
            trigger={
              <button
                className="
        absolute
        left-[37%]
        top-[47%]
        h-[5%]
        w-[50%]
      "
              />
            }
          >
            <div className="relative">
              <SectionImage src="/images/recepcion.png" alt="Recepción" />

              {/* Google Maps */}

              <Hotspot
                href="https://maps.app.goo.gl/r9D86sjdxyJz6gs57"
                className="
                  left-[6%]
                  bottom-[0%]
                  w-[40%]
                  h-[20%]
                "
              />

              {/* Waze */}

              <Hotspot
                href="https://ul.waze.com/ul?place=ChIJqRr0JpvPYoYRFwZFGGUEUdM&ll=25.45198370%2C-100.16075190&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                className="
                    right-[2%]
                    bottom-[0%]
                    w-[40%]
                    h-[20%]
                  "
              />
            </div>
          </ImageModal>
        </div>

        <div className="relative">
          <SectionImage src="/images/wpcontact.svg" alt="WhatsApp" />

          <Hotspot
            href={LINKS.whatsapp}
            className="left-[18%] bottom-[0%] w-[64%] h-[25%]"
          />
        </div>

        <SectionImage src="/images/timeline.svg" alt="Timeline" />
      </Section>

      <Section id="countdown">
        <SectionImage src="/images/nosvemos.svg" alt="Nos vemos en..." />

        <Countdown />
      </Section>

      <Section id="hospedaje">
        <SectionImage src="/images/fotos.gif" alt="Fotos" />
      </Section>

      <div className="relative">
        <SectionImage src="/images/foraneos.svg" alt="Hospedaje" />

        <ImageModal
          trigger={
            <button
              className="
        absolute
        left-[22%]
        top-[40%]
        w-[56%]
        h-[10%]
      "
            />
          }
        >
          <div className="relative">
            <SectionImage src="/images/hospedaje.png" alt="Hospedaje" />

            {/* Gamma Monterrey */}

            <Hotspot
              href="https://maps.app.goo.gl/HD4oVwoeMdUhaHMc8"
              className="
        left-[22%]
        top-[28%]
        w-[56%]
        h-[5%]
      "
            />

            {/* City Express */}

            <Hotspot
              href="https://maps.app.goo.gl/UdUiK12b5TL1qmB69"
              className="
        left-[22%]
        top-[59%]
        w-[56%]
        h-[5%]
      "
            />

            {/* Holiday Inn - Reservar */}

            <Hotspot
              href="https://www.ihg.com/holidayinnexpress/hotels/us/es/find-hotels/select-roomrate?fromRedirect=true&qSrt=sBR&qIta=99801505&icdv=99801505&qSlH=MTYEG&qCiD=17&qCiMy=062026&qCoD=19&qCoMy=062026&qGrpCd=CD1&setPMCookies=true&qSHBrC=EX&qDest=AV.%20EUGENIO%20GARZA%20SADA%20%3A%203680%20SUR%2C%20MONTERREY%2C%20NLE%2C%20MX&showApp=true&adjustMonth=false&srb_u=1"
              className="
        left-[22%]
        bottom-[9%]
        w-[56%]
        h-[5%]
      "
            />

            {/* Holiday Inn - Ver ruta */}

            <Hotspot
              href="https://maps.app.goo.gl/rvpK7ZGQnHERQ7af8"
              className="
        left-[22%]
        bottom-[4%]
        w-[56%]
        h-[4%]
      "
            />
          </div>
        </ImageModal>

        <ImageModal
          trigger={
            <button
              className="
        absolute
        left-[16%]
        bottom-[-2%]
        w-[70%]
        h-[10%]
      "
            />
          }
        >
          <div className="relative bg-[#4F5D8A]">
            <SectionImage
              src="/images/losfavoritos.png"
              alt="Los favoritos de los novios"
            />
          </div>
        </ImageModal>
      </div>

      <Section id="regalos">
        <div className="relative">
          <SectionImage src="/images/mesaregalos.svg" alt="Mesa de regalos" />

          <CopyHotspot
            text={CLABE}
            className="left-[22%] top-[35%] w-[56%] h-[7%]"
          />

          <Hotspot
            href={LINKS.amazon}
            className="left-[22%] top-[52%] w-[56%] h-[7%]"
          />

          <Hotspot
            href={LINKS.liverpool}
            className="left-[22%] bottom-[27%] w-[56%] h-[7%]"
          />
        </div>
        <SectionImage src="/images/fin.svg" alt="Fin" />
      </Section>
    </main>
  );
}
