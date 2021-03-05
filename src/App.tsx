import "./App.scss";
import Header from "./components/Header";
import ConsumerCard from "./components/ConsumerCard";
import BusinessCard from "./components/BusinessCard";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <ConsumerCard />
        <BusinessCard />
      </div>
    </div>
  );
}

export default App;
