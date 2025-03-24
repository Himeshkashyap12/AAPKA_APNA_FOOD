import { Col, Input, Row } from "antd";
import CustomInput from "../../../common/CustomInput";
import TextArea from "antd/es/input/TextArea";
import CustomButton from "../../../common/CustomButton";
import CustomSlect from "../../../common/CustomSelect";
import { useState } from "react";
import CustomText from "../../../common/CustomText";
import { PlusOutlined } from "@ant-design/icons";
import CustomModal from "../../../common/CustomModal";
import AddCategory from "./AddCategory";

const AddMenuForm = () => {
  const [file, setFile] = useState({
    menuImage1: null,
    menuImage2: null,
  });
  const [categoryModal, setCategoryModal] = useState(false);
  return (
    <>
      <div className="menu-form  flex flex-col gap-5">
      <Row gutter={[20, 20]}>
          <Col span={12}>
            <div className="flex gap-2  items-center">
              <CustomSlect
                className={"!w-[180px]"}
                options={[
                  { label: "Breakfast", value: "Breakfast" },
                  { label: "Lunch", value: "Lunch" },
                  { label: "Dinner", value: "Dinner" },
                ]}
                placeholder={"Enter Menu Type"}
              />
              <CustomButton
                onclick={() => {
                  setCategoryModal(true);
                }}
                value={<PlusOutlined />}
              />
            </div>
          </Col>
          <Col span={12}>
            <Input
              className={"text-gray-300 py-2 shadow-xl"}
              onChange={(e) => {
                setFile({
                  menuImmage1: URL.createObjectURL(e.target.files[0]),
                });
              }}
              type={"file"}
            />
          </Col>
         
        </Row>
        <Row gutter={[20, 20]}>
          <Col span={12}>
            <CustomInput
              placeholder={"Enter food item name"}
              className={"w-full"}
            />
          </Col>
          <Col span={12}>
            <CustomInput placeholder={"Enter Price"} className={"w-full"} />
          </Col>
        </Row>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <div className="relative">
              <TextArea
                showCount
                maxLength={100}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent shadow-xl  appearance-none dark:text-white dark:border-primary dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer  py-2 rounded-lg opacity-70 font-semibold `}
              />
              <CustomText
                value={"Enter Menu Description"}
                className="absolute text-sm text-gray-300 dark:text-primary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 text-[14px]"
              />
            </div>
          </Col>
        </Row>
      
        <Row gutter={[20, 20]}>
          <Col span={12}>
          <div className="flex gap-1">
            <div>
          <CustomInput  placeholder={"Enter discount"}/>
          </div>
          <div>
            <CustomSlect
              options={[{ label: "%", value: "%" },{ label: "Rs.", value: "Rs." }]}
              className={"!w-[60px] "}
            />
            </div>
            </div>
          </Col>
          <Col span={12}>
            <CustomInput
              className={"text-gray-300 py-2 shadow-xl"}
              placeholder="After discount"
            />
          </Col>
        </Row>
        <Row>
        
        </Row>
        <CustomButton className="w-full" value={"Add Menu"} />
      </div>
      <CustomModal
        modalBody={<AddCategory />}
        value={"Add Category"}
        open={categoryModal}
        setOpen={setCategoryModal}
      />
    </>
  );
};
export default AddMenuForm;
