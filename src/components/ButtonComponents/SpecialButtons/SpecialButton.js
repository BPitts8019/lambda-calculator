import React from "react";
import Button from "../Button";

const SpecialButton = ({ value }) => {
   return (
      <>
         {/* Display a button element rendering the data being passed down from the parent container on props */}
         <Button className="button-spec" value={value} char={value} />
      </>
   );
};

export default SpecialButton;
