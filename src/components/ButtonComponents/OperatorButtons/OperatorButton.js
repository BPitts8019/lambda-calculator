import React from "react";
import Button from "../Button";

const OperatorButton = ({ operator: { char, value } }) => {
   return (
      <>
         {/* Display a button element rendering the data being passed down from the parent container on props */}
         <Button char={char} value={value} />
      </>
   );
};

export default OperatorButton;
