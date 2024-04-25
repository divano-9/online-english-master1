import { useContext } from "react";
import { Context } from "../states/GlobalContext.jsx";
import top from "../assets/nav-background-2.svg";
import bot from "../assets/hero-background2.svg";
import soloEng from "../assets/prices/solo-eng.png";
import soloViet from "../assets/prices/solo-viet.png";
import groupEng from "../assets/prices/group-eng.png";
import groupViet from "../assets/prices/group-viet.png";

const Pricing = () => {
  const { isEnglish } = useContext(Context);

  return (
    <section className="pricing white-bg" id="pricing">
      <img alt="topImg" src={top} className="top-img" />
      <div className="container">
        {isEnglish ? (
          <div className="price-eng">
            <img src={soloEng} className="price"></img>
            <img src={groupEng} className="price"></img>
          </div>
        ) : (
          <div className="price-viet">
            <img src={soloViet} className="price"></img>
            <img src={groupViet} className="price"></img>
          </div>
        )}
      </div>
      <img src={bot} className="bot-img" />
    </section>
  );
};

export default Pricing;
