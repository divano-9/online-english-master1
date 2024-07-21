import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import top from "../assets/nav-background.svg";
import bot from "../assets/hero-background2.svg";
import bg from "../assets/hero-illustration3.svg";
import bgV from "../assets/hero-illustration3-v.svg";
import mob from "../assets/hero-mob-illustration3.svg";
import mobV from "../assets/hero-mob-illustration3-v.svg";
import useWindowDimensions from "../utils/useWindowDimensions";

const Hero = () => {
  const { language } = useContext(Context);

  const { height, width } = useWindowDimensions();
  const breakpoint = 700;
  return (
    <section className="hero white-bg" id="home">
      <div>
        <img src={top} className="top-img nav-top" />
        <Navigation />
      </div>

      <div className="hero-container container">
        {width < breakpoint ? (
          language === "eng" || language === "srb" ? (
            <img src={mob} className="bg-img bg-mob" />
          ) : (
            <img src={mobV} className="bg-img bg-mob" />
          )
        ) : language === "eng" || language === "srb" ? (
          <img src={bg} className="bg-img" />
        ) : (
          <img src={bgV} className="bg-img" />
        )}
      </div>
      <div>
        <img src={bot} className="bot-img" />
      </div>
    </section>
  );
};

export default Hero;
