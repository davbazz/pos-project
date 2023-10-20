type NavbarDividerType = {
  selectedPath: string;
  endpoint: string;
};

export default function NavbarDivider({
  selectedPath,
  endpoint,
}: NavbarDividerType) {
  return (
    <span
      className={`absolute top-0 right-[-20px] w-[3px] h-full bg-primary rounded-l-xl ${
        selectedPath === endpoint ? "block" : "hidden"
      }`}
    />
  );
}
