import React from 'react'
import { About } from './About'
import { Contact } from './Contact'
import { Experience } from './Experience'
import { Home } from './Home'

export const Main = () => {
  return (
    <div className="main__container">
        <Home />
        <About />
        <Experience />
        <Contact />
    </div>
  )
}
