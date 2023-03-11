import { Header, Footer } from '@/components/'

type LayoutProps = Required<{
  readonly children: React.ReactNode
}>

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
export default Layout
