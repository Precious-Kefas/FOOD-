import "./App.css"
import Welcome from "./components/Cat";
 import Greet from "./components/greet.jsx"
 import House from "./components/here.jsx"
import Message from "./components/Message";
 import Count from './components/Count'
// import Bag from "./components/Destructure";


function App() {
  return (
    <div className="app">
      
       <Count />
      <Greet /> 
      {/* <Welcome />  */}
      <House name="diana" heroName="wonder-woman">
        <p>this is prop children</p>
      </House>
      <House name="Bruce" heroName="batman">
        <button>action</button>
      </House>
      <House name="Tina" heroName="superman" /> 
      {/* <Bag name="Mima" heroName="super" />
      <Bag name="jerry" heroName='never' />
      <Bag name="Brain" /> */}

       <Welcome name="Silas"></Welcome>
      <Welcome name="Mark"></Welcome>
      <Welcome name="Jenny"></Welcome>

      <Message /> 
    </div>
  );
 
}


export default App;
