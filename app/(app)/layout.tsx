import MainScreen from '@/components/organisms/MainScreen'
import AppNavBar from '@/components/organisms/AppNavBar'
import Relative from '@/components/atoms/Relative'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Relative>
      <AppNavBar />
      <MainScreen children={children} />
    </Relative>
  )
}
