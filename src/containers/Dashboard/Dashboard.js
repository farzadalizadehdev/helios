import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
import physicianImg from "../../assets/images/physician.svg";
import organizationImg from "../../assets/images/organization.svg";
import requestsImg from "../../assets/images/requests.svg";

const Dashboard = (props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [modalTitle, setModalTitle] = useState("Title of the modal");

  const DoctorRegistration = () => {
    setVisible(true);
    setModalTitle("ثبت پزشک");
    setModalText("نمایش پیام مناسب هنگام ثبت پزشک");
  };
  const clinicRegistration = () => {
    setVisible(true);
    setModalTitle("ثبت مرکز");
    setModalText("نمایش پیام مناسب هنگام ثبت مرکز");
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <Modal
        title={modalTitle}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="ثبت"
        cancelText="انصراف"
        cancelButtonProps={{ shape: "round" }}
        okButtonProps={{ shape: "round" }}
      >
        <p>{modalText}</p>
      </Modal>
      <div className="flex items-start h-screen py-4 mb-8 bg-white rounded-md">
        <div className="flex items-center justify-between w-1/3 p-6 mx-4 rounded-lg bg-gradient-to-r from-teal-50 to-teal-100">
          <div>
            <h3 className="text-lg bold-bold">ثبت پزشک</h3>
            <p className="font-normal">نمایش پیام مناسب به کاربر</p>
            <Button
              onClick={DoctorRegistration}
              className="mt-4"
              shape="round"
              size="middle"
              type="primary"
            >
              ثبت پزشک
            </Button>
          </div>
          <img className="" src={physicianImg} />
        </div>
        <div className="flex items-center justify-between w-1/3 p-6 mx-4 rounded-lg bg-gradient-to-r from-sky-50 to-sky-100">
          <div>
            <h3 className="text-lg bold-bold">ثبت مرکز</h3>
            <p className="font-normal">نمایش پیام مناسب به کاربر</p>
            <Button
              onClick={clinicRegistration}
              className="mt-4"
              shape="round"
              size="middle"
              type="primary"
            >
              ثبت مرکز
            </Button>
          </div>
          <img className="" src={organizationImg} />
        </div>
        <div className="flex items-center justify-between w-1/3 p-6 mx-4 rounded-lg bg-gradient-to-r from-violet-50 to-violet-100">
          <div>
            <h3 className="text-lg bold-bold">درخواست های من</h3>
            <p className="font-normal">نمایش پیام مناسب به کاربر</p>
            <Button className="mt-4" shape="round" size="middle" type="primary">
              <Link to={`/requests`}>مشاهده</Link>
            </Button>
          </div>
          <img className="" src={requestsImg} />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
