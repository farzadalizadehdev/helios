import Layout from "./components/Layout/Layout";
import { ConfigProvider } from "antd";

function App() {
  ConfigProvider.config({
    theme: {
      primaryColor: '#24bba6',
    },
  });
  return (
    <ConfigProvider direction="rtl">
      <Layout />
    </ConfigProvider>
  );
}

export default App;
