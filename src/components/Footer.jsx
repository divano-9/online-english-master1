import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import zaloL from "../assets/photos/zalo-ll.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="social" id="contact">
          <div className="social-media">
            <div className="facebook">
              <a href="https://www.facebook.com/profile.php?id=61554300797430">
                <FaFacebook className="fb icon" />
              </a>
            </div>
            <div className="instagram">
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fmaster1_oec%3Figsh%3DM2JnM3VlZ2p1ZTJ1%26utm_source%3Dqr%26fbclid%3DIwAR2aFnR85V45ppkTjcKnXCxMOMBeWIvOUxpIeHpOKlbvOM8B1QvQ5ZrBHIY&h=AT3p4LFVNqPA2-QvL3ibdT1C6Pai5wf0W2WRoHXUEv2c7UakpKOJQaPxq74H-86OL3nzYcfHGH9iEc2T5kyZbt1Dy7WiYcxuy1ynOd1qrJF-oRb_7TP7OTzuwNvBJG_gE9U">
                <FaInstagram className="insta icon" />
              </a>
            </div>
          </div>
          <div className="email-and-number">
            <div className="email">
              <MdEmail className="icon" />
              <p>master1.oec@gmail.com</p>
            </div>
            <div className="whatsapp">
              <FaWhatsappSquare className="icon" />
              <p>+381631155407</p>
            </div>
          </div>
          <div className="qr">
            <Zoom>
              <img src={zaloL} className="zalo" />
            </Zoom>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
