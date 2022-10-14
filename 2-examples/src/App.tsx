import "./App.css";
import React, { useState } from "react";
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
import LifecyleHookExamples from "./2-examples/5-LifecyleHookExamples";
import BtNumber from "./components/Bt/BtNumber";
import ChartBar from "./homeworks/Session 02/ChartBar";

interface ObjectUser{
  name : string,
  age : number
}

function App() {
  // REACT HOOKS
  const [nameState, setNameState] = useState(true); // single
  const [nameState1, setNameState1] = useState(1);

  // multil
  const [user,setUser] = useState<ObjectUser>({
    name : 'ten',
    age : 18
  });
 
  const handleOnClick = () =>{
    setNameState(!nameState)
    setUser({...user, name : 'new Name', age : 20})
    console.log('clicked')
  }

  return (
    <>
      {/* condition rendering */}
      {/* {nameState && <BtNumber />} 
      <hr />
      <button onClick={handleOnClick}>SHOW COMPONENT</button> */}
      <ChartBar text="text1" color1="red" color2="pink" percentage={30}/>
      <ChartBar text="text2" color1="pink" color2="red" percentage={50}/>
      {/* <ChartBar2 /> */}
      {/* <LifecycleExample /> */}
      {/* <LifecyleHookExamples /> */}
    </>
  );
}

export default App;
