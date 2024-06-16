import top from "../assets/nav-background-2.svg";
import testim from "../assets/photos/testimonials.png";
import bot from "../assets/hero-background2.svg";

const Testimonials = () => {
  return (
    <section className="testimonials white-bg">
      <img alt="topImg" src={top} className="top-img" />
      <div className="container">
        <div className="row">
          <div className="col-10 testim-container">
            <img alt="testimonial img" src={testim} className="testim-img" />
          </div>
        </div>
      </div>
      <img src={bot} className="bot-img" />
    </section>
  );
};

export default Testimonials;
