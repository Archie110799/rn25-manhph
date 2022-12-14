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
import Practive from "./components/Practive";
import ChartBar from "./homeworks/Session 02/ChartBar";
import MagicRouter from "./2-examples/8-MagicRouter";
import ReactRouterExamples from "./2-examples/8-ReactRouterExamples";
import ReduxExample from "./2-examples/9-Redux";
import Users from "./2-examples/7-NetworkingExamples/Axios/Users";
import NewComponent from "./components/NewComponent";
import Session08 from "./homeworks/Session08";

function App() {

  return (
    <>
      {/* <ChartBar  text={"text1"} color1={"red"} color2 = {"pink"} percentage={50}/>
      <ChartBar  text={"text2"} color1={"green"} color2 = {"red"} percentage={25}/> */}

      {/* <NewComponent nameProps1 = {1} nameProps2 = {"class__blue"}/>

      <NewComponent nameProps1 = {4} nameProps2 = {"class__red"}/> */}

      {/* <LifecycleExample /> */}

      {/* <ReactMemo /> */}
      {/* <UseEffect /> */}
      {/* <LifecyleHookExamples /> */}

      {/* <FormsExamples /> */}
      {/* <ReactHookFormWithYup /> */}
      {/* <RegisterFormWithYup /> */}
     
      {/* <Users /> */}
      
      {/* <ReactRouterExamples /> */}
      {/* <MagicRouter /> */}

      {/* <ReduxExample /> */}

      <Practive/>

      {/* <Session08 /> */}
    </>
  );
}

export default App;
