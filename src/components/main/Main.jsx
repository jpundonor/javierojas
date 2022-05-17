import React from 'react'
import { About } from '../about/About'
import { Contact } from '../contact/Contact'
import { Experience } from '../experience/Experience'
import { Home } from '../home/Home'

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
