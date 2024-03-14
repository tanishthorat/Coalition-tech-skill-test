import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import slide1 from "/src/images/slide1.png";
import slide2 from "/src/images/slide2.png";
import tab1 from "/src/images/tab1.png";
import tab2 from "/src/images/tab2.png";
import Tabs from "./components/Tabs";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const hideHeaderThreshold = 1900;
  return (
    <>
      {scrollPosition > hideHeaderThreshold ? null : <Header />}
      <section id="main" className="flex justify-center">
        <div id="mainText">
          <h1 className="font-bold">
            <p id="text1">LOSANGELES</p>
            <p id="text2">MOUNTAINS</p>
          </h1>
        </div>
      </section>
      <section id="history" className="h-[1000px]">
        <div className="title">
          <span className="number">01.</span>
          <span className="heading">HISTORY</span>
        </div>
        <p className="w-[45%] text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante
          viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est.
          Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras
          scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
          hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec
          congue.
        </p>
        <div className="backdrop flex justify-center">
          <div className="carousel w-[60%] m-auto">
            <div className="mt-4">
              <Slider {...settings}>
                <div className="  text-black rounded-xl flex-wrap">
                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <img src={slide1} alt="slide1" className="h-40" />
                  </div>
                </div>
                <div className="  text-black rounded-xl">
                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <img src={slide2} alt="slide2" className="h-40" />
                  </div>
                </div>
                <div className="  text-black rounded-xl">
                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <img src={slide1} alt="slide3" className="h-40" />
                  </div>
                </div>
                <div className="  text-black rounded-xl">
                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <img src={slide2} alt="slide4" className="h-40" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="h-[1000px] ">
        <div className="title">
          <span className="number">02.</span>
          <span className="heading">TEAM</span>
        </div>
        <p className="text-left">
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida
          quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim
          tortor nec congue.
        </p>
        <Tabs />
        <div className="footer h-[120px] pt-3">
          <Footer />
        </div>
      </section>
    </>
  );
}

export default App;
