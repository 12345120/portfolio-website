import "../styles/Home.css";
import Waterdrop from "./Waterdrop";
import WaterdropBody from "./WaterdropBody";
import { projectsList } from "../app_data/projectsList.jsx";

function Home() {
  return (
    <div className="Home">
      <h1 title="HEON YIM" className="Home_header">
        HEON YIM
      </h1>

      <div className="Home_content">
        {projectsList.map((project) => (
          <Waterdrop>
            <WaterdropBody
              title={project.title}
              img={project.img}
              url={project.url}>
              {project.technologies_used}
            </WaterdropBody>
          </Waterdrop>
        ))}
        
      </div>
    </div>
  );
}

export default Home;
