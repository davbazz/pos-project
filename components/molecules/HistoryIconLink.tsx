import { IconLinkType } from "@/types/IconLinkType";
import HistoryIcon from "../svg's/HistoryIcon";
import IconLinkWrapper from "../wrappers/IconLinkWrapper";
import LinkButton from "../atoms/LinkButton";
import NavbarDivider from "../atoms/NavbarDivider";
import Relative from "../atoms/Relative";

export default function HistoryIconLink({
  selectedPath,
  setSelectedPath,
}: IconLinkType) {
  return (
    <LinkButton href="/history" onClick={() => setSelectedPath("/history")}>
      <Relative>
        <IconLinkWrapper>
          <HistoryIcon selectedPath={selectedPath} />
          <p
            className={`text-sm leading-4 ${
              selectedPath === "/history" ? "text-primary" : "text-secondary"
            }`}
          >
            History
          </p>
          <NavbarDivider selectedPath={selectedPath} endpoint="/history" />
        </IconLinkWrapper>
      </Relative>
    </LinkButton>
  );
}
