import { BrowserRouter, Link, Route, Routes } from "react-router";
import "./App.css"
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Home from "./Home";

function Menu(props) {
    return <>
        <BrowserRouter>
            <div className="pure-menu pure-menu-horizontal dark">
                <a href="#" className="pure-menu-heading pure-menu-link">Company Website</a>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item">
                        <Link to="/home" >Home</Link>
                    </li>
                    &nbsp;&nbsp;
                    <li className="pure-menu-item">
                        <Link to="/about" >About</Link>
                    </li>
                    &nbsp;&nbsp;
                    <li className="pure-menu-item">
                        <Link to="/contact" >Contact</Link>
                    </li>
                   &nbsp;&nbsp;
                    <li className="pure-menu-item">
                        <Link to="/projects" >Projects</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default Menu;
