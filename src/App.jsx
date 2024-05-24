import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="max-width-7xl mx-auto bg-[#efefef]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="homepage" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
