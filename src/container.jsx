import React from "react";
import Chart from "./chart";
import "./chart.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faCloudRain,
  faSun,
  faTemperatureEmpty,
  faUmbrella,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import GChart from "./gauge";

export const Container = () => {
  return (
    <div className="contain">
      <div className="row head">
        <div className="col-10 head1">
          <div>Welcome Back Isabella</div>
          <div className="head2">Checkout today's weather information</div>
        </div>
        <div className="col dots">
          <div className="dot dott"></div>
          <div className="dot dott"></div>
          <div className="dot dott"></div>
          <span className="col vector">
            <img className="isabel" src="img/girl.png" alt="" srcset="" />
          </span>
        </div>
      </div>
      <div>
        <Chart />
      </div>
      <div className="details">more details of today's weather</div>
      <table>
        <tr>
          <td className="tt">
            <div class=" row humidity box ">
              <div className="col-10">
                <b>Humidity</b>
              </div>
              <div className="col icon ">
                <FontAwesomeIcon
                  icon={faDroplet}
                  style={{ color: "#f7f7f8" }}
                />
              </div>
              <div className="percent">
                <b>82%</b>bad
              </div>
              <div class="con">
                <div class="row good">
                  <div class="col">good</div>
                  <div class="col">normal</div>
                  <div class="col">bad</div>
                </div>
                <div class="row ">
                  <div class="col">
                    <progress className="p1" value={32} />
                  </div>
                  <div class="col">
                    <progress className="p1" value={32} />
                  </div>
                  <div class="col">
                    <progress className="p1" value={22} max={100} />
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td className="tt">
            <div class=" row speed box">
              <div className="col-10">
                <b>wind</b>
              </div>
              <div className="col icon">
                <FontAwesomeIcon icon={faWind} style={{ color: "#f1f2f3" }} />
              </div>
              <div className=" ">
                <GChart />
              </div>
            </div>
          </td>
          <td className="tt">
            <div class=" precipitation row box">
              <div className="col-10">
                <b>precipitation</b>
              </div>
              <div className="col icon">
                <FontAwesomeIcon
                  icon={faCloudRain}
                  style={{ color: "#fafafa" }}
                />
              </div>
              <div className="percent">
                <b>1.4cm</b>
              </div>
              <div className="row prog3">
                <div className="col-1">
                  0 <progress className="precp-p" value={32} />
                </div>
                <div className="col-1">
                  10 <progress className="precp-p" value={50} max={100} />
                </div>
                <div className="col-1">
                  20 <progress className="precp-p" value={0} />
                </div>
                <div className="col-1">
                  30 <progress className="precp-p" value={0} />
                </div>
                <div className="col-1">
                  40 <progress className="precp-p" value={0} />
                </div>
                <div className="col-1">
                  50 <progress className="precp-p" value={0} />
                </div>
                <div className="col-1">
                  60 <progress className="precp-p" value={0} />
                </div>
                <div className="col-1">
                  70 <progress className="precp-p" value={0} />
                </div>
                <div className="col-1">
                  80 <progress className="precp-p" value={0} />
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="tt">
            <div class=" uv row box">
              <div className="col-10">
                <b>UV index</b>
              </div>
              <div className="col icon">
                <FontAwesomeIcon icon={faSun} style={{ color: "#f9fafa" }} />
              </div>
              <div className="percent">
                <b>4</b>medium
              </div>
              <div className="row uv-font">
                <div className="col-3">0-2</div>
                <div className="col-3">3-5</div>
                <div className="col-3">6-7</div>
                <div className="col-3">8-10</div>
              </div>
              <div className="row prog4">
                <div className="col ">
                  <progress className="uv-p" value={32} />
                </div>
                <div className="col">
                  <progress className="uv-p" value={50} max={100} />
                </div>
                <div className="col">
                  <progress className="uv-p" value={0} />
                </div>
                <div className="col">
                  <progress className="uv-p" value={0} />
                </div>
              </div>
            </div>
          </td>
          <td className="tt">
            <div class=" feels row box">
              <div className="col-10">
                <b>Feels like</b>
              </div>
              <div className="col icon">
                <FontAwesomeIcon
                  icon={faTemperatureEmpty}
                  style={{ color: "#f9fafa" }}
                />
              </div>
              <div className="percent">
                <b>30°</b>
              </div>
              <div className="col good">0°</div>
              <div className="col good">25°</div>
              <div className="col good">50°</div>
              <div>
                <progress className="feels-p" value={60} max={100} />
              </div>
            </div>
          </td>
          <td className="tt">
            <div class=" chance row box">
              <div className="col-10">
                <b>Chance of rain</b>
              </div>
              <div className="col-2 icon">
                <FontAwesomeIcon
                  icon={faUmbrella}
                  style={{ color: "#f7f7f7" }}
                />
              </div>
              <div className="percent">
                <b>42%</b>
              </div>
              <div className="row rain">
                <div className="col-2">0%</div>
                <div className="col-2">25%</div>
                <div className="col-3">50%</div>
                <div className="col-3">75%</div>
                <div className="col-2">100%</div>
              </div>
              <div>
                <progress className="chance-p" value={40} max={100} />
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};
