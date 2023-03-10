import { NextPageWithLayout } from 'next'
import Layout from '@/layouts/Layout'

const Home: NextPageWithLayout = () => {
  return <div>index</div>
}
Home.getLayout = (page) => <Layout>{page}</Layout>
export default Home
