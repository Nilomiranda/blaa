import Layout from "app/layouts/Layout"
import { BlitzPage, useRouter } from "blitz"
import SignUpForm from "../components/SignUpForm"

const SignUpPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <SignUpForm onSuccess={() => router.push("/")} />
    </div>
  )
}

SignUpPage.getLayout = (page) => <Layout title="Create your account">{page}</Layout>

export default SignUpPage
