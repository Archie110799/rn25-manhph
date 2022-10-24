import React from "react";
import { useState } from "react";
import "./styles.css"

// data types
interface IStateObject {
  name: string;
  age: number;
  method?: () => void;
}

interface IPropsNewComponent{
    nameProps1 : number,
    nameProps2 : string
}

function NewComponent(props : IPropsNewComponent) {
  
  return (
      <>
        <div className={props.nameProps2}>{props.nameProps1}</div>
        <div className={props.nameProps2}>{props.nameProps2}</div>
        {/* <div>{newState}</div> */}
      </>
  );
}

export default NewComponent;
