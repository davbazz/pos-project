import Flex from "../atoms/Flex";
import SubText from "../atoms/SubText";
import LinkButton from "../atoms/LinkButton";

export default function RedirectToMenu() {
  return (
    <Flex className="flex-col justify-center items-center">
      <SubText>You need to create a menu first</SubText>
      <LinkButton href="/menu">Set up a menu</LinkButton>
    </Flex>
  );
}
