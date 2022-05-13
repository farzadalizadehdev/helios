import { Input, DatePicker, Space } from "antd";
import { AuditOutlined } from "@ant-design/icons";

const Medical = (props) => {
  return (
    <section className="flex flex-col p-8 bg-white rounded-md">
      <h1 className="flex items-center mb-8">
        <AuditOutlined size={`large`} className="ml-2" />
        اطلاعات نظام پزشکی
      </h1>
      <div className="flex items-center justify-start">
        <form className="flex flex-wrap justify-start">
          <div className="w-64 mb-6 ml-6">
            <Input size="large" disabled placeholder="شماره نظام پزشکی" />
          </div>
          <div className="w-64 mb-6 ml-6">
            <Input size="large" disabled placeholder="شهرهای مجاز طبابت" />
          </div>
          <div className="w-64 mb-6 ml-6">
            <Input size="large" disabled placeholder="مقطع تحصیلی" />
          </div>
          <div className="w-64 ml-6">
            <Space style={{ width: "100%" }} direction="vertical">
              <DatePicker
                placeholder="تاریخ شروع"
                size="large"
                style={{ width: "100%" }}
                disabled
                // onChange={onChange}
              />
            </Space>
          </div>
          <div className="w-64 ml-6">
            <Space style={{ width: "100%" }} direction="vertical">
              <DatePicker
                placeholder="تاریخ پایان"
                size="large"
                style={{ width: "100%" }}
                disabled
                // onChange={onChange}
              />
            </Space>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Medical;
