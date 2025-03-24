import { CheckOutlined, CloseOutlined, WhatsAppOutlined } from "@ant-design/icons";
import CustomHeading from "../../../common/CustomHeading";
import CustomTable from "../../../common/CustomTable";
import CustomSlect from "../../../common/CustomSelect";
import { Avatar, Button } from "antd";

const AdminOrer = () => {
  const dataSource = [
    {
      key: "1",
      orderID: "1234",
      title: "Burger",
      description: "10 Downing Street",
      customerName: "Rahul",
      status: "Pending",
      phoneNumber:"9898345679"
    },
  ];

  const columns = [
    {
      title: "OrderId",
      dataIndex: "orderID",
      key: "orderID",
      width:60

    },
    {
      title: "Product Image",
      dataIndex: "orderID",
      key: "orderID",
      align:"center",
      width:130,
      render:(text=>{
        return(
          <Avatar/>
        )
      })
    },
    

    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width:150
    },
    {
      title: "CustomerName",
      dataIndex: "customerName",
      key: "customerName",
      width:100

    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width:150

    },
    {
      title: "Accept/Reject",
      dataIndex: "accptRjct",
      key: "accptRjct",
      align: "center",
      width:100,
      render:()=>{
        return(
          <div className="flex gap-2  justify-center">
            <Button className={"!bg-acceptColor hover:!bg-acceptColor"}  type={"primary"} ><CheckOutlined /></Button>
            <Button className={"!bg-reject hover:!bg-reject"} type={"danger"} ><CloseOutlined style={{color:"white"}} /></Button>
          </div>
        )
        
      }
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      width:70,
      render: () => {
        return (
          <div className="flex gap-2  justify-center ">
            <CustomSlect
            className={"!w-[120px] !h-[30px]"}
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
    {
      title: "WhatsApp Message",
      dataIndex: "whatsApp",
      key: "whatsApp",
      align: "center",
      width:150,
      render:()=>{
        return(
          <div className="flex gap-2  justify-center">
            <Button   className="bg-acceptColor hover:!bg-acceptColor border-none" ><WhatsAppOutlined style={{color:"#fff"}} /></Button>
          </div>
        )
        
      }
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center py-3">
        <div>
          <CustomHeading level={4} value={"Your Orders"}/>
        </div>
      </div>

      <CustomTable scroll={{x:1200}} dataSource={dataSource} columns={columns} />
    </>
  );
};
export default AdminOrer;
