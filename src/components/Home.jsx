import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="containers">
        <div className="container">
          <p>
            {" "}
            <Link to="/">Home</Link>
          </p>
        </div>
        <div className="container">
          <p>
            {" "}
            <Link to="/levelOne">Level One</Link>
          </p>
        </div>
        <div className="container">
          <p>
            {" "}
            <Link to="/levelTwo">Level Two</Link>
          </p>
        </div>
        <div className="container">
          <p>
            {" "}
            <Link to="/levelThree">Level Three</Link>
          </p>
        </div>
        <div className="container">
          <p>
            {" "}
            <Link to="/levelFour">Level Four</Link>
          </p>
        </div>
        <div className="container">
          <p>
            {" "}
            <Link to="/weatherApp">Weather App</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
