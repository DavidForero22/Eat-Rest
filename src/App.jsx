import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Locales from "./pages/Locals.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locales" element={<Locales />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;