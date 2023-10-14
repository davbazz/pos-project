import Flex from "../atoms/Flex";
import LinkButton from "../atoms/LinkButton";
import LogoutButton from "../atoms/LogoutButton";

export default function AppNavBar() {
  return (
    <aside>
      <Flex className="justify-start flex-col gap-2">
        <LinkButton href="/home">Home</LinkButton>
        <LinkButton href="/menu">Menu</LinkButton>
        <LinkButton href="/history">History</LinkButton>
        <LogoutButton />
      </Flex>
    </aside>
  );
}
