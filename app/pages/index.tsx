import Layout from "app/layouts/Layout"

const Home = () => {
  return <h1 className="text-5xl text-red-500">Hello</h1>
}

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
