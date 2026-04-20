import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Agency from "./Pages/Agency";
import Projects from "./Pages/Projects";
import Navbar from "./Navbar";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";

function App() {
    const currentPath = useLocation().pathname;
    

    return (
        <div >
            {(currentPath !== "/" && currentPath !== "/menu") && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agency" element={<Agency />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </div>
    );
}

export default App;
