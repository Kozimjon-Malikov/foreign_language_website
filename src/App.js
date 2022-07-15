import "./App.css";
import { Routes, Route, } from "react-router-dom";
import Header from './components/Header/Header'
import Contact_info from "./components/Contact/Contact_info";
import Main from "./Main";
import Skill_info from "./components/Skills/Skill_info";
import About from "./components/About/About";
import Pricing from "./pages/Pricing";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/About_page" element={<About />} />
        <Route path="/Contact_info" element={<Contact_info />} />
        <Route path="/Skills_info" element={<Skill_info />} />
        <Route path="Main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
