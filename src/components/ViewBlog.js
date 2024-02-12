import React from "react";
import { useLocation } from "react-router-dom";

const ViewBlog = () => {
  const {
    state: { title, description },
  } = useLocation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",
        gap: "40px",
        background: "#fff",
        padding: "40px",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ margin: "auto" }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ViewBlog;
