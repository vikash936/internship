import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faToggleOff,
  faLocationArrow,
  faSun,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "./container";

function App() {
  return (
    <div className="container">
      <div className="row top">
        <FontAwesomeIcon
          className="col add"
          icon={faSquarePlus}
          style={{ color: "#ffffff" }}
        />
        <div className="col dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="col toggle">
          C°
          <FontAwesomeIcon icon={faToggleOff} style={{ color: "#f2f2f2" }} />
          F°
        </div>
      </div>
      <img
        className="img"
        src="img/tall-business-building-skyscraper-chicago-us-with-beautiful-pink-clouds-blue-sky.jpg"
        alt=""
        srcset=""
      />
      <div className="city">
        <div class="row row-cols-2">
          <div class="col">
            <FontAwesomeIcon
              icon={faLocationArrow}
              style={{ color: "#f4f5f5" }}
            />
            Chennai,TN
          </div>
          <div class="col">
            <FontAwesomeIcon icon={faSun} style={{ color: "#f9fafa" }} />
            06:15
          </div>
          <div class="col">Today 07 jul</div>
          <div class="col">
            <FontAwesomeIcon icon={faSun} style={{ color: "#f9fafa" }} />
            19:32
          </div>
        </div>
      </div>
      <div className="temp">
        <FontAwesomeIcon
          className="left"
          icon={faChevronLeft}
          style={{ color: "#d3d4d4" }}
        />
        <span className="deg">30°</span>
        <FontAwesomeIcon
          className="right"
          icon={faChevronRight}
          style={{ color: "#d3d4d4" }}
        />
      </div>
      <div className="weather">
        <FontAwesomeIcon icon={faSun} style={{ color: "#f1f2f3" }} />
        Sunny
      </div>

      <Container />
    </div>
  );
}

export default App;
