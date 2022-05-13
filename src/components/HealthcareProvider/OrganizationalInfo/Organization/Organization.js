import { Input, Select, DatePicker, Space } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const Organization = (props) => {
  const { Option } = Select;
  return (
    <section className="flex flex-col p-8 mb-6 bg-white rounded-md">
      <h1 className="flex items-center mb-8">
        <HomeOutlined size={`large`} className="ml-2" />
        اطلاعات مرکز ارائه دهنده خدمت
      </h1>
      <div className="flex items-center justify-start">
        <form className="flex flex-wrap justify-start">
          <div className="w-64 mb-6 ml-6">
            <Input size="large" disabled placeholder="شناسه سیام مرکز" />
          </div>
          <div className="w-64 mb-6 ml-6">
            <Input size="large" disabled placeholder="نام سازمان" />
          </div>
          <div className="w-64 mb-6 ml-6">
            <Input size="large" placeholder="نام مخفف سازمان" />
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
              placeholder="نوع فعالیت"
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
            <Input size="large" placeholder="شناسه صدور مجوز مرکز پزشکی" />
          </div>
          <div className="w-64 ml-6">
            <Space style={{ width: "100%" }} direction="vertical">
              <DatePicker
                placeholder="تاریخ شروع"
                size="large"
                style={{ width: "100%" }}

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

                // onChange={onChange}
              />
            </Space>
          </div>
          <div className="w-64 mb-6 ml-6">
            <Input size="large" placeholder="شناسه صدور پروانه موسسات پزشکی " />
          </div>
          <div className="w-64 ml-6">
            <Space style={{ width: "100%" }} direction="vertical">
              <DatePicker
                placeholder="تاریخ شروع"
                size="large"
                style={{ width: "100%" }}

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

                // onChange={onChange}
              />
            </Space>
          </div>
          <div className="w-64 mb-6 ml-6">
            <Select
              size="large"
              style={{ width: "100%" }}
              showSearch
              placeholder="نوع سازمان"
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
              placeholder="نوع وابستگی"
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
              placeholder="دانشگاه ناظر"
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
        </form>
      </div>
    </section>
  );
};

export default Organization;
