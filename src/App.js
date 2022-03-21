import { element } from 'prop-types';
import './App.css';
import FunctionUp from './components/FunctionUp/FunctionUp';
import Greet from './components/greet/Greet';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const arr = [1,2,3]
  const element = <h1>Hello this is good</h1>
  const getNumber = (num) => {
    console.log(num+2);
  }
  return (
    <div className="App">
      <FunctionUp getNumber={getNumber} />
      <Greet maik={arr} 
      h1={element}
      name="Maisalbek" age={20} image="https://sportshub.cbsistatic.com/i/r/2019/11/07/04a0f1ab-3a63-408f-aefa-2eebc50ddc65/thumbnail/770x433/b28dcbd21e1c80b8a282bdba6b9340a3/13fb012e-7aff-e911-80cd-fa7ca2e6058b-original.jpg" />
    </div>
  );
}

export default App;
