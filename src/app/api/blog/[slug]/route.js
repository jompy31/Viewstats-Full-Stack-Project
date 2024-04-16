// src/app/api/blog/[slug]/route.js
import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    const post = await Post.findOne({ _id: slug }); // Cambia slug por _id
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};


export const PUT = async (request, { params, body }) => {
  const { postId } = params; 
  const { title, desc, userId } = body;

  try {
    connectToDb();

    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId }, 
      { title, desc, userId },
      { new: true }
    );

    return NextResponse.json(updatedPost);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update post!");
  }
};



export const DELETE = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    await Post.deleteOne({ _id: slug }); // Cambia slug por _id
    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};
