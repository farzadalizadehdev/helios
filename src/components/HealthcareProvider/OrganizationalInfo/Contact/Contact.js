import { Input, Select, DatePicker, Space } from "antd";
import { TeamOutlined } from "@ant-design/icons";

const Contact = (props) => {
  const { Option } = Select;
  return (
    <section className="flex flex-col p-8 bg-white rounded-md">
      <h1 className="flex items-center mb-8">
        <TeamOutlined size={`large`} className="ml-2" />
        اطلاعات افراد شاغل در مرکز
      </h1>
      <div className="flex items-center justify-start">
        <form className="flex flex-wrap justify-start">
          <div className="w-64 mb-6 ml-6">
            <Input size="large" disabled placeholder="نام" />
          </div>
          <div className="w-64 mb-6 ml-6">
            <Input size="large" disabled placeholder="نام و نام خانوادگی" />
          </div>
          <div className="w-64 mb-6 ml-6">
            <Select
              size="large"
              style={{ width: "100%" }}
              showSearch
              placeholder="هدف"
              optionFilterProp="children"
              // onChange={onChange}
              // onSearch={onSearch}
              //   filterOption={(input, option) =>
              //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              //   }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </div>
          <div className="w-64 mb-6 ml-6">
            <Input size="large" disabled placeholder="موبایل" />
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

export default Contact;
