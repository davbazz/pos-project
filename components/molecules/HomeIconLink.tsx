import type { IconLinkType } from "@/types/IconLinkType";
import HomepageIcon from "../svg's/HomepageIcon";
import IconLinkWrapper from "../wrappers/IconLinkWrapper";
import LinkButton from "../atoms/LinkButton";
import Relative from "../atoms/Relative";
import NavbarDivider from "../atoms/NavbarDivider";

export default function HomeIconLink({
  selectedPath,
  setSelectedPath,
}: IconLinkType) {
  return (
    <LinkButton href="/home" onClick={() => setSelectedPath("/home")}>
      <Relative>
        <IconLinkWrapper>
          <HomepageIcon selectedPath={selectedPath} />
          <p
            className={`text-sm leading-4 ${
              selectedPath === "/home" ? "text-primary" : "text-secondary"
            }`}
          >
            Home
          </p>
          <NavbarDivider selectedPath={selectedPath} endpoint="/home" />
        </IconLinkWrapper>
      </Relative>
    </LinkButton>
  );
}
