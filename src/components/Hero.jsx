import Navigation from "../components/Navigation";
import bot from "../assets/hero-background.svg";
import bg from "../assets/hero-bg.svg";
import mob from "../assets/hero-bg-mob.svg";
import useWindowDimensions from "../utils/useWindowDimensions";

const Hero = () => {
  const { height, width } = useWindowDimensions();
  const breakpoint = 992;
  return (
    <section className="hero">
      <Navigation />
      <div>
        {width < breakpoint ? (
          <img src={mob} className="bg-img bg-mob" />
        ) : (
          <img src={bg} className="bg-img" />
        )}
      </div>

      <img src={bot} className="bot-img" />
    </section>
  );
};

export default Hero;
