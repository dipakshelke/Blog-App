import React, { useContext } from "react";
import { Empty, Spin, theme } from "antd";

import Blog from "./Blog";
import { BlogContext } from "../App";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { blogList } = useContext(BlogContext);
  const navigate = useNavigate();

  const onClickBlog = (blog) => {
    console.log("blog", blog);
    navigate("/blog/" + blog.id, { state: blog });
  };

  return (
    <div
      style={{
        background: colorBgContainer,
        height: "inherit",
        padding: 24,
        borderRadius: borderRadiusLG,
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        minHeight: "inherit",
      }}
    >
      {blogList?.map((blog) => {
        return (
          <span onClick={() => onClickBlog(blog)} key={blog.id}>
            <Blog {...blog} />
          </span>
        );
      })}
      {!blogList?.length && (
        <Empty style={{ margin: "auto" }} description="No Blogs Available" />
      )}
    </div>
  );
};

export default BlogList;
