import React from "react";

const NumberButton = ({label, setNumber}) => {
   const classList = (label === "0")? "number zero" : "number";
   const btnClick = () => {
      setNumber(label);
   };
   
   return (
      <>
         {/* Display a button element rendering the data being passed down from the parent container on props */}
         <button className={classList} onClick={btnClick}>{label}</button>
      </>
   );
};

export default NumberButton;