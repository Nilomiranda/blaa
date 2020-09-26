import React from "react"
import { Link } from "blitz"
import { Form, FORM_ERROR } from "app/components/Form"
import login from "app/auth/mutations/login"
import { LoginInput, LoginInputType } from "app/auth/validations"
import Input from "../../components/Input"
import Button from "app/components/Button"
import TextLink from "app/components/TextLink"

type LoginFormProps = {
  onSuccess?: () => void
}

export const LoginForm = (props: LoginFormProps) => {
  return (
    <div>
      <Form<LoginInputType>
        schema={LoginInput}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await login({ email: values.email, password: values.password })
            props.onSuccess && props.onSuccess()
          } catch (error) {
            if (error.name === "AuthenticationError") {
              return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
            } else {
              return {
                [FORM_ERROR]:
                  "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
              }
            }
          }
        }}
      >
        <div className="flex flex-col column-center">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <Button>Login</Button>

          <p className="mt-4">
            Don't have an account? <TextLink href="/sign-up">Create one</TextLink>
          </p>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
