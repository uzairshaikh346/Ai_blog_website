import style from "./nav.module.css"

import React from 'react'
import Link from "next/link"

function Nav() {
  return (
    <div className={style.header}>
      <ul className={style.ul}>
        <li><Link className={style.link} href="/">Home</Link></li>
        <li><Link className={style.link}  href="/blog">Blog</Link></li>
        <li><Link className={style.link}  href="/about">About</Link></li>
        <li><Link className={style.link}  href="/contact">Contact</Link></li>
        
        </ul>
    </div>
  )
}

export default Nav
