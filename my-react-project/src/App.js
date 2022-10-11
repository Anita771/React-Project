import Menubar from "./Components/Menubar";
import Button from "./Components/Button";
import Textarea from "./Components/Textarea";
//import Backgroundimage from "./Components/Backgroundimage";
import Counter from "./Components/Counter";
import './App.css';

function App() {
  return (
    <div>
      <Menubar/>
      <Counter/>
      <div>
      <Textarea/>
      <Button/>  
      </div>
       
  
   </div>
  );
}

export default App;
