import { Card,Button } from "antd";
const Dashboard = (props) => {
  return (
    <div>
      <div className="p-6 rounded-lg w-1/3 bg-gradient-to-r from-cyan-100 to-blue-100">
        <h3 className="text-lg">ثبت پزشک</h3>
        <p className="font-normal">نمایش پیام مناسب به کاربر</p>
        <Button className="mt-4" shape="round" size="middle" type="primary">ثبت پزشک</Button>
      </div>
    </div>
  );
};
export default Dashboard;
