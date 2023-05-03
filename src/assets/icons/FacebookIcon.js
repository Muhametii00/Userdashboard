import React from "react";
import { Colors } from "../helpers/Colors";

export const FacebookIcon = ({ color = Colors.grey, id = "Facebook" }) => {
  return (
    <svg
      width="11px"
      height="20px"
      viewBox="0 0 11 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id={id}
        d="M6.83329 11.375H9.12496L10.0416 7.70838H6.83329V5.87504C6.83329 4.93088 6.83329 4.04171 8.66663 4.04171H10.0416V0.961708C9.74279 0.922291 8.61438 0.833374 7.42271 0.833374C4.93396 0.833374 3.16663 2.35229 3.16663 5.14171V7.70838H0.416626V11.375H3.16663V19.1667H6.83329V11.375Z"
        fill={color}
      />
    </svg>
  );
};
