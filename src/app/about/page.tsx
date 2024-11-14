import React from 'react'
import style from "./about.module.css"
import Image from 'next/image'

function About() {
    return (
        <div className={style.hero}>
            <div className={style.section}>
                <div className={style.textarea}>
                    <h1 className={style.heading}>About Generative AI:</h1>
                    <p className={style.text}>Generative AI is a branch of artificial intelligence that focuses on creating models and algorithms capable of generating original content, from stunning artworks to insightful texts, and even music and code. This blog is dedicated to exploring and simplifying these technologies, making them accessible to all</p>
                </div>
                <div className={style.image}>
                    <Image src="/images/who.avif" height={330} width={400} alt="" />
                </div>
            </div>
            <div className={style.section}>
                <div className={style.image}>
                    <Image src="/images/our.avif" height={330} width={400} alt='image'/>
                </div>
                <div className={style.textarea}>
                    <h1 className={style.heading}>About the Blog:</h1>
                    <p className={style.text}>Our goal is to demystify the world of Generative AI, providing clear explanations, tutorials, and updates on the latest trends. We want to spark curiosity and inspire creativity, helping you understand the potential of AI in transforming various industries.</p>

                </div></div>
            <div className={style.section}>
        
                <div className={style.textarea}>
                    <h1 className={style.heading}>About the Author</h1>
                    <p className={style.text}>Hi! I'm Muhammad Uzair, a tech enthusiast passionate about AI and its applications in creativity. Through this blog, I aim to bridge the gap between complex AI concepts and creative minds.</p>

                </div>
                <div className={style.image}>
                    <Image src="/images/team.avif" height={330} width={400} alt='image'/>
                </div>
            </div>
        </div>

    )
}

export default About
