import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CustomButton from "../../../common/CustomButton";
import CustomHeading from "../../../common/CustomHeading";
import CustomTable from "../../../common/CustomTable";
import { Avatar } from "antd";
import CustomModal from "../../../common/CustomModal";
import { useState } from "react";
import AddMenuForm from "./MenuForm";

const MenuItems=()=>{
  const [menuModal, setMenuModal] = useState(false);
    const dataSource = [
        {
          key: '1',
          menuImage:<Avatar/>,
          title: "Burger",
          menutype:"breakfast",
          description: '10 Downing Street',
          status: 'Active',
        }
      
      ];
      
      const columns = [
        {
          title: 'Menu Image',
          dataIndex: 'menuImage',
          key: 'menuImage',
          width:130,
          align:"center"
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'MenuType',
          dataIndex: 'menutype',
          key: 'menutype',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          },
          {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            align: 'center',
            render:()=>{
                return(
                    <div className="flex gap-2  justify-center">
                        <DeleteOutlined style={{fontSize:"16px"}}/>
                        <EditOutlined  style={{fontSize:"16px"}}/>
                    </div>
                )
            }
          },
      ];
    return(
        <>
        <div className="flex justify-between items-center py-3">
            <div><CustomHeading level={4} value={"Menu Items"}/></div>
            <div><CustomButton onclick={()=>setMenuModal(true)} value={"Add Menu"}/> </div>
        </div>
         <CustomTable dataSource={dataSource} columns={columns}/>
        <CustomModal  footer={false} modalBody={<AddMenuForm/>} value={"Add Menu"}  setOpen={setMenuModal} open={menuModal}/>
        </>
    )
}
export default MenuItems;