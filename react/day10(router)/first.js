import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './src/Home';
import Dashboard from './src/Dashboard';
import Contact from './src/Contact';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router";  // Corrected this import
import Hello from './src/Hello';
import Hi from './src/Hi';
import Detail from './src/Detail';
// import Zero from './src/Zero';
import Github from './src/Github';


function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/detail" element={<Detail />}>
                    <Route path="hi" element={<Hi />} /> 
                    <Route path="hello" element={<Hello />} /> 
                </Route>
                <Route path="/github/:name" element={<Github />} />
                {/* <Route path="hi" element={<Hi />} /> */}
                {/* <Route index element={<Zero />} /> Optional: Keep only if needed */}
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
