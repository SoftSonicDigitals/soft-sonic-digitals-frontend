import React, { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

type FormButtonsProps = {
  Icon?: IconType;
  btnStyles?: string;
  btnType: "submit" | "reset" | "button" | undefined;
  btnText: string;
  btnTextStyles?: string;
  clickHandler?: () => void;
  iconStyles?: string;
};

const FormButton = ({
  btnStyles,
  btnType = "button",
  btnText,
  btnTextStyles,
  iconStyles,
  Icon,
  clickHandler = () => {},
}: FormButtonsProps) => {
  return (
    <button
      type={btnType}
      className={`${btnStyles} px-4 py-2 flex-center gap-2 transition duration-200`}
      onClick={() => clickHandler()}
    >
      {Icon && <Icon className={`${iconStyles}`} />}
      <p
        className={`text-xs ${btnTextStyles} transition duration-200 font-[600]`}
      >
        {btnText}
      </p>
    </button>
  );
};

export default FormButton;
