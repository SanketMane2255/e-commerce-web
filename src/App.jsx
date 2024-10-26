
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import A from './Components/A';
import NavbarMain from './Components/NavbarMain';
import { Staorage } from './Context';
import Cart from './Components/Cart';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Staorage>
      <NavbarMain/>
      
      <Routes>
        <Route path="/" element={<A/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </Staorage>
    </BrowserRouter>
    </>
  );
}

export default App;
