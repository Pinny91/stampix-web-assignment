import logo from "../assets/logo-white-on-transparent.png";

interface Props {
  setLang: Function;
}

function Header({ setLang }: Props) {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" height="70" />
      <div className="lang-options">
        <button onClick={() => setLang("NL")}>NL</button>
        <button onClick={() => setLang("FR")}>FR</button>
        <button onClick={() => setLang("EN")}>EN</button>
      </div>
    </header>
  );
}

export default Header;
