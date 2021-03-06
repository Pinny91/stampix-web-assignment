import "./App.scss";
import Header from "./components/Header";
import ConsumerCard from "./components/ConsumerCard";
import BusinessCard from "./components/BusinessCard";
import React from "react";
function App() {
  const [lang, setLang] = React.useState("EN");

  return (
    <div className="app">
      <Header setLang={setLang} />
      <div className="content">
        <ConsumerCard lang={lang} />
        <BusinessCard lang={lang} />
      </div>
    </div>
  );
}

export default App;
