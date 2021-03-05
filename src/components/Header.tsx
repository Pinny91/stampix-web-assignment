import logo from "../assets/logo-white-on-transparent.png";

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" height="70" />
      <div className="lang-options">
        <div>NL</div>
        <div>FR</div>
        <div>EN</div>
      </div>
    </header>
  );
}

export default Header;
