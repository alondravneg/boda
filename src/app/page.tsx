import Section from "@/components/ui/Section";
import SectionImage from "@/components/ui/SectionImage";
import NavButton from "@/components/ui/NavButton";
import MusicPlayer from "@/components/features/MusicPlayer";
import Countdown from "@/components/features/Countdown";
import Hotspot from "@/components/ui/Hotspot";
import { CLABE, LINKS } from "@/lib/links";
import CopyHotspot from "@/components/ui/CopyHotspot";

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
          
          <Hotspot
            href={LINKS.ceremony}
            className="left-[37%] top-[30%] w-[50%] h-[5%]"
          />

          <Hotspot
            href={LINKS.reception}
            className="left-[37%] top-[47%] w-[50%] h-[5%]"
          />
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

        <Hotspot
          href={LINKS.hotel}
          className="left-[22%] top-[40%] w-[56%] h-[10%]"
        />

        <Hotspot
          href={LINKS.favorites}
          className="left-[16%] bottom-[-2%] w-[70%] h-[10%]"
        />
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
