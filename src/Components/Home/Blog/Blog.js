import "./blog.css";
import React from "react";
import wilson from "../../../images/willson.png";
import BlogPost from "../BlogPost/BlogPost";

const blogData = [
  {
    title: "The tooth cancer is taking a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "Two time brush in a day can keep you healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Sinthia",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "The tooth cancer is taking a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Abraham",
    authorImg: wilson,
    date: "23 April 2019",
  },
];

const Blog = () => {
  return (
    <section id="our-blog-section" className="my-5">
      <div className="container ">
        <div className="blog-head text-center ">
          <h5 style={{ color: "#1CC7C1" }} className="text-uppercase">
            Our Blog
          </h5>
          <h3>Form Our Blog News</h3>
        </div>
        <div style={{ marginTop: "100px" }}>
          {blogData.map((blog) => (
            <BlogPost key={blog.author} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
