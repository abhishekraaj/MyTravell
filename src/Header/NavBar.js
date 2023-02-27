import React, { useState } from "react";
import Style from './NavBar.module.css'
import { SiYourtraveldottv } from 'react-icons/si'
import { TbWorld } from 'react-icons/tb'
import { FaBars } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'



export default function NavBar() {
  const [showDialog, setShowDialog] = useState(false)
  const [dialog, setDialog] = useState(false)



  function handleuser() {
    if (showDialog == false) {
      setShowDialog(true)
    } else {
      setShowDialog(false)
    }
  }

  function handleButtonClick() {
    if (dialog == false) {
      setDialog(true)
    } else {
      setDialog(false)
    }
  }

  return (
    <div className={Style.mainbox}>
      <div className={Style.logo}>
        <img src="https://imgur.com/ncVQWow.png" height="90vh" />
        <b><Link to="/">my travell</Link></b>

      </div>
      <div className={Style.middlebox}>

        <b className={Style.middleweek}>Anywhere</b>
        <span className={Style.middleweeks}> <b>Any week</b></span>

        <span className={Style.middleweek}>
          <b >Any guests</b>
          <BiSearch className={Style.search} />
        </span>
      </div>
      <div>

        <span className={Style.yourhome}>
          <Link to="/host/home">
            <b>Your Home</b>
          </Link>

        </span>
        {dialog ? <div className={Style.dialog}></div> : ""}
        <TbWorld className={Style.earth} onClick={handleButtonClick} />

        {showDialog ? <div className={Style.userbox}>
          <div className={Style.userbox1}>
            <p>Sign up</p>
            <p>Log in</p>
            <p>Airbnb your home</p>
            <p>Host an experience</p>
            <p>Help</p>
          </div></div> : ""}
        <span className={Style.rightbox} onClick={handleuser}>
          <FaBars className={Style.rightbar} />
          <FaUserCircle className={Style.rightuser} />
        </span>

      </div>
    </div>

  )
}