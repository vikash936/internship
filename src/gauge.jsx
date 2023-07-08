import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import "./chart.css";

const GaugeChart = () => {
  const value = 8; // The value to be displayed on the gauge
  const minValue = 0; // The minimum value of the gauge
  const maxValue = 100; // The maximum value of the gauge
  const radius = 60; // The radius of the gauge
  const strokeWidth = 15; // The stroke width of the gauge
  const valueColor = "	#0096FF"; // The color of the value portion
  const emptyColor = "#808080"; // The color of the empty portion

  // Calculate the angle based on the value
  const angle = (value / (maxValue - minValue)) * 180;

  const chartWidth = radius * 2;
  const chartHeight = radius + strokeWidth;

  return (
    <div className="gauge">
      <FontAwesomeIcon
        className="needle"
        icon={faLocationPin}
        rotation={270}
        style={{ color: "#898b90" }}
      />
      <svg
        width={chartWidth}
        height={chartHeight}
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke={emptyColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke={valueColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${angle}, 20000`}
          transform={`rotate(-90, ${radius}, ${radius})`}
        />
        <text
          x={radius}
          y={radius + strokeWidth / 2}
          textAnchor="middle"
          fontSize="20px"
        >
          {value}km/h
        </text>
      </svg>
    </div>
  );
};

export default GaugeChart;
