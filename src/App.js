import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json'


function App() {

  const [allCountries, setAllCountries] = useState(countries);

  return (

    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">

          <CountriesList allCountries={allCountries} />

          <Routes>
            <Route path="/:countryID" element={<CountryDetails allCountries={allCountries} />} />
          </Routes>
          
        </div>
      </div>
    </div>
  );
}

export default App;
