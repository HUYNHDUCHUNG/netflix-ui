import React, { useState } from 'react'
import NavBar from '../../components/Navbar'
function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false)
  window.scroll = () => {
    setIsScrolled(window.ScrollY === 0 ? false : true)
    return () => (window.scroll = null)
  }

  return (
    <div>
      <NavBar isScrolled={isScrolled} />
    </div>
  )
}

export default Netflix
