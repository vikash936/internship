import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloudSun,
  faCloud,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "./chart.css";
const Chart = () => {
  return (
    <div class="container3">
      <div className="row c-head">
        <div className="col-8 hrs">Upcoming hours</div>
        <div className="col precp">
          Rain precipitation
          <FontAwesomeIcon
            icon={faChevronUp}
            rotation={180}
            style={{ color: "#ababab" }}
          />
        </div>
        <div className="col">
          <div className="days">
            Next days
            <FontAwesomeIcon
              icon={faChevronUp}
              rotation={90}
              style={{ color: "#d1d1d1" }}
            />
          </div>
        </div>
      </div>
      <div className="poly"></div>
      <div class="row row-cols-5 row-cols-lg-6 area">
        <div class="col">
          Now
          <div>
            <FontAwesomeIcon icon={faSun} style={{ color: "#5388e4" }} />{" "}
          </div>
        </div>
        <div class="col">
          11:00
          <div>
            <FontAwesomeIcon icon={faSun} style={{ color: "#5388e4" }} />{" "}
          </div>
        </div>
        <div class="col">
          12:00
          <div>
            {" "}
            <FontAwesomeIcon icon={faCloudSun} style={{ color: "#5388e4" }} />
          </div>
        </div>
        <div class="col">
          13:00
          <div>
            <FontAwesomeIcon icon={faCloud} style={{ color: "#5388e4" }} />
          </div>
        </div>
        <div class="col">
          14:00
          <div>
            <FontAwesomeIcon icon={faCloud} style={{ color: "#5388e4" }} />
          </div>
        </div>
        <div class="col">
          15:00
          <div>
            <FontAwesomeIcon icon={faSun} style={{ color: "#5388e4" }} />{" "}
          </div>
        </div>

        <div class="col">30°</div>
        <div class="col">29°</div>
        <div class="col">28°</div>
        <div class="col">27°</div>
        <div class="col">27°</div>
        <div class="col">29°</div>
        <div class="col line"></div>
        <div class="col line"></div>
        <div class="col line"></div>
        <div class="col line"></div>
        <div class="col line"></div>
        <div class="col line"></div>
        <div class="col">23%</div>
        <div class="col">29%</div>
        <div class="col">58%</div>
        <div class="col">75%</div>
        <div class="col">33%</div>
        <div class="col">20%</div>
      </div>
    </div>
  );
};

export default Chart;
