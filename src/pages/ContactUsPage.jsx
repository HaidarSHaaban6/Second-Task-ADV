import ContactUsSection from "../component/ContactUsSection/ContactUsSection";
import Footer from "../component/Footer/Footer";
import HeroComponent from "../component/HeroComponent/HeroComponent";
import NavBar from "../component/NavBar/NavBar";

const ContactUsPage = () => {
  return (
    <>
      <NavBar />
      <HeroComponent
        headerOneText="CONTACT US"
        headerFiveText="HOME / CONTACT US"
      />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default ContactUsPage;
