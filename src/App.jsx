import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Success from "./pages/Success";
import Expired from "./pages/Expired";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/success" element={<Success />} />
        <Route path="/expired" element={<Expired />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;