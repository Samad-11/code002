import PostCard from "@/components/PostCard";
import React from "react";

const page = () => {
  const posts = [
    {
      title: "sample title",
      localUrl: "this is sample url",
    },
    {
      title: "sample title",
      localUrl: "this is sample url",
    },
  ];
  return (
    <div className="flex ">
      {posts.map((post) => (
        <PostCard url={post.localUrl} title={post.title} key={post.localUrl} />
      ))}
    </div>
  );
};

export default page;
