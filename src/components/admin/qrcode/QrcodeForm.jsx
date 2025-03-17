import CustomButton from "../../../common/CustomButton";
import CustomInput from "../../../common/CustomInput";

const QrCodeForm=()=>{
    return(
        <>
         <div className="flex flex-col gap-5">
         <div>
                <CustomInput placeholder={"Enter Hospital Name"} />
              </div>
              <div>
                <CustomInput placeholder={"Enter department"} />
              </div>
              <div>
                <CustomInput placeholder={"Enter Bed Number"} />
              </div>
              <CustomButton  className="w-full" value={"Generate Qr Code"} />
         
          </div>
        </>
    )
}
export default QrCodeForm;