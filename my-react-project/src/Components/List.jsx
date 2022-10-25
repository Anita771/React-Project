import { useState } from "react";

let nextId = 0;
function reply(message) {
    if (message.includes("Hello", "Hi", "Moi",)) {
      return "Hello! How May I help you?";
    } else if (message.includes("Hi")) {
      return "Hi! How may I help you?";
    }else if (message.includes("types of cakes")) {
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
    const [artists, setArtists] = useState([]);
  
    return (
        <div>
         <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={() => {
          setName('');
          setArtists([
            ...artists,
            { id: nextId++, name: name },
            { id: nextId++, name: reply(name) }
          ]);
        }} >Add</button>
        <ul>
          {artists.map(artist => (
            <li key={artist.id}>{artist.name}</li>
          ))}
        </ul>
         </div>
    );
  }
  