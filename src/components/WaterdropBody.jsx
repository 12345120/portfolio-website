import "../styles/WaterdropBody.css";

export default function WaterdropBody({ children, title, img }) {
  return (
    <div className="WaterdropBody">
      <div className="WaterdropBody_wrapper">
        <img src={img} alt="image" className="WaterdropBody_img"/>
        <div className="WaterdropBody_textBlock">
          <h1 className="WaterdropBody_title">{title}</h1>
          <p className="WaterdropBody_text">(Technologies Used):</p>
          <p className="WaterdropBody_text">{children}</p>
        </div>
      </div>
    </div>
  );
}
