import "../styles/Home.css";
import Waterdrop from "./Waterdrop";
import WaterdropBody from "./WaterdropBody";
import facebook from "../assets/images/facebook.png";
import biblehouse from "../assets/images/biblehouse.png";

function Home() {
  return (
    <div className="Home">
      <h1 title="HEON YIM" className="Home_header">
        HEON YIM
      </h1>

      <div className="Home_content">
        <Waterdrop>
          <WaterdropBody
            title={`Facebook (Meta) Clone`}
            img={facebook}
            url={"https://clone-1-gp5gdc6n6-12345120.vercel.app/"}
          >
            {`Next.js, React, TailwindCSS, NextAuth (OAuth), FireBase`}
          </WaterdropBody>
        </Waterdrop>
        <Waterdrop>
          <WaterdropBody
            title={`BibleHouse`}
            img={biblehouse}
            url={"https://www.biblehouse.us"}
          >
            {`Next.js, React, TailwindCSS, Contentful (headless CMS)`}
          </WaterdropBody>
        </Waterdrop>
        {/* <Waterdrop>
          <WaterdropBody title={`Amazon (Meta) Clone`}>
            {`React, FireBase`}
          </WaterdropBody>
        </Waterdrop> */}
      </div>
    </div>
  );
}

export default Home;
