
import './App.css';
import CitySearch from "./CitySearch";
import CurrentWeather from "./CurrentWeather";
import FutureDays from "./FutureDays";
import Footer from "./Footer";

function App() {
  return (
   <div className="App">
      <div className="container">
        <div className="card maincard">
          <div className="card-body">
            <CitySearch />
            <CurrentWeather />
            <FutureDays />
          </div>
        </div>
        <div>
          <Footer />
        </div>
        <div>
          <script src="src/index.js"></script>
        </div>
      </div>
    </div>
  );
}

export default App;
