import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CustomButton from "../../../common/CustomButton";
import CustomHeading from "../../../common/CustomHeading";
import CustomTable from "../../../common/CustomTable";
import CustomSlect from "../../../common/CustomSelect";

const AdminOrer = () => {
  const dataSource = [
    {
      key: "1",
      orderID: "1234",
      title: "Burger",
      description: "10 Downing Street",
      customerName: "Rahul",
      status: "Pending",
    },
  ];

  const columns = [
    {
      title: "OrderId",
      dataIndex: "orderID",
      key: "orderID",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "CustomerName",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Accept/Reject",
      dataIndex: "accptRjct",
      key: "accptRjct",
      align: "center",
      render:()=>{
        return(
          <div className="flex gap-2  justify-center">
            <CustomButton className={"!bg-green hover:!bg-green"} value={"Accept"} type={"primary"} />
            <CustomButton className={"bg-red hover:!bg-red"} value={"Reject"} type={"danger"} />
          </div>
        )
        
      }
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: () => {
        return (
          <div className="flex gap-2  justify-center">
            <CustomSlect
              handleChange={() => {handleChange}}
              options={[
                { label: "new", value: "New" },
                { label: "ongoing", value: "Ongoing" },
                { label: "completed", value: "Completed" },
              ]}
            />
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center py-3">
        <div>
          <CustomHeading level={4} value={"Your Orders"}/>
        </div>
      </div>

      <CustomTable dataSource={dataSource} columns={columns} />
    </>
  );
};
export default AdminOrer;
