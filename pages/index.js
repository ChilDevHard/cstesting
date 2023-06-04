import Layout from '../components/layout';
import CarSearch from '../components/carSearch';
import APIListComponent from '../components/apiListComponent';

export default function Home() {
  return (
    <Layout>
          <CarSearch/>
          <APIListComponent />
    </Layout>
  )
}
