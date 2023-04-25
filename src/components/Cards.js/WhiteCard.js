import React from "react";

const WhiteCard = ({
  children,
  size = "",
  height = "",
  radius = "2px",
  shadow = "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
}) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: size,
        height: height,
        borderRadius: radius,
        boxShadow: shadow,
      }}
    >
      {children}
    </div>
  );
};

export default WhiteCard;
