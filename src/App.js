import Layout from "./components/Layout/Layout";
import { ConfigProvider } from "antd";
import Auth from "./containers/Auth/Auth";

function App() {
  const isAuthenticated = true;
  ConfigProvider.config({
    theme: {
      primaryColor: "#24bba6",
    },
  });
  return (
    <ConfigProvider direction="rtl">
      {!isAuthenticated ? <Auth /> : <Layout />}
    </ConfigProvider>
  );
}

export default App;
