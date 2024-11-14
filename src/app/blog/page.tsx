import React from 'react'
import Image from 'next/image'
import style from "./blog.module.css"

function Blog() {
    const blogPost = [
        { title: "How Generative AI is Transforming Digital Art", thumbnail: "/pubic/images/titleimg1.jpg" },
        { title: "Understanding the Basics of Neural Networks in Generative AI", thumbnaithumbnail: "/pubic/images/titleimg2.jpg" },
        { title: "Applications of AI in Music Composition and Sound Design", thumbnail: "/pubic/images/titleimg3.jpg" },
        { title: "Ethics in AI: The Balance Between Creation and Control", thumbnail: "/pubic/images/titleimg4.jpg" },
        { title: "Future Trends: What’s Next for Generative AI?", thumbnail: "/pubic/images/titleimg5.jpg" },
    ]
    return (
        <div>
            <section>
                <div className={style.banner}>
                    <Image className={style.img} src="/images/banner.jpg" height={300} width={500} alt='' />
                    <h1>Introduction:</h1>
                    <p>Our blog covers various topics related to Generative AI, including its technology, applications, ethical implications, and future possibilities. Browse our latest posts and discover how Generative AI is reshaping industries and inspiring innovation.</p>
                </div>

                <div>
                    <div className={style.section}>
                        <Image src="/images/titleimg3.jpg" height={250} width={400} alt='img'></Image>
                        <div className={style.text}>
                        <h3 className={style.heading}>Understanding the Basics of Neural Networks in Generative AI</h3>
                        <p>Dive into the fundamentals of neural networks and their role in Generative AI. This post covers how these networks mimic human brain functions to create original content, providing a foundation for understanding more complex AI models.</p>
                        </div>
                        
                    </div>

                    <div className={style.section}>
                        <Image src="/images/titleimg2.jpg" height={250} width={500} alt='img'></Image>
                        <div className={style.text}>
                        <h3 className={style.heading}>How Generative AI is Transforming Digital Art</h3>
                        <p>Discover how Generative AI is reshaping the world of digital art by enabling artists to create stunning visuals using algorithms. From unique patterns to complex designs, learn how AI-powered tools are expanding artistic possibilities.</p>
                        </div>
                        
                    </div>

                    <div className={style.section}>
                        <Image src="/images/titleimg1.jpg" height={250} width={400} alt='img'></Image>
                        <div className={style.text}>
                        <h3 className={style.heading}>Applications of AI in Music Composition and Sound Design</h3>
                        <p>Explore the impact of AI in music production, where algorithms assist in composing melodies, harmonies, and even complete tracks. See how sound designers and musicians use AI to push the boundaries of music and audio creativity.</p>
                        </div>
                        
                    </div>

                    <div className={style.section}>
                        <Image src="/images/titleimg4.jpg" height={250} width={400} alt='img'></Image>
                        <div className={style.text}>
                        <h3 className={style.heading}>Ethics in AI: The Balance Between Creation and Control</h3>
                        <p>As AI becomes more powerful, ethical considerations are essential. This article discusses the ethical challenges of Generative AI, including copyright, data privacy, and the balance between creativity and control.</p>
                        </div>
                        
                    </div>

                    <div className={style.section}>
                        <Image src="/images/titleimg5.jpg" height={250} width={400} alt='img'></Image>
                        <div className={style.text}>
                        <h3 className={style.heading}>Future Trends: What’s Next for Generative AI?</h3>
                        <p>What does the future hold for Generative AI? From advancements in AI creativity to applications across industries, this post explores upcoming trends and innovations that could shape the next generation of AI.</p>
                        </div>
                        
                    </div>


                </div>

                <p>Explore our collection of articles and insights on Generative AI! From the basics to advanced techniques, we cover a wide range of topics to keep you informed and inspired.</p>
            </section>
        </div>
    )
}

export default Blog
