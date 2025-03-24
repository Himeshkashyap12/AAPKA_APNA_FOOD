import { Avatar, Col, Row } from "antd";
import { useState } from "react";
import CustomText from "../../../common/CustomText";
import qrcode from "../../../assets/qrcode/qrcode.png";
import CustomButton from "../../../common/CustomButton";
import CustomModal from "../../../common/CustomModal";
import QrCodeForm from "./QrcodeForm";
import { CloudDownloadOutlined, PlusOutlined } from "@ant-design/icons";
const qrData = [
  {
    id: 1,
    bedNumber: 1,
    department: "cardiology",
  },
  {
    id: 2,
    bedNumber: 3,
    department: "cardiology",
  },
];
const QrCode = () => {
  const [qrTextId, setQrTextId] = useState(null);
  const [qrCodegenerator, setQrCodeGenerator] = useState(null);

  return (
    <>
      <Row>
      <div className="add-qrcode bg-white  rounded-md  mx-7">
          <div className="w-[230px]  flex  justify-center items-center h-full relative ">
            <CustomButton
              onclick={() => {
                setQrCodeGenerator(true);
              }}
              value={<PlusOutlined />}
            />
             <CustomText
                          className={"font-bold text-secondary absolute bottom-5 "}
                          value={`QrCode Generator`}
                        />
          </div>
        </div>
        {qrData?.map((item, idx) => {
          return (
            <>
              <Col span={6}>
              
                  <div className="flex  flex-col gap-1  justify-center bg-white p-2  w-[90%] text-center">

                  <Avatar className="rounded-t-md rounded-b-none" size={200} src={qrcode} />
                        <CustomText
                          className={"font-bold text-secondary"}
                          value={`Department : ${item?.department}`}
                        />
                        <CustomText
                          className={"font-bold text-secondary"}
                          value={`Bed number : ${item?.bedNumber}`}
                        />
                        <div className="  w-full">
                    
                    <CustomButton value={<CloudDownloadOutlined />} />
                
                </div>
                        </div>
                 
              </Col>
            </>
          );
        })}
       
      </Row>
      <CustomModal
        footer={false}
        modalBody={<QrCodeForm />}
        open={qrCodegenerator}
        setOpen={setQrCodeGenerator}
        value={"Create a QrCode Generator"}
      />
    </>
  );
};
export default QrCode;
