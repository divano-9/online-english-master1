import data from "../static-data/data.js";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import top from "../assets/nav-background.svg";
import bot from "../assets/hero-background2.svg";
import img1 from "../assets/blog/blog-img-1.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../states/GlobalContext";

const Blog = () => {
  const { language } = useContext(Context);

  return (
    <div className="blog white-bg">
      <div>
        <img src={top} className="top-img nav-top" />
        <Navigation />
      </div>
      <main className="blog-content">
        <div className="container">
          {language === "eng" ? (
            <div className="eng">
              <h1>
                Guide to Online English Classes: Everything You Need to Know
              </h1>
              <p>
                In the modern world, characterized by globalization, the use of
                modern technologies, and the constant need for information
                gathering, the English language emerges as a key tool for
                communication, education, and business. Technological
                advancements have revolutionized learning, making the English
                language more accessible than ever through online classes. This
                comprehensive guide delves into the essence of online English
                language learning, helping you navigate your way to linguistic
                proficiency.
              </p>
            </div>
          ) : language === "srb" ? (
            <div className="srb">
              <h1>
                Vodič za online časove engleskog jezika: Sve što trebate znati
              </h1>
              <p>
                Savremeni svet, koji karakteriše globalizacija, primena modernih
                tehnologija i stalna potreba za prikupljanjem informacija,
                engleski jezik pojavljuje se kao ključno sredstvo za
                komunikaciju, obrazovanje i poslovanje. Napredak tehnologije
                revolucionizovao je učenje, čineći engleski jezik dostupnijim
                nego ikad kroz online časove. Ovaj sveobuhvatan vodič zalazi u
                suštinu online učenja engleskog jezika, pomažući vam da
                upravljate vašim putem ka jezičkoj spretnosti.
              </p>
            </div>
          ) : (
            <div className="viet">
              <h1>
                Hướng dẫn về Các Lớp Học Tiếng Anh Trực Tuyến: Tất cả những điều
                bạn cần biết
              </h1>
              <p>
                Trong thế giới hiện đại, đặc trưng bởi toàn cầu hóa, việc sử
                dụng công nghệ hiện đại, và nhu cầu liên tục thu thập thông tin,
                tiếng Anh đã trở thành công cụ chính để giao tiếp, giáo dục, và
                kinh doanh. Sự tiến bộ của công nghệ đã cách mạng hóa việc học
                tập, làm cho ngôn ngữ tiếng Anh trở nên dễ tiếp cận hơn bao giờ
                hết thông qua các lớp học trực tuyến. Hướng dẫn toàn diện này sẽ
                đưa bạn vào bản chất của việc học tiếng Anh trực tuyến, giúp bạn
                điều hướng con đường để đạt được trình độ ngoại ngữ thành thạo.
              </p>
            </div>
          )}

          <div className="row">
            <div className="img-container col-9 col-lg-7">
              <img src={img1} alt="img-1" />
            </div>
          </div>
          {language === "eng"
            ? data.eng.blog.map((post, index) => {
                const { title, txt, img } = post;

                return (
                  <article key={index}>
                    <h2>{title}</h2>
                    {txt &&
                      txt.map((single, index) => {
                        const { bold, paragraph } = single;
                        return (
                          <p key={index + "a"}>
                            <b>{bold}</b>
                            {paragraph}
                          </p>
                        );
                      })}
                    {img && (
                      <div className="row">
                        <div className="img-container col-10 col-lg-7">
                          <img src={img} alt="blog image" loading="lazy" />
                        </div>
                      </div>
                    )}
                  </article>
                );
              })
            : language === "srb"
            ? data.srb.blog.map((post, index) => {
                const { title, txt, img } = post;

                return (
                  <article key={index}>
                    <h2>{title}</h2>
                    {txt &&
                      txt.map((single, index) => {
                        const { bold, paragraph } = single;
                        return (
                          <p key={index + "a"}>
                            <b>{bold}</b>
                            {paragraph}
                          </p>
                        );
                      })}
                    {img && (
                      <div className="row">
                        <div className="img-container col-10 col-lg-7">
                          <img src={img} alt="blog image" loading="lazy" />
                        </div>
                      </div>
                    )}
                  </article>
                );
              })
            : data.viet.blog.map((post, index) => {
                const { title, txt, img } = post;

                return (
                  <article key={index}>
                    <h2>{title}</h2>
                    {txt &&
                      txt.map((single, index) => {
                        const { bold, paragraph } = single;
                        return (
                          <p key={index + "a"}>
                            <b>{bold}</b>
                            {paragraph}
                          </p>
                        );
                      })}
                    {img && (
                      <div className="row">
                        <div className="img-container col-10 col-lg-7">
                          <img src={img} alt="blog image" loading="lazy" />
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}

          {language === "eng" ? (
            <div className="eng">
              <h2>Embracing the Future of Learning</h2>
              <p>
                Online English classes represent a significant step towards the
                democratization of education, offering students around the world
                the opportunity to master a key global language. Although there
                are challenges, the benefits are substantial, providing students
                with a flexible, affordable, and comprehensive platform for
                improving their English skills.
              </p>
              <p>
                Ready to elevate your English language knowledge to a higher
                level? Embrace the flexibility, convenience, and effectiveness
                of online learning. Start your journey today and unlock the
                doors to global opportunities. Your path to mastering English is
                just a click away—dive in and discover the power of language.
                Sign up for a free trial class here.
              </p>
            </div>
          ) : language === "srb" ? (
            <div className="srb">
              <h2>Prihvatanje budućnosti učenja</h2>
              <p>
                Online časovi engleskog jezika predstavljaju značajan korak ka
                demokratizaciji obrazovanja, nudeći učenicima širom sveta
                priliku da ovladaju ključnim globalnim jezikom. Iako postoje
                izazovi, prednosti su značajne, pružajući učenicima fleksibilnu,
                pristupačnu i sveobuhvatnu platformu za poboljšanje njihove
                veštine engleskog jezika.
              </p>
              <p>
                Spremni da podignete svoje znanje engleskog jezika na viši nivo?
                Prihvatite fleksibilnost, pogodnost i efikasnost online učenja.
                Počnite svoje putovanje danas i otključajte vrata globalnih
                mogućnosti. Vaš put ka ovladavanju engleskim jezikom je samo
                klik daleko—zaronite i otkrijte moć jezika.
              </p>
              <p>Prijavite se za besplatan probni čas ovde.</p>
            </div>
          ) : (
            <div className="viet">
              <h2>Đón Nhận Tương Lai của Việc Học</h2>
              <p>
                Các lớp học tiếng Anh trực tuyến đại diện cho một bước tiến quan
                trọng hướng tới sự dân chủ hóa giáo dục, mang đến cho học viên
                trên toàn thế giới cơ hội để thành thạo một ngôn ngữ toàn cầu
                quan trọng. Mặc dù có những thách thức, nhưng lợi ích là đáng
                kể, cung cấp cho học viên một nền tảng linh hoạt, phù hợp túi
                tiền và toàn diện để cải thiện kỹ năng tiếng Anh của họ.
              </p>
              <p>
                Bạn đã sẵn sàng nâng cao kiến thức tiếng Anh của mình lên một
                tầm cao mới? Hãy đón nhận sự linh hoạt, tiện lợi và hiệu quả của
                việc học trực tuyến. Bắt đầu hành trình của bạn ngay hôm nay và
                mở ra cánh cửa đến với các cơ hội toàn cầu. Con đường để thành
                thạo tiếng Anh của bạn chỉ cách một cú nhấp chuột—lặn vào và
                khám phá sức mạnh của ngôn ngữ. Đăng ký một lớp học thử miễn phí
                tại đây.
              </p>
            </div>
          )}
        </div>
        <div className="btn-container">
          <button className="contact-btn">
            <Link to="/#contact">Sign Up</Link>
          </button>
        </div>
      </main>

      <div>
        <img src={bot} className="bot-img" />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
