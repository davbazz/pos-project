import BZVLogo from "../atoms/BZVLogo";
import Flex from "../atoms/Flex";
import LinkButton from "../atoms/LinkButton";
import LogoutButton from "../atoms/LogoutButton";

export default function AppNavBar() {
  return (
    <aside className="absolute top-0 left-0 w-[140px] h-screen px-4 py-6">
      <Flex className="w-full h-full justify-between flex-col">
        <Flex className="justify-start flex-col gap-20">
          <BZVLogo />

          <Flex className="flex-col gap-4">
            <LinkButton href="/home">Home</LinkButton>
            <LinkButton href="/menu">Menu</LinkButton>
            <LinkButton href="/history">History</LinkButton>
          </Flex>
        </Flex>

        <LogoutButton />
      </Flex>
    </aside>
  );
}
