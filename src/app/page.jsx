import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Jean Pierre Barnett - Full Stack Developer.</h1>
        <p className={styles.desc}>
          Hi there! I'm Jean Pierre Barnett, a passionate Full Stack Developer with a strong background in software engineering and electronics. With over 6 years of experience, I've immersed myself in a wide range of programming languages, frameworks, and technologies to create innovative web and mobile applications that delight users and drive business success.
          <br/><br/>
          My journey into the world of technology began with a deep dive into Java, Python, C++, Visual Studios, and R. From there, I've expanded my expertise to include modern web development tools such as javascript, vue.js, React.js, next.js, Django, and Node.js,Java, Python, TypeScript, bootstrap, taildwindcss, as well as mobile app frameworks like React Native. I'm also well-versed in database management using SQL and MongoDB, ensuring efficient data storage and retrieval for scalable applications.
          <br/><br/>
          Beyond coding, I thrive on solving complex problems and optimizing processes. My experience at Intel and UST Global has equipped me with strong project management skills, where I've led cross-functional teams in delivering high-impact solutions. I'm adept at leveraging automation tools like Python, Selenium, and Kubernetes to streamline workflows and boost productivity.
          <br/><br/>
          Strong background in Big Data: Hands-on experience with Big Data technologies and methodologies.
          <br/><br/>
          Experience with major cloud providers and containerization: Extensively worked with AWS, GCP, Azure, Docker, and Kubernetes.
          <br/><br/>
          I'm constantly learning and adapting to new technologies, having completed courses from renowned institutions like Harvard and Stanford in areas such as machine learning, artificial intelligence, and cloud computing. My goal is to leverage my skills and expertise to drive innovation and make a meaningful impact in the world of technology.
        </p>

        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.button}>View Portfolio</button>
          </Link>
          <Link href="/contact">
            <button className={styles.button}>Contact</button>
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
