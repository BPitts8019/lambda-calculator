import React from "react";

const NumberButton = ({label, currentNum, setNumber}) => {
   const updateNumber = () => {
      setNumber(currentNum + label);
   };
   
   return (
      <>
         {/* Display a button element rendering the data being passed down from the parent container on props */}
         <button onClick={updateNumber}>{label}</button>
      </>
   );
};

export default NumberButton;