import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from "./components/Home";
import Details from "./components/Details";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Catalog } from "./components/Catalog";
import { AuthProvider } from "./contexts/authContext";
import { ClothingProvider } from "./contexts/clothingContext";
import { Logout } from "./components/Logout";


function App() {
  return (<>
    <AuthProvider>
      <ClothingProvider>

        <div className='main'>

          <TopBar />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:categorie/:gender/:type" element={<Catalog />} />
            <Route path="/:categorie/:gender/:type/:id/:details" element={<Details />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>

          <Footer />

        </div>

      </ClothingProvider>
    </AuthProvider >
  </>
  );
}

export default App;
