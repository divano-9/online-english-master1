import { useContext } from "react";
import { Context } from "../states/GlobalContext.jsx";
import top from "../assets/nav-background-2.svg";
import bot from "../assets/hero-background2.svg";
import eng from "../assets/prices/eng.png";
import viet from "../assets/prices/viet.png";
import srb from "../assets/prices/srb.png";

const Pricing = () => {
  const { language } = useContext(Context);

  return (
    <section className="pricing white-bg" id="pricing">
      <img alt="topImg" src={top} className="top-img" />
      <div className="container">
        {language === "eng" ? (
          <div className="price-eng price-container">
            <img src={eng} className="price" loading="lazy"></img>
          </div>
        ) : language === "srb" ? (
          <div className="price-srb price-container">
            <img src={srb} className="price" loading="lazy"></img>
          </div>
        ) : (
          <div className="price-viet price-container">
            <img src={viet} className="price" loading="lazy"></img>
          </div>
        )}
      </div>
      <img src={bot} className="bot-img" />
    </section>
  );
};

export default Pricing;
