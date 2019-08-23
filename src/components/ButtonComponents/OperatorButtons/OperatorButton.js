import React from "react";

const OperatorButton = ({label, value, setOperation}) => {
   const btnClick = () => {
      setOperation(value);
   };

   return (
      <>
         {/* Display a button element rendering the data being passed down from the parent container on props */}
         <button onClick={btnClick}>{label}</button>
      </>
   );
};

export default OperatorButton;