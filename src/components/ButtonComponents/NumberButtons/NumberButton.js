import React from "react";
import Button from "../Button";

const NumberButton = ({ label }) => {
   return (
      <>
         {/* Display a button element rendering the data being passed down from the parent container on props */}
         <Button className="button-num" label={label} />
      </>
   );
};

export default NumberButton;
