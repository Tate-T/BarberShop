
import './App.css';
import './components/Header/Header.jsx'
import { Header } from './components/Header/Header.jsx';
import {Hero} from './components/Hero/Hero.jsx'
import { About } from './components/About/About.jsx'
import { Prices } from './components/Prices/Prices.jsx';
import { Why } from "./components/Why/Why.jsx";
import { Barbers } from './components/Barbers/Barbers.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Prices/>
        <Why/>
        <Barbers/>
      </main>
    </div>
  );
}

export default App;
