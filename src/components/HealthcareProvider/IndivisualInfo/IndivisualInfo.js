import { useState } from "react";
import { Button } from "antd";
import Medical from "./Medical/Medical";
import Physician from "./Physician/Physician";
import ContactInfo from "../Common/ContactInfo/ContactInfo";
import AddressInfo from "../Common/AddressInfo/AddressInfo";

const IndivisualInfo = (props) => {
  const [activeForm, setActiveForm] = useState(1);
  const [formData, setFormData] = useState({
    physician:[],
    medical:[]
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setActiveForm(2);
    setFormData({

    })
    console.log("submit");
  };
  return (
    <>
      <section hidden={activeForm !== 1}>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-wrap justify-start"
        >
          <Physician />
          <Medical />
          <Button
            // onClick={() => setActiveForm(2)}
            className="mt-6 mr-8"
            shape="round"
            size="middle"
            type="primary"
            htmlType="submit"
          >
            مرحله بعد
          </Button>
        </form>
      </section>
      <section hidden={activeForm !== 2}>
        <AddressInfo />
        <ContactInfo />
        <Button
          // onClick={()=>setActiveForm(2)}
          className="mt-6 mr-8"
          shape="round"
          size="middle"
          type="primary"
        >
          ثبت نهایی
        </Button>
        <Button
          onClick={() => setActiveForm(1)}
          className="mt-6 mr-4"
          shape="round"
          size="middle"
          type="text"
        >
          مرحله قبل
        </Button>
      </section>
    </>
  );
};
export default IndivisualInfo;
