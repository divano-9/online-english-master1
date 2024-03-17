import Navigation from "../components/Navigation";
import illustration from "../../public/assets/hero-illustration.svg";
import bot from "../assets/hero-background.svg";
import bg from "../assets/hero-bg.svg";

const Hero = () => {
  return (
    <section className="hero">
      <Navigation />
      {/* <div className="row">
        <div className="col-5 txt">
          <div>
            <h1>Master 1</h1>
            <p>Best Online Teaching School</p>
          </div>
        </div>
        <div className="col-7 img">
          <img src={illustration} />
        </div>
      </div>*/}
      <img src={bg} className="bg-img" />
      <img src={bot} className="bot-img" />
    </section>
  );
};

export default Hero;
