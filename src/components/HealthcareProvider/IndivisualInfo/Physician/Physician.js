import { Input, Select, DatePicker, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Physician = (props) => {
  const { Option } = Select;
  return (
    <section className="flex flex-col p-8 mb-6 bg-white rounded-md">
      <h1 className="flex items-center mb-8">
        <UserOutlined className="ml-2" />
        اطلاعات پزشک
      </h1>
      <div className="flex items-center justify-start w-full">
        <div className="flex flex-col items-center justify-center w-1/5">
          <Avatar size={120} icon={<UserOutlined />} />
          <h1 className="mt-4">نام و نام خانوادگی</h1>
        </div>
        <div className="flex flex-wrap justify-start w-3/4">
          <div className="w-64 mb-6 ml-6">
            <Input required size="large"  placeholder="شناسه سیام پزشک" />
          </div>
          <div className="w-64 mb-6 ml-6">
            <Input required size="large"  placeholder="کد ملی" />
          </div>
          <div className="w-64 mb-6 ml-6">
            <Select
              size="large"
              style={{ width: "100%" }}
              showSearch
              placeholder="سطح تخصص"
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
            <Select
              size="large"
              style={{ width: "100%" }}
              showSearch
              placeholder="نوع تخصص"
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
            <Select
              size="large"
              style={{ width: "100%" }}
              showSearch
              placeholder="جنسیت"
              optionFilterProp="children"
              // onChange={onChange}
              // onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </div>
          <div className="w-64 ml-6">
            <Space style={{ width: "100%" }} direction="vertical">
              <DatePicker
                size="large"
                style={{ width: "100%" }}
                // onChange={onChange}
              />
            </Space>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Physician;
