import Flex from "../atoms/Flex";
import LinkButton from "../atoms/LinkButton";

export default function AppNavBar() {
  return (
    <aside>
      <Flex className="justify-start flex-col gap-2">
        <LinkButton href="/home">Home</LinkButton>
        <LinkButton href="/menu">Menu</LinkButton>
        <LinkButton href="/products">Products</LinkButton>
        <LinkButton href="/settings">Settings</LinkButton>
      </Flex>
    </aside>
  );
}
