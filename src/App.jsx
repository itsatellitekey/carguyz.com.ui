import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home';
import Services from './pages/Services.jsx';
import Booking from './pages/Booking.jsx'

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main class="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path='/about'/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

