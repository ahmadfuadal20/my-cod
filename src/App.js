import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const Navbar = lazy(() => import('./components/Navbar'));

// Routing Pages
const Product = lazy(() => import('./pages/Product'));
const View = lazy(() => import('./pages/View'));
const About = lazy(() => import('./pages/About'));
const OpenProduct1 = lazy(() => import('./pages/OpenProduct1'));
const OpenProduct2 = lazy(() => import('./pages/OpenProduct2'));
const OpenProduct3 = lazy(() => import('./pages/OpenProduct3'));
const OpenProduct4 = lazy(() => import('./pages/OpenProduct4'));
const OpenProduct5 = lazy(() => import('./pages/OpenProduct5'));
const OpenProduct6 = lazy(() => import('./pages/OpenProduct6'));
const OpenProduct7 = lazy(() => import('./pages/OpenProduct7'));
const OpenProduct8 = lazy(() => import('./pages/OpenProduct8'));

const App = () => (
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Home" element={<Home />} />
       <Route path="/Navbar" element={<Navbar />} />
       {/* Routing Pages */}
       <Route path="/Product" element={<Product />} />
       <Route path="/View" element={<View />} />
       <Route path="/About" element={<About />} />
       <Route path="/OpenProduct1" element={<OpenProduct1 />} />
       <Route path="/OpenProduct2" element={<OpenProduct2 />} />
       <Route path="/OpenProduct3" element={<OpenProduct3 />} />
       <Route path="/OpenProduct4" element={<OpenProduct4 />} />
       <Route path="/OpenProduct5" element={<OpenProduct5/>} />
       <Route path="/OpenProduct6" element={<OpenProduct6/>} />
       <Route path="/OpenProduct7" element={<OpenProduct7/>} />
       <Route path="/OpenProduct8" element={<OpenProduct8/>} />
      </Routes>
       </Suspense>
       </Router>
);
export default App;

