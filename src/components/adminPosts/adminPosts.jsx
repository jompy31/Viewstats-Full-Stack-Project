import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost, editPost } from "@/lib/action";
import Link from "next/link";

const AdminPosts = async () => {
  const posts = await getPosts();

  
  return (
    <div className={styles.container}>
      <h1>Todo App</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <Link href={`/adminEditForm?id=${post._id}`}>
           Edit
          </Link>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
