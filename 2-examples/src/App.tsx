import "./App.css";
import React from "react";
import imgHouse from './images/1.png'
import JSX from './2-examples/1-JSX';
import GeneralType from "./2-examples/1-Base/GeneralType";
import Other from './2-examples/1-Base/Other';
import EventHandlerExamples from "./2-examples/3-EventHandlerExamples";
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
  let isLogin = false
  return (
    <>
      <Header isLoginProps = {isLogin}/>

      {/* * PROPS - READONLY - Truyen data tu CHA -> CON
      - Component cha: Add thuoc tinh JSX props ( tenProp = giatri cua prop)
      - Component con: 
      + Khai bao ten prop o Type (co duoc undefined (?: :) , data types cua bien )
      + Su dung
        Class: this.props.isLogin
        Funtional : isLogin */}
      
    </>
  );
}

export default App;
