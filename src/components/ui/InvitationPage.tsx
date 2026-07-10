interface InvitationPageProps {
  children: React.ReactNode;
}

export default function InvitationPage({
  children,
}: InvitationPageProps) {
  return (
    <main className="mx-auto min-h-screen max-w-[430px] bg-[#F8F4EB]">
      {children}
    </main>
  );
}