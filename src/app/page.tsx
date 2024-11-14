import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.hero}>
          <div className={styles.text}>
            <h1 className={styles.h1}>Welcome to Our Generative AI Blog</h1>
            <p className={styles.para}>Explore the fascinating world of generative AI with articles, insights, and updates on how artificial intelligence is transforming industries and daily life.</p>

            <h2 className={styles.h2}>Featured Articles:</h2>
            <ul>
              <li className={styles.li}>Understanding the Basics of Generative AI.</li>
              <li className={styles.li}>Top 5 Use Cases of AI in Creative Industries.</li>
              <li className={styles.li}>Ethics in AI: Challenges and Solutions.</li>
            </ul>
          </div>
          <div>
            <h1 className={styles.imagediv}>
              <Image className={styles.image} src="/images/Ai.avif" height={200} width={300} alt="image" />
            </h1>

          </div>
        </div>
      </div>
    </>
  );
}
