import "./App.css";
import React, { useState } from "react";
import imgHouse from "./images/1.png";
import JSX from "./2-examples/1-JSX";
import GeneralType from "./2-examples/1-Base/GeneralType";
import Other from "./2-examples/1-Base/Other";
import EventHandlerExamples from "./2-examples/3-EventHandlerExamples";
import LifecycleExample from "./2-examples/4-LifecycleExamples";
import LifecyleHookExamples from "./2-examples/5-LifecyleHookExamples";
import FormsExamples from "./2-examples/6-FormsExamples";
import ReactHookFormWithYup from "./2-examples/6-ReactHookForms/Yub/ReactHookFormWithYup";
import RegisterFormWithYup from "./2-examples/6-FormikExamples/RegisterFormWithYup";
import UseEffect from "./2-examples/5-Hooks/useEffect";
import ReactMemo from "./2-examples/5-Hooks/components";

function App() {

  return (
    <>
      {/* <LifecycleExample /> */}
      {/* <LifecyleHookExamples /> */}
      
      {/* <ReactMemo /> */}
      {/* <UseEffect /> */}
      <LifecyleHookExamples />

      {/* <FormsExamples /> */}
      {/* <ReactHookFormWithYup /> */}
      {/* <RegisterFormWithYup /> */}
    </>
  );
}

export default App;
