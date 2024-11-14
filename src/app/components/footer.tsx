import React from 'react';
import style from "./footer.module.css";
import Link from 'next/link';

function Footer() {
  return (
    <div className={style.footer}>
      <h4>About Generative AI Blog</h4>
      <p>Generative AI Blog is dedicated to providing the latest news, insights, and tutorials on generative AI and technology trends. Join us as we explore the world of AI and its endless possibilities.</p>
      <div className={style.main}>
        <div className={style.section}>
          <h5>Quick Links</h5>
          <ul>
            <li><Link className={style.link} href="/">Home</Link></li>
            <li><Link className={style.link} href="/about">About</Link></li>
            <li><Link className={style.link} href="/blog">Blog</Link></li>
            <li><Link className={style.link} href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={style.section}>
          <h5>Subscribe to Our Newsletter</h5>
          <p>Stay updated with our latest articles and insights directly in your inbox. Enter your email and subscribe to receive updates.</p>
        </div>
        <div className={style.section}>
          <h5>Connect with Us</h5>
          <p>Email: uzairshaikh346@gmail.com</p>
          <p>Follow us on:</p>
          <ul className={style.footerIcons}>
            <li><Link className={style.link} href="https://www.facebook.com/qureshi.bro.9">Facebook</Link></li>
            <li><Link className={style.link} href="https://www.linkedin.com/in/muhammad-uzair-2526732a6/">LinkedIn</Link></li>
            <li><Link className={style.link} href="https://www.instagram.com/uzzi_shyk/">Instagram</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
