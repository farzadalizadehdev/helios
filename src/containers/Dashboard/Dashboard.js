import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
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
      <div className="flex">
        <div className="w-1/3 p-6 mx-4 rounded-lg bg-gradient-to-r from-cyan-100 to-sky-100">
          <h3 className="text-lg">ثبت پزشک</h3>
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
        <div className="w-1/3 p-6 mx-4 rounded-lg bg-gradient-to-r from-rose-100 to-pink-100">
          <h3 className="text-lg">ثبت مرکز</h3>
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
        <div className="w-1/3 p-6 mx-4 rounded-lg bg-gradient-to-r from-orange-100 to-amber-100">
          <h3 className="text-lg">درخواست های من</h3>
          <p className="font-normal">نمایش پیام مناسب به کاربر</p>
          <Button className="mt-4" shape="round" size="middle" type="primary">
            <Link to={`/requests`}>مشاهده</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
