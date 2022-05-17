import { Button, Input, Select } from "antd";
import { EnvironmentOutlined, PlusCircleFilled } from "@ant-design/icons";
import AddressForm from "./AddressForm/AddressForm";
import { useState } from "react";
const AddressInfo = (props) => {
  const [component, setComponent] = useState(["firstComponent"]);
  const handleAddItem = () => {
    setComponent([...component, "addedComponent"]);
  };
  return (
    <section className="flex flex-col p-8 mb-6 bg-white rounded-md">
      <div className="flex items-center justify-between w-full mb-8">
        <div>
          <h1 className="flex items-center m-0">
            <EnvironmentOutlined className="ml-2" />
            اطلاعات آدرس
          </h1>
        </div>
        <Button
          onClick={handleAddItem}
          className="flex items-center"
          shape="round"
          size="middle"
          type="default"
        >
          <PlusCircleFilled />
          افزودن موارد بیشتر
        </Button>
      </div>
      {component.map((item, key) => {
        return (
          <div key={key}>
            <AddressForm />
          </div>
        );
      })}
    </section>
  );
};

export default AddressInfo;
