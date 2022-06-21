import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutPage from './pages/About';
import MyNav from './components/layout/Navbar/MyNav';
import Footer from './components/layout/Footer/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <MyNav/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route>
          <Contact />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
