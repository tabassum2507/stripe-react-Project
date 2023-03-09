import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubMenuOpen, location} = useGlobalContext();

  useEffect(() => {
    const submenu = container.current;
    const {center, bottom} = location;
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px` 

  }, [location])
   
  const container = useRef(null)
  return (
    <aside  className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>Submenu</aside>
  )
}

export default Submenu