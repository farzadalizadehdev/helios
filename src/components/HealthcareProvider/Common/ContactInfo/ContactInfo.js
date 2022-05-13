import { Input, Select } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

const ContactInfo = (props) => {
  const { Option } = Select;
  return (
    <section className="flex flex-col p-8 bg-white rounded-md">
      <div>
        <h1 className="flex items-center mb-8">
          <PhoneOutlined className="ml-2" />
          اطلاعات تماس
        </h1>
      </div>
      <div className="flex items-center justify-start w-full">
        <form className="flex flex-wrap justify-start">
          <div className="w-64 mb-6 ml-6">
            <Select
              size="large"
              style={{ width: "100%" }}
              showSearch
              placeholder="انتخاب کاربری"
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
            <Input size="large" placeholder="شماره همراه" />
          </div>
          <div className="w-64 mb-6 ml-6">
            <Input size="large" placeholder="شماره ثابت" />
          </div>
          <div className="w-64 mb-6 ml-6">
            <Input size="large" placeholder="ایمیل" />
          </div>
          <div className="w-64 mb-6 ml-6">
            <Input size="large" placeholder="فکس" />
          </div>
          <div className="w-64 mb-6 ml-6">
            <Input size="large" placeholder="لینک شبکه های اجتماعی" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactInfo;
