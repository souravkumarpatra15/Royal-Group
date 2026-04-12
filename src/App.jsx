import './styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ecosystem from './pages/ecosystem/Ecosystem';
import EcosystemDetails from './pages/ecosystemdetails/EcosystemDetails';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PropertyDetails from './pages/Property/PropertyDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path='/ecosystem/:id' element={<EcosystemDetails />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}