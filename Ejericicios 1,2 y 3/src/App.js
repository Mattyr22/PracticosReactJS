import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Contact} from "./models/contacModel";
import ComponentA from './components/ComponentA';

function App() {

  const [newContact, setNewContact] = useState(
    new Contact ("Matias", "Rosales", "Correo@Correo.com", true)
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA newContact = {newContact} setNewContact = {setNewContact} />
      </header>
    </div>
  );
}

export default App;
