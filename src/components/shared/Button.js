import React from "react";
import { Colors } from "../../assets/helpers/Colors";

export const Button = ({
  children,
  width,
  padding,
  radius,
  border,
  color = "#ffff",
  cursor = "pointer",
  bottom,
  onClick,
  disabled,
}) => {
  const backgroundColor = () => {
    if (disabled) {
      return Colors.lightblue;
    } else if (disabled === null) {
      return Colors.stroke;
    } else {
      return Colors.primary;
    }
  };
  return (
    <button
      style={{
        width: width,
        padding: padding,
        borderRadius: radius,
        backgroundColor: backgroundColor(),
        border: border,
        color: color,
        cursor: cursor,
        marginBottom: bottom,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
