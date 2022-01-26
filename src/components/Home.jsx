import "../styles/Home.css";
import Waterdrop from "./Waterdrop";
import WaterdropBody from "./WaterdropBody";
import facebook from '../assets/images/facebook.png'

function Home() {
  
  return (
    <div className="Home">

      <h1 title="HEON YIM" className="Home_header">HEON YIM</h1>
      <div className="Home_content">
        <Waterdrop>
          <WaterdropBody title={`Facebook (Meta) Clone`} img={facebook}>
            {`Next.js, React, TailwindCSS, NextAuth (OAuth), FireBase`}
          </WaterdropBody>
        </Waterdrop>
        <Waterdrop>
          <WaterdropBody title={`BibleHouse`} >
            {`Next.js, React, TailwindCSS, Contentful (headless CMS)`}
          </WaterdropBody>
        </Waterdrop>
        <Waterdrop>
          <WaterdropBody title={`Amazon (Meta) Clone`}>
            {`React, FireBase`}
          </WaterdropBody>
        </Waterdrop>
        
        
        
      </div>
      
      
    </div>
  );
}

export default Home;
