import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";


function App() {
  return (<>
    <div className='main'>


      <TopBar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

      </Routes>

      <Footer />
    </div>

  </>


  );
}

export default App;
