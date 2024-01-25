import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Header/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import Content from "./Components/Nuili-content/Content.jsx";
import Whynuili from "./Components/WhyNuili/Whynuili.jsx";
import NuiliComfort from "./Components/Nuili-comfort/NuiliComfort.jsx";
import QualityProduct from "./Components/Quality-Product-Madein-Germany/QualityProduct.jsx";
import BookanAppointment from "./Components/Ready-to-start/BookanAppointment.jsx";
import Tableform from "./Components/How-niuli-is-better/Tableform.jsx";
import Designers from "./Components/Meet-our-designers/Designers.jsx";
import NuiliProcess from "./Components/How-nuili_works/NuiliProcess.jsx";
import AboutNuili from "./Components/About-niuli/AboutNuili.jsx";

function App() {
  const [homepagedata, setHomepagedata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.qa.niulihome.com/customer/homeScreenCustomerWebWithoutLogin",
          { platform: "web" }
        );
        console.log(response.data);
        setHomepagedata(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Banner homepagedata={homepagedata} />
      <AboutNuili homepagedata={homepagedata} />
      <Content homepagedata={homepagedata} />
      <NuiliProcess homepagedata={homepagedata} />
      <Whynuili homepagedata={homepagedata} />
      <Tableform homepagedata={homepagedata} />
      <NuiliComfort homepagedata={homepagedata} />
      <QualityProduct />
      <Designers homepagedata={homepagedata} />
      <BookanAppointment />
      <Footer />
    </div>
  );
}

export default App;
