import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ApplyBed from './pages/ApplyBed';
import FirstAid from './pages/firstAid';
import BloodGroups from './pages/bloodGroups';
import FreeMedicines from './pages/freeMedicines';
import Doctors from './pages/doctors';
import SymptomsChecker from './pages/symptomsChecker';
import Contact from './pages/contact';
import Welfare from './pages/welfare';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firstAid" element={<FirstAid />} />
        <Route path="/bloodGroups" element={<BloodGroups />} />
        <Route path="/free-Medicines" element={<FreeMedicines />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/SymptomsChecker" element={<SymptomsChecker />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/welfare" element={<Welfare />} />
        <Route path="/ApplyBed" element={<ApplyBed/>}/>
      </Routes>
    </Router>
  );
}

export default App;