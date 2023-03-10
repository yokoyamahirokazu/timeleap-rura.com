import { Header } from '@/components/'

type LayoutProps = Required<{
  readonly children: React.ReactNode
}>

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)
export default Layout
