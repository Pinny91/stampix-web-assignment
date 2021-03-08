import logo1 from "../assets/OrangeLogo.png";
import logo2 from "../assets/PlaymobilLogo.png";
import logo3 from "../assets/LuminusLogo.png";

interface Props {
  lang: String;
}

function BusinessCard({ lang }: Props) {
  const logos = [logo1, logo2, logo3];
  const langs = [
    {
      lang: "EN",
      subTitle: "For business",
      title: "Build emotional loyalty and brand engagement",
      button: "STAMPIX FOR BUSINESS",
    },
    {
      lang: "NL",
      subTitle: "Voor bedrijven",
      title: "Bouw emotionele loyaliteit en merkbetrokkenheid op",
      button: "STAMPIX VOOR BEDRIJVEN",
    },
  ];
  let langText = langs.find((l) => l.lang === lang);
  if (!langText) langText = langs[0];

  return (
    <div className="card business-card">
      <div className="sub-title">{langText.subTitle}</div>
      <div className="title">{langText.title}</div>
      <button
        onClick={() => window.open("https://business.stampix.com", "_self")}
      >
        {langText.button}
      </button>
      <div className="image-row">
        {logos.map((l, index) => (
          <img key={index} src={l} alt="" />
        ))}
      </div>
    </div>
  );
}

export default BusinessCard;
