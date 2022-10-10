import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

export default function Component() {
  return (
    <>
      <div className="row text-center">
        <div className="col">
          <ClassComponent title={"Day la TITLE"} />
        </div>
        <div className="col">
          <FunctionalComponent title={"Day la TITLE"} />
        </div>
      </div>
    </>
  );
}
