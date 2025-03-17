import { Button } from "antd";

const CustomButton = ({ value, onclick, className }) => {
  return (
    <div>
      <Button
        className={`text-white hover:!bg-primary hover:!text-white bg-primary font-semibold py-5  border-none rounded-lg ${className}`}
        onClick={onclick}
      >
        {value}
      </Button>
    </div>
  );
};
export default CustomButton;
