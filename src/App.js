import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Switch, } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Skintypes from './pages/Skintypes';
import About from './pages/About';
import Contact from './pages/Contact';
import Skins from './pages/Skins';



function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/skintypes" exact component={Skintypes} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/skins" exact component={Skins}/>
    </Switch>
    <Footer />
    </Router>
  </div>
  );
}

export default App;
