import React from "react"
import worldIcon from "../assets/earthiconImage24px.svg"

const Navbar = () => {
  return (
    <nav className="navigation">
      <img src={worldIcon} />
      <p>my travel journal.</p>
    </nav>
  )
}

export default Navbar