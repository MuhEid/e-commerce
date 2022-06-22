import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutPage from './pages/About';
import MyNav from './components/layout/Navbar/MyNav';
import Footer from './components/layout/Footer/Footer';
import Login from './pages/Login';

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
          <Login path="/login"/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
