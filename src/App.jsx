import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import SecondHomePage from "./pages/SecondHomePage";

function App() {
  return (
    <>
      <div className="max-width-7xl mx-auto bg-[#efefef]">
        <BrowserRouter>
          <Header />
          <div className="px-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pageTwo" element={<SecondHomePage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
