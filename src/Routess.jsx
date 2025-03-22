import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import LevelOne from "./components/levelOne/LevelOne";
import LevelTwo from "./components/levelTwo/LevelTwo";
import LevelThree from "./components/levelThree/LevelThree";
import LevelFour from "./components/levelFour/LevelFour";
import WeatherContainer from "./components/WeatherApp/WeatherContainer";
const Routess = () => {
  return (
    <Router>
      <div>
        <div className="header">
          <p>
            <Link to="/">Home</Link>
          </p>
          <h2>Interview Questions :</h2>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/levelOne" element={<LevelOne />} />
          <Route path="/levelTwo" element={<LevelTwo />} />
          <Route path="/levelThree" element={<LevelThree />} />
          <Route path="/levelFour" element={<LevelFour />} />
          <Route path="/weatherApp" element={<WeatherContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routess;
