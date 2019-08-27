import React from "react";

const SpecialButton = ({label, value, setSpecial}) => {
   const classList = "special";
   const btnClick = () => {
      // setSpecial(value);
      console.log(`Button (${label}): setSpecial(${value})`);
   };

   return (
      <>
         {/* Display a button element rendering the data being passed down from the parent container on props */}
         <button className={classList} onClick={btnClick}>{label}</button>
      </>
   );
};

export default SpecialButton;