import Layout from "./containers/Layout/Layout";
import { ConfigProvider } from "antd";

function App() {
  ConfigProvider.config({
    theme: {
      primaryColor: '#13AFA8',
    },
  });
  return (
    <ConfigProvider direction="rtl">
      <Layout />
    </ConfigProvider>
  );
}

export default App;
