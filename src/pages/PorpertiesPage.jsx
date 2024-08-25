import NavBar from "../component/NavBar/NavBar";
import HeroComponent from "../component/HeroComponent/HeroComponent";
import Footer from "../component/Footer/Footer";
import PropertiesSection from "../component/PropertiesSection/PropertiesSection";

const PorpertiesPage = () => {
  return (
    <>
      <NavBar />
      <HeroComponent
        headerOneText="SINGLE PROPERTIES"
        headerFiveText="HOME / PROPERTIES"
      />
      <PropertiesSection />
      <Footer />
    </>
  );
};

export default PorpertiesPage;
