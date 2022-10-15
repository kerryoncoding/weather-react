
import './App.css';
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <div className="container">
        <div className="appBox">
          <CurrentWeather />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
