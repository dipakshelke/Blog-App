import "./App.css";
import { Button, Layout } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Routes, Route, useNavigate } from "react-router-dom";
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";
import { createContext, useContext, useState } from "react";
import ViewBlog from "./components/ViewBlog";
const { Header, Content, Footer } = Layout;

export const BlogContext = createContext([]);

// const list = [
//   {
//     id: 1,
//     title: "How to use Redux",
//     description: "lorem text",
//     image: "",
//   },
//   {
//     id: 1,
//     title: "How to use HTML",
//     description: "lorem text",
//     image: "",
//   },
// ];

function App() {
  const navigate = useNavigate();

  const [blogList, setBlockList] = useState([]);

  const onSubmit = (values) => {
    setBlockList((prev) => [...prev, { id: prev.length + 1, ...values }]);
  };

  return (
    <BlogContext.Provider value={{ blogList, onSubmit }}>
      <div className="App">
        <Layout>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f5f5f5",
              padding: "50px 48px 0px 48px",
              justifyContent: "space-between",
            }}
          >
            <h1>Blogs</h1>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              onClick={() => navigate("/create")}
            >
              Create New
            </Button>
          </Header>

          <Content style={{ padding: "40px 48px", minHeight: "70vh" }}>
            <Routes>
              <Route path="/home" element={<BlogList />} />
              <Route path="/create" element={<CreateBlog />} />
              <Route path="/blog/:id" element={<ViewBlog />} />
              <Route path="*" element={<BlogList />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Blog App ©{new Date().getFullYear()} Created by Dipak Shelke
          </Footer>
        </Layout>
      </div>
    </BlogContext.Provider>
  );
}

export default App;
