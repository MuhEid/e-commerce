import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MyNav from './components/layout/Navbar/MyNav';
import Footer from './components/layout/Footer/Footer';
import Login from './pages/Login';
// import AuthContext from './store/auth-context';
import { Fragment } from 'react';
import Payment from './pages/Payment';
import Cart from './pages/Cart';

function App() {
  return (
    <Fragment>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
