import React, { useState } from 'react'
import './SignInForm.css'

function validateEmailGmail(value) {
  const v = value.trim()
  if (!v) return 'Email is required.'
  if (!v.includes('@gmail.com')) return 'Email must include @gmail.com.'
  return ''
}

function validatePassword(value) {
  if (!value) return 'Password is required.'
  if (value.length < 8 || value.length > 20) return 'Password must be 8–20 characters.'
  if (!/^[A-Z]/.test(value)) return 'Password must start with a capital letter.'
  if (!/[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?`~]/.test(value)) {
    return 'Password must include a special character.'
  }
  return ''
}

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '' })

  function handleSubmit(e) {
    e.preventDefault()
    const next = {
      email: validateEmailGmail(email),
      password: validatePassword(password),
    }
    setErrors(next)
    if (next.email || next.password) return
  
  }

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <p className="sign-in-form__or">or sign in with email</p>
      <div className="sign-in-form__field">
        <label htmlFor="email" className="sign-in-form__label">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="sign-in-form__input"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() =>
            setErrors((prev) => ({ ...prev, email: validateEmailGmail(email) }))
          }
          autoComplete="email"
          data-aos="fade-up"
        />
        {errors.email ? <p className="sign-in-form__error">{errors.email}</p> : null}
      </div>
      <div className="sign-in-form__field">
        <label htmlFor="password" className="sign-in-form__label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="sign-in-form__input"
           placeholder="........."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() =>
            setErrors((prev) => ({ ...prev, password: validatePassword(password) }))
          }
          autoComplete="current-password"
        />
        {errors.password ? (
          <p className="sign-in-form__error">{errors.password}</p>
        ) : null}
        <a href="#" className="sign-in-form__forgot-link">
          Forgot password?
        </a>
      </div>
      <button type="submit" className="sign-in-form__submit">
        Sign in
      </button>
    </form>
  )
}

export default SignInForm
