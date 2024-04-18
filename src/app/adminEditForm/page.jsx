"use client";
import React, { useState, useEffect } from "react";
import { editPost } from "@/lib/action";
import styles from "./adminEditForm.module.css";

const AdminPostForm = () => {
  const [postData, setPostData] = useState({
    title: "",
    desc: "",
    slug: "",
    userId: "",
  });
  const [postId, setPostId] = useState(null); // Estado para almacenar el ID del post

  useEffect(() => {
    // Función para obtener el ID del URL
    const getPostIdFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get("id");
    };

    // Obtener el ID del URL
    const id = getPostIdFromUrl();
    if (id) {
      setPostId(id); // Establecer el ID del post si existe en el URL
    }
  }, []);

  useEffect(() => {
    // Si no hay ID en el URL, no realizar ninguna acción adicional
    if (!postId) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/blog`);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        // Buscar la publicación correspondiente al ID del URL
        const post = data.find((post) => post._id === postId);
        if (post) {
          setPostData({
            title: post.title,
            desc: post.desc,
            slug: post.slug,
            userId: post.userId, // Asignar userId del post encontrado
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [postId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.href = '/admin';
    try {
      const response = await editPost(postId, postData); // Pasar slug y postData a la función editPost
      
      if (response.error) {
        console.error(response.error);
      } else {
        console.log("Post editado exitosamente:", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Mostrar el formulario solo si existe un ID en el URL
  return (
    postId && (
      <form onSubmit={handleSubmit} className={styles.container}>
        <h1>Edit Post</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={postData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="slug"
          placeholder="Priority"
          value={postData.slug}
          onChange={handleInputChange}
        />
        <textarea
          name="desc"
          placeholder="Description"
          rows={10}
          value={postData.desc}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={() => console.log("Datos editados:", { ...postData, id: postId })}>Edit</button>
      </form>
    )
  );
};

export default AdminPostForm;
