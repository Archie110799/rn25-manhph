import "./App.css";
import React from "react";
import JSX from "./2-examples/JSX";
import Component from "./2-examples/Component";
import State from "./2-examples/State";
import imgHouse from './images/1.png'

function App() {
  let b = 10
  let str = 'ass'
  // 'ass--10'
  console.log(`https://${str}--${b}`)
  return (
    <>
      <div className="bg_ccc p-3" style={{height: '100px'}}>
        <h1>The Pulpit Rock</h1>
      </div>
      <div className="row mt-5" style={{height: '850px'}}>
        <div className="col-12">
          <p className="item p-4">The drive</p>
          <p className="item p-4">The drive</p>
          <p className="item p-4">The drive</p>
          <p className="item p-4">The drive</p>
        </div>
        <div className="col-12 p-2">
          <h1>The Walk</h1>
          <p>The walk to the Pulpit Rock will take you approximately two hours, give or take an hour depending on the weather conditions and your physical shape.</p>
          <img src={imgHouse} alt="" />
        </div>
        <div className="col-12 bg-info h-40">
          <div>
            <h1>What?</h1>
            <p>The Pulpit Rock is a part of a mountain that looks like a pulpit.</p>
          </div>
          <div>
            <h1>Where?</h1>
            <p>The Pulpit Rock is in Norway</p>
          </div>
          <div>
            <h1>Price?</h1>
            <p>The walk is free!</p>
          </div>
        </div>
      </div>
      <div className="bg_ccc text-center pt-3" style={{height: '50px'}}>This web page is a part of a demonstration of fluid web design made by www.w3schools.com. Resize the browser window to see the content response to the resizing.</div>
    </>
  );
}

export default App;
