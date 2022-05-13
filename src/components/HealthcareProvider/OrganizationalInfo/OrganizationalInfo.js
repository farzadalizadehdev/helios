import React from "react";
import { useState } from "react";
import { Button } from "antd";
import ContactInfo from "../Common/ContactInfo/ContactInfo";
import AddressInfo from "../Common/AddressInfo/AddressInfo";
import Contact from "./Contact/Contact";
import Organization from "./Organization/Organization";

const OrganizationalInfo = (props) => {
  const [activeForm, setActiveForm] = useState(1);
  return (
    <>
      <section hidden={activeForm !== 1}>
        <Organization />
        <Contact />
        <Button
          onClick={() => setActiveForm(2)}
          className="mt-6 mr-8"
          shape="round"
          size="middle"
          type="primary"
        >
          مرحله بعد
        </Button>
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
export default OrganizationalInfo;
