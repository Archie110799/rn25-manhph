import "./App.css";
import React from "react";
import imgHouse from "./images/1.png";
import JSX from "./2-examples/1-JSX";
import GeneralType from "./2-examples/1-Base/GeneralType";
import Other from "./2-examples/1-Base/Other";
import EventHandlerExamples from "./2-examples/3-EventHandlerExamples";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Basic1_S2 from "./homeworks/Session 02/Basic1";
import ChartBar2 from "./homeworks/Session 02/ChartBar2";
import LifecycleExample from "./2-examples/4-LifecycleExamples";
import LifecyleHookExamples from "./2-examples/4-LifecyleHookExamples";

function App() {
  return (
    <>
      {/* <ChartBar2 /> */}
      <LifecycleExample />
      <LifecyleHookExamples />
    </>
  );
}

export default App;
