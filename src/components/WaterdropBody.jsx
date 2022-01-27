import { useStateValue } from "../context/StateProvider";
import "../styles/WaterdropBody.css";

export default function WaterdropBody({ children, title, img, url }) {
  const [, dispatch] = useStateValue();

  return (
    <a
      className="WaterdropBody"
      onMouseEnter={() => {
        dispatch({
          type: "MOUSE_EVENT",
          trigger: true,
        });
      }}
      onMouseLeave={() => {
        dispatch({
          type: "MOUSE_EVENT",
          trigger: false,
        });
      }}
      href={url}
    >
      <div className="WaterdropBody_wrapper">
        <img src={img} alt="portfolio-img" className="WaterdropBody_img" />
        <div className="WaterdropBody_textBlock">
          {/* <h1 className="WaterdropBody_title" title={title}>
            {title}
          </h1> */}
          <WordsSplit text={title}/>
          <p className="WaterdropBody_text">(Technologies Used):</p>
          <p className="WaterdropBody_text">{children}</p>
        </div>
      </div>
    </a>
  );
}

const WordsSplit = ({ text }) => {
  const words = text.split(/\s+/);
  console.log('words: ', words);
  
  return (
    <span>
      {words.map((word, index) => (
        <span key={index} title={word} className="WaterdropBody_titleWord">
          {word}
        </span>
      ))}
    </span>
  )
}
