import GoogleButton from "@/components/google-button/GoogleButton";
import SignInForm from "@/components/sign-in-form/SignInForm";

export default async function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm />
      <div>or</div>
      <GoogleButton />
    </div>
  )
}