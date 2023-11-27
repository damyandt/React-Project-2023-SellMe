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
import Profile from "./components/Profile";




function App() {
  return (<>
    <AuthProvider>
      <ClothingProvider>

        <div className='main'>
          <div className="head">
            <TopBar />
            <Header />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:categorie/:gender/:type" element={<Catalog />} />
            <Route path="/:categorie/:gender/:type/:id/details" element={<Details />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>

        </div>
        <Footer />

      </ClothingProvider>
    </AuthProvider >
  </>
  );
}

export default App;
