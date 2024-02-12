import "./App.css";
import { Layout, Spin, theme } from "antd";
import Blog from "./components/Blog";
import { useBlogs } from "./useBlogs";
const { Header, Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { loading, blogList } = useBlogs();

  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f5f5f5",
          }}
        >
          <h1 style={{ paddingTop: "30px" }}>Blogs</h1>
        </Header>
        <Content style={{ padding: "40px 48px", height: "80vh" }}>
          <div
            style={{
              background: colorBgContainer,
              height: "100%",
              padding: 24,
              borderRadius: borderRadiusLG,
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            {loading ? (
              <Spin spinning={loading} fullscreen />
            ) : blogList?.length ? (
              blogList.map((blog) => {
                return <Blog key={blog.id} {...blog} />;
              })
            ) : (
              "No data available"
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Blog App ©{new Date().getFullYear()} Created by Dipak Shelke
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
