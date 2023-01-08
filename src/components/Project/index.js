import timedJavascriptQuiz from "../../assets/images/timed-javascript-quiz.jpg";
import randomPassGenerator from "../../assets/images/random-pass-generator.jpg";
import theMetaVerse from "../../assets/images/screenshot.png";
import workDayScheduler from "../../assets/images/work-day-scheduler.jpg";
import readMeGenerator from "../../assets/images/read-me-generator.jpg";
import forecastGenerator from "../../assets/images/weather-forecast.jpg";
import InfoModal from "../Modal";

const Project = () => {
  const projects = [
    {
      id: 0,
      title: "Timed JavaScript Quiz",
      img: timedJavascriptQuiz,
      deployed: "https://mffonua.github.io/Timed-JavaScript-Quiz/",
      git: "https://github.com/mffonua/Timed-JavaScript-Quiz",
    },
    {
      id: 1,
      title: "Random Password Generator",
      img: randomPassGenerator,
      deployed: "https://mffonua.github.io/Random-Password-Generator/",
      git: "https://github.com/mffonua/Random-Password-Generator",
    },
    {
      id: 2,
      title: "The Metaverse",
      img: theMetaVerse ,
      deployed: "https://github.com/mffonua/Modern-Website",
      git: "https://github.com/mffonua/Modern-Website",
    },
    {
      id: 3,
      title: "Work Day Scheduler",
      img: workDayScheduler,
      deployed: "https://mffonua.github.io/Schedule-of-the-Day/",
      git: "https://github.com/mffonua/Schedule-of-the-Day",
    },
    {
      id: 4,
      title: "Readme.md Generator",
      img: readMeGenerator,
      deployed: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      git: "https://github.com/mffonua/readMe-Generator",
    },
    {
      id: 5,
      title: "Forecast Generator",
      img: forecastGenerator,
      deployed: "https://mffonua.github.io/Weather-forecast/",
      git: "https://github.com/mffonua/Weather-forecast",
    },
  ];
  return (
    <section className="container pt-4">
      <h1 className="pb-4 text-center">Projects</h1>
      <div className="row align-items-center justify-content-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-12 col-md-8 col-lg-6 text-center"
          >
            <div className="m-2 p-2 grow">
              <InfoModal project={project}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;