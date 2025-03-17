import { Avatar, Col, Row } from "antd";
import { useState } from "react";
import CustomText from "../../../common/CustomText";
import qrcode from "../../../assets/qrcode/qrcode.png";
import CustomButton from "../../../common/CustomButton";
import CustomModal from "../../../common/CustomModal";
import QrCodeForm from "./QrcodeForm";
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
        {qrData?.map((item, idx) => {
          return (
            <>
              <Col span={6}>
                <div
                  className="flex justify-center"
                  onMouseEnter={() => {
                    setQrTextId(idx);
                  }}
                  onMouseLeave={() => {
                    setQrTextId(null);
                  }}
                >
                  <Avatar className="rounded-md" size={200} src={qrcode} />
                  {qrTextId === idx && (
                    <div className="absolute left-0 right-0 flex justify-center top-0 bottom-0 my-auto     mx-auto w-full">
                      <div className="flex  flex-col gap-2 justify-center bg-white p-2 rounded-md w-[80%] text-center">
                        <CustomText
                          className={"font-bold text-secondary"}
                          value={`Department : ${item?.department}`}
                        />
                        <CustomText
                          className={"font-bold text-secondary"}
                          value={`Bed number : ${item?.bedNumber}`}
                        />
                        <CustomButton value={"Download Qr"} />
                      </div>
                    </div>
                  )}
                </div>
              </Col>
            </>
          );
        })}
        <div className="add-qrcode bg-white  flex justify-center items-center  rounded-md ">
          <div className="px-5">
            <CustomButton
              onclick={() => {
                setQrCodeGenerator(true);
              }}
              value={"QrCode Generator"}
            />
          </div>
        </div>
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
