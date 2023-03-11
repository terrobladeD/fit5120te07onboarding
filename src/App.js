
import './App.css';
import { Home } from "./pages/Home";
import { Wasteclass } from "./pages/Wasteclass";
import { Binday } from "./pages/Binday";
import { HashRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (



    <HashRouter>
      <header>
        <h3>FIT5120TE07 OnBoardingDemo-V1.0</h3>
        <h4>Make a name here</h4>

      </header>
      <div>
        <nav>
          <div className='nav_bar'>
            <span><Link to='/'>Home</Link></span>
            <span><Link to='/Wasteclass'>Wasteclass</Link></span>
            <span><Link to='/Binday'>Binday</Link></span>
          </div>
        </nav>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Wasteclass' element={<Wasteclass />} />
          <Route path='/Binday' element={<Binday />} />
        </Routes>
      </div>


    </HashRouter>
  )
}

export default App;
