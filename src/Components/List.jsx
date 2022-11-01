import { useState } from "react";
import './List.css';

let nextId = 0;
function reply(message) {
    if (message.includes("Hello")) {
      return "Hello! How May I help you?";
    }else if (message.includes("Hi")) {
      return "Hi! How May I help you?";
    }else if (message.includes("Moi")) {
      return "Moi! How May I help you?";
    }
else if (message.includes("Types of cakes")) {
      return "We have variety of cakes, which one do you like?";
    }else if (message.includes("blackforest")) {
      return "Great to know, yes we do have blackforest in our menu";
    }
    else if (message.includes("Bye")) {
      return "See you!";
    } else {
      return `I didn't understand when you said: ${message}`;
    }
  }

export default function List() {
    
    const [name, setName] = useState('');
    const [texts, setTexts] = useState([]);
  
    return (
        <div>
         <input className="inputs"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button 
          className="Button" 
          onClick={() => {
            setName('');
            setTexts([
              ...texts,
              //this prints the input field 
              { id: nextId++, name: name },
              //this prints the reply after recieving the user input
              { id: nextId++, name: reply(name) }
          ]);
        }} >Enter</button>
        <ul className="li">
          {texts.map(text => (
            <li key={text.id}>{text.name}</li>
          ))}
        </ul>
         </div>
    );
  }
  