import Navigation from "../components/Navigation";
import top from "../assets/nav-background.svg";
import bot from "../assets/hero-background2.svg";
import bg from "../assets/hero-illustration2.svg";
import mob from "../assets/hero-mob-illustration2.svg";
import useWindowDimensions from "../utils/useWindowDimensions";

const Hero = () => {
  const { height, width } = useWindowDimensions();
  const breakpoint = 700;
  return (
    <section className="hero" id="home">
      <div>
        <img src={top} className="top-img" />
        <Navigation />
      </div>

      <div className="hero-container container">
        {width < breakpoint ? (
          <img src={mob} className="bg-img bg-mob" />
        ) : (
          <img src={bg} className="bg-img" />
        )}
      </div>
      <div>
        <img src={bot} className="bot-img" />
      </div>
    </section>
  );
};

export default Hero;
