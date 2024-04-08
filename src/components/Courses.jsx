import { useContext } from "react";
import bg from "../assets/site-bg.svg";
import CoursesEng from "./mini-components/CoursesEng";
import CoursesViet from "./mini-components/CoursesViet";
import { Context } from "../states/GlobalContext";

const Courses = () => {
  const { isEnglish } = useContext(Context);
  return (
    <section className="courses">
      <img src={bg} className="bg" />
      <div className="container">
        {isEnglish ? <CoursesEng /> : <CoursesViet />}
      </div>
    </section>
  );
};

export default Courses;
