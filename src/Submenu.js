import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubMenuOpen} = useGlobalContext();
   
  const container = useRef(null)
  return (
    <aside  className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`}>Submenu</aside>
  )
}

export default Submenu