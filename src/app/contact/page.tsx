import React from 'react'
import style from "./contact.module.css"

function Contact() {
  return (
    <div className={style.main}>
      <div className={style.form}>
        
        <h1>Contact us</h1>
        <p>Name :</p>
        <input type="text" placeholder='Enter your name' />
        <p>Email :</p>
        <input type="text" placeholder='Enter your email' />
        <p>Message :</p>
        <textarea name="message" id="message"></textarea>
        <div>
          <button className={style.button}>Send</button>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
