import React from 'react';
import logo from './logo.svg';
import './App.css';
import myWonderfulImage from "./image.jpg";
import video from './video/v.mp4';


function App() {
  return (
    <div className="App">

      <div style = {{border: "solid 1px black" , maxWidth:"100vw" }}>
      <h1 className = "titlered"> Ahmed Hadj Saad </h1>
      <br/>
      <img src = {myWonderfulImage}></img>
      <br/>
      <img src = "/logo512.png"></img>
      <video style= {{width:320, height:240}} >
      <source src={video} type="video/mp4" ></source>
      </video>
      </div>
    </div>
  );
}

export default App;
