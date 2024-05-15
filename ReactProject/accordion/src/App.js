
import './App.css';
import Accorddion from './components/accordion/Index';
import blur from "./img/blur.svg"

function App() {
  return (
    <div className="wrapper">
      <div className='blur blurFirst'><img src={blur}/></div>
      <div className='blur blurSecond'><img src={blur}/></div>
      <div className='blur blurThree'><img src={blur}/></div>
      <Accorddion/>
    </div>
  );
}

export default App;
