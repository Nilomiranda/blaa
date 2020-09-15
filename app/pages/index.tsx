import Layout from "app/layouts/Layout"
import { Link } from "blitz"

const Home = () => {
  return (
    <>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </>
  )
}

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
