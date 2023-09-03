import MenuNavBar from "@/components/molecules/MenuNavBar";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MenuNavBar />
      {children}
    </div>
  );
}
