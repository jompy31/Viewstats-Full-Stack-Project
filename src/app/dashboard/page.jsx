"use client";
import React, { useState, useEffect } from "react";
import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
import Link from "next/link";



const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/blog");
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
          
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
