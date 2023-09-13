import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/service/Services';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Contact />
  </div>
  );
}

export default App;
