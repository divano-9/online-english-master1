import { useContext } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/site-bg.svg";
import CoursesEng from "./mini-components/CoursesEng";
import CoursesViet from "./mini-components/CoursesViet";
import CoursesSrb from "./mini-components/CoursesSrb";
import { Context } from "../states/GlobalContext";

const Courses = () => {
  const { language } = useContext(Context);
  return (
    <section className="courses purple-bg" id="courses">
      {/* <img src={bg} className="bg" /> */}
      <div className="container">
        {language === "eng" ? (
          <CoursesEng />
        ) : language === "srb" ? (
          <CoursesSrb />
        ) : (
          <CoursesViet />
        )}
        <button className="contact-btn">
          <Link to="/#contact">Sign Up</Link>
        </button>
      </div>
    </section>
  );
};

export default Courses;
