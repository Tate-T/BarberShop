
import './App.css';
import './components/Header/Header.jsx'
import { Header } from './components/Header/Header.jsx';
import {Hero} from './components/Hero/Hero.jsx'
import { About } from './components/About/About.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Hero/>
        <About/>
      </main>
    </div>
  );
}

export default App;
