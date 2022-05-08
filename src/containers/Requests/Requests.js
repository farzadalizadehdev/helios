import { Table, Tag, Space } from "antd";
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
      title: "نوع",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "عملیات",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      title: "John Brown",
      type: "پزشک",
      status: ["تکراری"],
    },
    {
      key: "2",
      title: "John Brown",
      type: "مرکز",
      status: ["", ""],
    },
    {
      key: "3",
      title: "John Brown",
      type: "پزشک",
      status: ["", ""],
    },
  ];
  return (
    <div>
      <h1 className="mb-6">درخواست های من</h1>
      <Table bordered columns={columns} dataSource={data} />
    </div>
  );
};
export default Requests;
