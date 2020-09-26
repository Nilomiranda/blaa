import React from "react"
import { Form, FORM_ERROR } from "app/components/Form"
import signup from "app/auth/mutations/signup"
import { SignupInput, SignupInputType } from "app/auth/validations"
import Input from "../../components/Input"
import Button from "app/components/Button"
import TextLink from "app/components/TextLink"

type LoginFormProps = {
  onSuccess?: () => void
}

export const SignUpForm = (props: LoginFormProps) => {
  return (
    <div>
      <Form<SignupInputType>
        schema={SignupInput}
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={async ({ email, password, confirmPassword }) => {
          try {
            await signup({ email, password, confirmPassword })
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
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="Password" name="password" />
          <Input type="password" placeholder="Confirm your password" name="confirmPassword" />

          <Button>Login</Button>

          <p className="mt-4">
            Already have an account? <TextLink href="/login">Log in</TextLink>
          </p>
        </div>
      </Form>
    </div>
  )
}

export default SignUpForm
