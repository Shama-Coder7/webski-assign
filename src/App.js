import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import ContactUs from './components/ContactUs';
// import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
    <Home/>
    {/* <ContactUs/> */}
     {/* <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
     </Router> */}
    </div>
  );
}

export default App;