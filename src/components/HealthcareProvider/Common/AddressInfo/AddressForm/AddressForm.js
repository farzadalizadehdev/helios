import React from "react";
import { Input, Select } from "antd";

const AddressForm = () => {
  const { Option } = Select;

  return (
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
  );
};

export default AddressForm;
