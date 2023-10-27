import { IconLinkType } from '@/types/IconLinkType'
import MenuIcon from "../svg's/MenuIcon"
import IconLinkWrapper from '../wrappers/IconLinkWrapper'
import LinkButton from '../atoms/LinkButton'
import Relative from '../atoms/Relative'
import NavbarDivider from '../atoms/NavbarDivider'

export default function MenuIconLink({
  selectedPath,
  setSelectedPath,
}: IconLinkType) {
  return (
    <LinkButton href="/menu" onClick={() => setSelectedPath('/menu')}>
      <Relative>
        <IconLinkWrapper>
          <MenuIcon selectedPath={selectedPath} />
          <p
            className={`text-sm leading-4 ${
              selectedPath === '/menu' ? 'text-primary' : 'text-secondary'
            }`}
          >
            Menu
          </p>
          <NavbarDivider selectedPath={selectedPath} endpoint="/menu" />
        </IconLinkWrapper>
      </Relative>
    </LinkButton>
  )
}
