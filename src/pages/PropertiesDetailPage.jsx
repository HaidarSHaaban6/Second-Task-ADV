import BestDeal from "../component/BestDeal/BestDeal";
import HeroComponent from "../component/HeroComponent/HeroComponent";
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer";
import PropertiesDetailSection from "../component/PorpertiesDetailSection/PropertiesDetailSection";

const PropertiesDetailPage = () => {
  return (
    <>
      <NavBar />
      <HeroComponent
        headerOneText="SINGLE PROPERTY"
        headerFiveText="HOME / SINGLE PROPERTY"
      />
      <PropertiesDetailSection />
      <BestDeal />
      <Footer />
    </>
  );
};

export default PropertiesDetailPage;
