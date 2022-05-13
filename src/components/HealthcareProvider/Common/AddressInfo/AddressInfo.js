import { Input, Select } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

const AddressInfo = (props) => {
  const { Option } = Select;

  return (
    <section className="flex flex-col p-8 mb-6 bg-white rounded-md">
      <div>
        <h1 className="flex items-center mb-8">
          <EnvironmentOutlined className="ml-2" />
          اطلاعات آدرس
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
            <Select
              size="large"
              style={{ width: "100%" }}
              showSearch
              placeholder="انتخاب استان"
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
              placeholder="انتخاب شهر"
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
            <Input size="large" placeholder="کد پستی" />
          </div>
          <div className="w-3/5 mb-6 ml-6">
            <Input size="large" placeholder="آدرس کامل" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddressInfo;
