import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Animation/Home";
import Info from './components/About/Info';
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
// import "./App.css";

function App() {
  return (
    <div>
      <Router basename="/etta-portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />}/ >
          <Route path="/contact" element={<Contact />} / >
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
