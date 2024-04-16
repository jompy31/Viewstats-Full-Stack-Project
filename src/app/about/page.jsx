import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Jean Pierre Barnett</h2>
        <h1 className={styles.title}>
          Innovative Solutions in Software Development & Electronics Engineering
        </h1>
        <p className={styles.desc}>
          As a seasoned professional with over 6 years of experience, Jean Pierre Barnett is committed to creating digital innovations that push boundaries and redefine standards. His expertise spans across various domains, from software development to electronics engineering, where he excels in delivering solutions that are not just bigger, bolder, and braver, but also meticulously crafted for precision and impact.
        </p>
        <p className={styles.desc}>
          Some of the notable websites Jean Pierre has created include:
          <ul>
            <li><a href="https://www.twowager.com/" target="_blank" rel="noopener noreferrer">TwoWager</a>: A website that redirects clients based on their needs.</li>
            <li><a href="https://abcupon.com/#/" target="_blank" rel="noopener noreferrer">ABCupon</a>: A virtual showcase of products with ecommerce features, classifieds, job postings, and more.</li>
          </ul>
        </p>
        <div className={styles.boxes}>
        <div className={styles.box}>
            <h1>6+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>62+</h1>
            <p>Team Leadership</p>
          </div>
          <div className={styles.box}>
            <h1>+16</h1>
            <p>Operations Automated Annually</p>
          </div>
          <div className={styles.box}>
            <h1>720+</h1>
            <p>Hours Saved Through Automation</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
