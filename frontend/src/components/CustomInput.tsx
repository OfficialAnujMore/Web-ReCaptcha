import React from "react";
import CustomInputProps from "../interfaces/CustomInputProps";
import commonStyle from "../style/common.module.css";

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={commonStyle.input}
    />
  );
};

export default CustomInput;
