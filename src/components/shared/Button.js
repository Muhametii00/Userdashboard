import React from "react";

export const Button = ({
  children,
  width = "",
  padding = "",
  radius = "",
  background = "",
  border = "",
  color = "#ffff",
  cursor = "pointer",
  bottom = "",
  onClick,
}) => {
  return (
    <button
      style={{
        width: width,
        padding: padding,
        borderRadius: radius,
        backgroundColor: background,
        border: border,
        color: color,
        cursor: cursor,
        marginBottom: bottom,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
