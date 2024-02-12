import { useEffect, useState } from "react";

const list = [
  {
    id: 1,
    title: "How to use Redux",
    description: "lorem text",
    image: "",
  },
  {
    id: 1,
    title: "How to use HTML",
    description: "lorem text",
    image: "",
  },
];

export const useBlogs = () => {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState();

  const fetchBlogs = async () => {
    try {
      setLoading(true);
    //   const res = await fetch("/blogs");
    //   const data = await res.json();
      setBlogList(list);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log("list", blogList)

  return {
    loading,
    blogList,
  };
};
