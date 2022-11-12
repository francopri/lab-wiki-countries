import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
// import CountriesList from './components/CountriesList'

function App() {
  return (


    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <ErrorPage /> } /> 

      </Routes>

    </div >
  );
}

export default App;
