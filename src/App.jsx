import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar.jsx'

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Navbar/>
            <h1>Jules Hauchecorne</h1>
        </>
    );
}

export default App;
