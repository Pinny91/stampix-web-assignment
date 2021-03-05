import phone from "../assets/Phone.png";

function ConsumerCard() {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "rgba(255, 232, 133, 0.5)",
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px",
      }}
    >
      <div className="sub-title">For consumers</div>
      <div className="title">
        Install the Stampix App and order prints in just a few clicks
      </div>
      <div className="button">START PRINTING</div>
      <img className="image" src={phone} alt="" />
    </div>
  );
}

export default ConsumerCard;
