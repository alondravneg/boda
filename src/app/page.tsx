import SectionImage from "@/components/ui/SectionImage";

export default function Home() {
  return (
    <main className="mx-auto max-w-[430px] bg-[#F8F4EB]">

      <SectionImage
        src="/images/header.svg"
        alt="Header"
      />

      <SectionImage
        src="/images/home.svg"
        alt="Home"
      />

      <SectionImage
        src="/images/invitacion.svg"
        alt="Invitación"
      />

      <SectionImage
        src="/images/info-y-dresscode.svg"
        alt="Información"
      />

      <SectionImage
        src="/images/wpcontact.svg"
        alt="WhatsApp"
      />

      <SectionImage
        src="/images/timeline.svg"
        alt="Timeline"
      />

      {/* Countdown */}

      <div className="bg-[#F8F4EB] py-10 text-center">
        AQUÍ VA EL COUNTDOWN
      </div>

      <SectionImage
        src="/images/fotos.gif"
        alt="Fotos"
      />

      <SectionImage
        src="/images/foraneos.svg"
        alt="Foráneos"
      />

      <SectionImage
        src="/images/mesaregalos.svg"
        alt="Mesa de regalos"
      />

      <SectionImage
        src="/images/fin.svg"
        alt="Fin"
      />

    </main>
  );
}