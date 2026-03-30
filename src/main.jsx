import React from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.jsx'
import './index.css'

AOS.init({ duration: 450, easing: 'ease-out', once: true })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
