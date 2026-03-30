import React from 'react'
import SignInHeader from '../SignInHeader/SignInHeader'
import SocialSignIn from '../SocialSignIn/SocialSignIn'
import SignInForm from '../SignInForm/SignInForm'
import SignUpLink from '../SignUpLink/SignUpLink'
import './SignInCard.css'

function SignInCard() {
  return (
    <div className="sign-in-card">
      <SignInHeader />
      <SocialSignIn />
      <SignInForm />
      <SignUpLink />
    </div>
  )
}

export default SignInCard
