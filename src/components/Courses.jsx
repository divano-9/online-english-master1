import { useContext } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/site-bg.svg";
import CoursesEng from "./mini-components/CoursesEng";
import CoursesViet from "./mini-components/CoursesViet";
import { Context } from "../states/GlobalContext";

const Courses = () => {
  const { isEnglish } = useContext(Context);
  return (
    <section className="courses" id="courses">
      <img src={bg} className="bg" />
      <div className="container">
        {isEnglish ? <CoursesEng /> : <CoursesViet />}
        <button className="contact-btn">
          <Link to="/#contact">Sign Up</Link>
        </button>
      </div>
    </section>
  );
};

export default Courses;
