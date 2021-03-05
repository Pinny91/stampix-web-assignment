import logo1 from "../assets/OrangeLogo.png";
import logo2 from "../assets/PlaymobilLogo.png";
import logo3 from "../assets/LuminusLogo.png";

function BusinessCard() {
  const logos = [logo1, logo2, logo3];
  return (
    <div
      className="card"
      style={{
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: "6px",
        borderBottomRightRadius: "6px",
      }}
    >
      <div className="sub-title">For business</div>
      <div className="title">Build emotional loyalty and brand engagement</div>
      <div className="button">STAMPIX FOR BUSINESS</div>
      <div className="image-row">
        {logos.map((l, index) => (
          <img key={index} src={l} alt="" />
        ))}
      </div>
    </div>
  );
}

export default BusinessCard;
