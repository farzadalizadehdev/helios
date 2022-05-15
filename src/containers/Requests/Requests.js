import { Table, Tag, Space } from "antd";
import { Link } from "react-router-dom";
const Requests = (props) => {
  const columns = [
    {
      title: "عنوان",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "وضعیت",
      dataIndex: "status",
      key: "status",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "طبقه",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "عملیات",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link to={"/indivisual"}>تکمیل اطلاعات {record.name}</Link>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      title: "نام پزشک",
      type: "پزشک",
      status: ["تکراری"],
    },
    {
      key: "2",
      title: "نام مرکز",
      type: "مرکز",
      status: ["", ""],
    },
    {
      key: "3",
      title: "نام پزشک",
      type: "پزشک",
      status: ["", ""],
    },
  ];
  return (
    <div className="p-8 bg-white rounded-md">
      <h1 className="mb-6">درخواست های من</h1>
      <Table bordered columns={columns} dataSource={data} />
    </div>
  );
};
export default Requests;
