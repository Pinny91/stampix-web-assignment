import logo from "../assets/logo-white-on-transparent.png";

interface Props {
  setLang: Function;
}

function Header({ setLang }: Props) {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" height="70" />
      <div className="lang-options">
        <div onClick={() => setLang("NL")}>NL</div>
        <div onClick={() => setLang("FR")}>FR</div>
        <div onClick={() => setLang("EN")}>EN</div>
      </div>
    </header>
  );
}

export default Header;
