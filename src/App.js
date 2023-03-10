
import './App.css';
import Waste from './components/Waste';
import WasteItem from "./assets/data.json";

function App() {
  return (

    <>
      <header>
        <h2>FIT5120TE07</h2>
        <h4>OnBoardingDemo-V0.0</h4>

      </header>
      <div className='movie-container'>
        {WasteItem.map((para, index) => (<Waste key={index} {...para}></Waste>))}
      </div>

    </>);
}

export default App;
