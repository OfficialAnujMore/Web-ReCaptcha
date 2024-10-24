import React from "react";
import commonStyle from "../style/common.module.css";
interface CustomButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  label,
  disabled = false,
}) => {
  return (
    <button onClick={onClick} className={commonStyle.button} disabled={disabled}>
      {label}
    </button>
  );
};

export default CustomButton;
