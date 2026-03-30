import React from 'react'
import './SignUpLink.css'

function SignUpLink() {
  return (
    <p className="sign-up-link">
      Don&apos;t have an account?{' '}
      <a href="#" className="sign-up-link__anchor">
        Sign up
      </a>
    </p>
  )
}

export default SignUpLink
