import React from "react";
import style from "./button.module.css";
import { CofeIcon } from "../../assets/icon/cofeIcon";

export const Button = ({
  type,
  onClick,
  children,
  startIcon: Icon,
  endIcon: EndIcon,
  variant,
}) => {
  return (
    <button
    onClick={onClick}
    type={type}
      className={
        variant === "frist"
          ? style.frist
          : variant === "second"
          ? style.second
          : variant === "text"
          ? style.text
          : ""
      }
    >
        {Icon ? <Icon/> : ""}
      {children}
      {EndIcon ? <EndIcon/> : ""}
    </button>
  );
};
