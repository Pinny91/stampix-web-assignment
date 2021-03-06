import phone from "../assets/Phone.png";

interface Props {
  lang: string;
}

function ConsumerCard({ lang }: Props) {
  const langs = [
    {
      lang: "EN",
      subTitle: "For consumers",
      title: "Install the Stampix App and order prints in just a few clicks",
      button: "START PRINTING",
    },
    {
      lang: "NL",
      subTitle: "Voor mensen",
      title: "Installer de Stampix App en bestel prints in een paar klikken",
      button: "START PRINTEN",
    },
  ];
  let langText = langs.find((l) => l.lang === lang);
  if (!langText) langText = langs[0];
  return (
    <div className="card consumer-card">
      <div className="sub-title">{langText.subTitle}</div>
      <div className="title">{langText.title}</div>
      <div
        className="button"
        onClick={() => window.open("https://stampix.com", "_self")}
      >
        {langText.button}
      </div>
      <div className="image">
        <img src={phone} alt="" />
      </div>
    </div>
  );
}
ConsumerCard.propTypes = {
  lang: String,
};
export default ConsumerCard;
