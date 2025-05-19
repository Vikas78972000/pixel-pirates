import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import UploadPage from "./pages/UploadPage";

import About from "./pages/About"; // Import the component
<Route path="/about" element={<About />} /> // Route for /about


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/about" element={<div>About this project</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
