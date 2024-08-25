import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PorpertiesPage from "./pages/PorpertiesPage";
import PropertiesDetailPage from "./pages/PropertiesDetailPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PorpertiesPage />} />
        <Route path="/propertiesdetail" element={<PropertiesDetailPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </>
  );
}

export default App;
