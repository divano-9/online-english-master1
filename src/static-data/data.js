import family from "../assets/photos/family.jpg";
import business from "../assets/photos/business.jpg";
import housewife from "../assets/photos/housewife.jpg";
import student from "../assets/photos/student.jpg";
import blogImg2 from "../assets/blog/blog-img-2.png";
import blogImg3 from "../assets/blog/blog-img-3.png";

const data = {
  eng: {
    course: [
      {
        id: 1,
        img: family,
        title: "For Kids:",
        txt: "Invest in your child's future with fun, interactive courses that build confidence and language skills. Monitor their progress and be part of their learning journey without leaving home.",
      },
      {
        id: 2,
        img: student,
        title: "For the Diligent Students:",
        txt: "Whether preparing for international opportunities or aiming to excel in exams like IELTS, our courses are designed to meet your academic goals. Learn at your own pace, focusing on areas of interest.",
      },
      {
        id: 3,
        img: housewife,
        title: "For the Dedicated Housewives:",
        txt: "Enhance your communication skills, assist your children with their homework, and enjoy English shows without subtitles. Learn at your own pace while managing your household responsibilities.",
      },
      {
        id: 4,
        img: business,
        title: "For the Busy Professionals:",
        txt: "Maximize your time with efficient, impactful learning tailored to your business needs. Prepare for international conferences, excel in global markets, and communicate effectively with international partners from your office or home.",
      },
    ],
    choose: [
      ["Flexibility: Learn anytime, anywhere."],
      ["Personalization: Courses tailored to your goals and interests."],
      ["Efficiency: One-on-one lessons focused on your progress."],
      ["Technology: User-friendly platform accessible from any device."],
      ["Community: Join a supportive community of learners."],
    ],
    blog: [
      {
        title: "Advantages of Online English Classes",
        img: blogImg2,
        txt: [
          {
            bold: "Flexibility: ",
            paragraph:
              "One of the most notable advantages is the flexibility of learning at your own pace and time. Whether you're balancing work, studies, or personal commitments, online classes adjust to your schedule, not the other way around.",
          },
          {
            bold: "Comfort: ",
            paragraph:
              "Another significant advantage is the ability to learn from your own home. Forget about pushing in buses, delays, traffic jams, and the stress of finding a parking spot. Save time, energy, and money by learning from your bed, living room, or hotel while on vacation.",
          },
          {
            bold: "Accessibility: ",
            paragraph:
              "Geography is no longer a barrier. With an internet connection, you have access to quality education in English from foreign teachers.",
          },
          {
            bold: "Resource Diversity: ",
            paragraph:
              "Online platforms offer an abundance of materials—e-books, videos, podcasts, interactive quizzes—that cater to different learning styles, ensuring a holistic approach to language acquisition.",
          },
          {
            bold: "Personalized Learning: ",
            paragraph:
              "Many online platforms offer a personalized learning experience, adjusting to your skill level and focusing on areas that require improvement.",
          },
          {
            bold: "Cost Effectiveness: ",
            paragraph:
              "Online courses are often more affordable than traditional face-to-face classes, eliminating transportation and material costs.",
          },
          {
            bold: "Environmental Protection: ",
            paragraph:
              "Since you don't travel by car or bus and books aren't printed, no exhaust gasses are emitted and no trees are cut down. Online English classes are a perfect solution for environmentally conscious people who want to improve their language skills.",
          },
        ],
      },
      {
        title: "Disadvantages of Online English Classes",
        img: blogImg3,
        txt: [
          {
            bold: "Lack of In-Person Interaction: ",
            paragraph:
              "The absence of face-to-face communication can be a downside for those who thrive in traditional classrooms.",
          },
          {
            bold: "Self-Discipline Required: ",
            paragraph:
              "Online learning requires a high level of self-motivation and discipline. Without it, keeping up with the course can become challenging.",
          },
          {
            bold: "Technical Problems: ",
            paragraph:
              "Dependence on technology means that internet problems, power outages, or computer bugs can disrupt learning, leading to poor connection in class, interruptions, or even a missed class.",
          },
          {
            bold: "Distractions: ",
            paragraph:
              "Since classes are attended from home or a similar environment, there is a possibility that parents, children, or pets might interrupt the class. A doorbell, lunch, or a game in another tab can also divert attention and disrupt concentration.",
          },
        ],
      },
      {
        title: "How to Succeed in Online English Classes",
        txt: [
          {
            bold: "Establish a Routine: ",
            paragraph:
              "Consistency is key. Set a regular schedule to maintain continuity in your learning.",
          },
          {
            bold: "Actively Participate: ",
            paragraph:
              "Participate in forums, complete interactive exercises, and attend live sessions if available. Speak as much as possible during classes.",
          },
          {
            bold: "Set Realistic Goals: ",
            paragraph:
              "Define clear, achievable goals to stay motivated and track your progress.",
          },
          {
            bold: "Create a Conducive Learning Environment: ",
            paragraph:
              "Ensure you have a quiet, comfortable space dedicated to your studies.",
          },
          {
            bold: "Leverage Technology: ",
            paragraph:
              "Use available tools and apps to enhance your learning experience. Apps like Duolingo or Babbel can be great for vocabulary building. Websites like BBC Learning English offer a range of materials tailored to different levels.",
          },
        ],
      },
      {
        title: "Choosing the Right Online English Program",
        txt: [
          {
            bold: "Accreditation: ",
            paragraph:
              "Check the credibility of the program. Accredited courses are more likely to be of quality and recognized by employers and educational institutions.",
          },
          {
            bold: "Reviews and Testimonials: ",
            paragraph:
              "Feedback from past students can provide valuable insights into the effectiveness of the course.",
          },
          {
            bold: "Course Structure: ",
            paragraph:
              "Ensure the curriculum aligns with your goals, whether you're learning English for travel, business, or academic purposes.",
          },
          {
            bold: "Instructor Qualifications: ",
            paragraph:
              "Qualified, experienced instructors can significantly enhance your learning experience.",
          },
        ],
      },
    ],
  },
  viet: {
    course: [
      {
        id: 1,
        img: family,
        title: "Dành cho Trẻ Em:",
        txt: "Đầu tư vào tương lai của con bạn với các khóa học vui nhộn, tương tác giúp xây dựng sự tự tin và kỹ năng ngôn ngữ. Theo dõi tiến trình của chúng và tham gia vào hành trình học tập của chúng mà không cần rời khỏi nhà.",
      },
      {
        id: 2,
        img: student,
        title: "Dành cho Học Sinh Siêng Năng:",
        txt: "Dù đang chuẩn bị cho cơ hội quốc tế hay muốn xuất sắc trong các kỳ thi như IELTS, các khóa học của chúng tôi được thiết kế để đáp ứng mục tiêu học thuật của bạn. Học theo tốc độ của riêng bạn, tập trung vào các lĩnh vực quan tâm.",
      },
      {
        id: 3,
        img: housewife,
        title: "Dành cho Những Bà Nội Trợ Tận Tâm:",
        txt: "Nâng cao kỹ năng giao tiếp, hỗ trợ con cái bạn với bài tập về nhà và thưởng thức các chương trình tiếng Anh mà không cần phụ đề. Học theo tốc độ của bạn trong khi quản lý trách nhiệm gia đình.",
      },
      {
        id: 4,
        img: business,
        title: "Dành cho Những Người Làm Việc Bận Rộn:",
        txt: "Tối đa hóa thời gian của bạn với việc học hiệu quả, có ảnh hưởng, được cá nhân hóa theo nhu cầu kinh doanh của bạn. Chuẩn bị cho các hội nghị quốc tế, xuất sắc trong thị trường toàn cầu và giao tiếp hiệu quả với các đối tác quốc tế ngay từ văn phòng hoặc nhà của bạn.",
      },
    ],
    choose: [
      ["Linh Hoạt: Học bất cứ lúc nào, bất cứ nơi đâu."],
      ["Cá Nhân Hóa: Các bài học cá nhân tập trung vào tiến trình của bạn."],
      ["Hiệu Quả: Các bài học cá nhân tập trung vào tiến trình của bạn."],
      [
        "Công Nghệ: Nền tảng thân thiện với người dùng, có thể truy cập từ bất kỳ thiết bị nào.",
      ],
      ["Cộng Đồng: Tham gia cộng đồng học viên hỗ trợ lẫn nhau."],
    ],
    blog: [
      {
        title: "Lợi ích của Các Lớp Học Tiếng Anh Trực Tuyến",
        img: blogImg2,
        txt: [
          {
            bold: "Linh Hoạt: ",
            paragraph:
              "Một trong những lợi ích nổi bật nhất là khả năng học tập theo tốc độ và thời gian riêng của bạn. Dù bạn đang cân bằng giữa công việc, học tập hay các cam kết cá nhân, các lớp học trực tuyến sẽ thích nghi với lịch trình của bạn, chứ không phải ngược lại.",
          },
          {
            bold: "Thoải Mái: ",
            paragraph:
              "Một lợi ích đáng kể khác là khả năng học tập ngay tại nhà bạn. Quên đi việc chen lấn trên xe buýt, sự chậm trễ, kẹt xe và căng thẳng khi tìm chỗ đậu xe. Tiết kiệm thời gian, năng lượng và tiền bạc bằng cách học từ giường, phòng khách hoặc khách sạn trong khi bạn đang đi nghỉ.",
          },
          {
            bold: "Khả Năng Truy Cập: ",
            paragraph:
              "Địa lý không còn là rào cản. Với kết nối internet, bạn có thể tiếp cận với giáo dục chất lượng cao về tiếng Anh từ các giáo viên nước ngoài.",
          },
          {
            bold: "Đa Dạng Tài Nguyên: ",
            paragraph:
              "Các nền tảng trực tuyến cung cấp nhiều tài liệu phong phú—sách điện tử, video, podcast, câu đố tương tác—phù hợp với nhiều phong cách học tập, đảm bảo một cách tiếp cận toàn diện trong việc học ngôn ngữ.",
          },
          {
            bold: "Học Tập Cá Nhân Hóa: ",
            paragraph:
              "Nhiều nền tảng trực tuyến cung cấp trải nghiệm học tập cá nhân hóa, điều chỉnh theo trình độ kỹ năng của bạn và tập trung vào các lĩnh vực cần cải thiện",
          },
          {
            bold: "Hiệu Quả Chi Phí: ",
            paragraph:
              "Các khóa học trực tuyến thường rẻ hơn so với các lớp học truyền thống trực tiếp, loại bỏ chi phí đi lại và nguyên liệu.",
          },
          {
            bold: "Bảo Vệ Môi Trường: ",
            paragraph:
              "Bởi vì bạn không di chuyển bằng ô tô hay xe buýt và sách không được in, không có khí thải và không có cây nào bị chặt. Các lớp học tiếng Anh trực tuyến là giải pháp hoàn hảo cho những người ý thức được môi trường và muốn cải thiện kỹ năng ngôn ngữ của mình.",
          },
        ],
      },
      {
        title: "Nhược điểm của Các Lớp Học Tiếng Anh Trực Tuyến",
        img: blogImg3,
        txt: [
          {
            bold: "Thiếu Tương Tác Trực Tiếp: ",
            paragraph:
              "Sự vắng mặt của giao tiếp mặt đối mặt có thể là một nhược điểm đối với những người phát triển tốt trong môi trường học tập truyền thống.",
          },
          {
            bold: "Yêu Cầu Tự Kỷ Luật: ",
            paragraph:
              "Học trực tuyến đòi hỏi mức độ tự động viên và kỷ luật cao. Nếu không có điều đó, việc theo kịp khóa học có thể trở nên thách thức.",
          },
          {
            bold: "Vấn Đề Kỹ Thuật: ",
            paragraph:
              "Sự phụ thuộc vào công nghệ có nghĩa là các vấn đề về internet, mất điện, hoặc lỗi máy tính có thể làm gián đoạn việc học, dẫn đến kết nối kém trong lớp, gián đoạn, hoặc thậm chí bỏ lỡ một buổi học.",
          },
          {
            bold: "Sự Phân Tâm: ",
            paragraph:
              "Vì các lớp học được tham dự tại nhà hoặc một môi trường tương tự, có khả năng bị gián đoạn bởi cha mẹ, trẻ em, hoặc thú cưng. Tiếng chuông cửa, bữa trưa, hoặc một trò chơi trên tab khác cũng có thể làm phân tâm và làm gián đoạn sự tập trung.",
          },
        ],
      },
      {
        title: "Cách Thành Công trong Các Lớp Học Tiếng Anh Trực Tuyến",
        txt: [
          {
            bold: "Thiết Lập Thói Quen: ",
            paragraph:
              "Sự nhất quán là chìa khóa. Hãy thiết lập một lịch trình đều đặn để duy trì sự liên tục trong việc học của bạn.",
          },
          {
            bold: "Tham Gia Tích Cực: ",
            paragraph:
              "Tham gia vào các diễn đàn, hoàn thành các bài tập tương tác, và tham dự các buổi học trực tiếp nếu có. Hãy nói càng nhiều càng tốt trong các lớp học.",
          },
          {
            bold: "Đặt Mục Tiêu Thực Tế: ",
            paragraph:
              "Xác định các mục tiêu rõ ràng, có thể đạt được để giữ động lực và theo dõi tiến trình của bạn.",
          },
          {
            bold: "Tạo Môi Trường Học Tập Thuận Lợi: ",
            paragraph:
              "Đảm bảo bạn có một không gian yên tĩnh, thoải mái dành riêng cho việc học.",
          },
          {
            bold: "Tận Dụng Công Nghệ: ",
            paragraph:
              "Sử dụng các công cụ và ứng dụng có sẵn để nâng cao trải nghiệm học tập của bạn. Các ứng dụng như Duolingo hoặc Babbel có thể rất tốt cho việc xây dựng từ vựng. Các trang web như BBC Learning English cung cấp nhiều tài liệu phù hợp với các cấp độ khác nhau.",
          },
        ],
      },
      {
        title: "Chọn Chương Trình Học Tiếng Anh Trực Tuyến Phù Hợp",
        txt: [
          {
            bold: "Chứng Nhận: ",
            paragraph:
              "Kiểm tra tính xác thực của chương trình. Các khóa học được chứng nhận thường có chất lượng cao và được các nhà tuyển dụng và cơ sở giáo dục công nhận.",
          },
          {
            bold: "Đánh Giá và Lời Chứng Thực: ",
            paragraph:
              "Phản hồi từ các học viên trước đây có thể cung cấp cái nhìn sâu sắc quý giá về hiệu quả của khóa học.",
          },
          {
            bold: "Cấu Trúc Khóa Học: ",
            paragraph:
              "Đảm bảo chương trình học phù hợp với mục tiêu của bạn, dù bạn đang học tiếng Anh cho mục đích du lịch, kinh doanh hay học thuật.",
          },
          {
            bold: "Trình Độ Giảng Viên: ",
            paragraph:
              "Các giảng viên có trình độ và kinh nghiệm có thể cải thiện đáng kể trải nghiệm học tập của bạn.",
          },
        ],
      },
    ],
  },
};

export default data;
