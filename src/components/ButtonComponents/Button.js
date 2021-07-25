import React from "react";

const Button = ({ className, char, value }) => {
   return (
      <button className={className} value={value}>
         {char}
      </button>
   );
};

export default Button;
