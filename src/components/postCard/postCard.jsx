
import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.top}>
          {post.img && (
            <div className={styles.imgContainer}>
              <Image src={post.img} alt="" fill className={styles.img} />
            </div>
          )}
          <span className={styles.date}>{formatDate(post.createdAt)}</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.body}</p>
          <Link className={styles.link} href={`/adminEditForm?id=${post._id}`}>
             EDIT
            </Link>
          <br/>
            <Link className={styles.link} href={`/dashboard/${post._id}`}>
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
