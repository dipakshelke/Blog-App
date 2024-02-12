import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const Blog = ({ title, description }) => (
  <Card
    hoverable
    style={{ width: 280, height: "max-content" }}
    cover={
      <img
        alt="blog"
        src="https://thumbs.dreamstime.com/z/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg?ct=jpeg"
      />
    }
  >
    <Meta title={title} description={description} />
  </Card>
);

export default Blog;
