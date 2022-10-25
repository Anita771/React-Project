import Counter from "./Components/Counter";
import Menubar from "./Components/Menubar";
import List from "./Components/List";

//import Backgroundimage from "./Components/Backgroundimage";
import './App.css';
import React from "react";


export default function App() {
  return (
    <div className="App">
      <card>
      <Counter/>
      <Menubar/>
      <p>Hello, How may I help you?</p>
      <List />

      </card>
       </div>
  );
}
