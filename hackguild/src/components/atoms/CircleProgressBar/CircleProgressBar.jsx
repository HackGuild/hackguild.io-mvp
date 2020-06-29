import React, { useState, useEffect } from "react"
import { string, number, bool, object } from "prop-types"
import "./CircleProgressBar.scss"

const INITIAL_OFFSET = 12.5
const circumference = 50
const circleConfig = {
  viewBox: "0 0 20 20",
  x: "50%",
  y: "50%",
  radio: "7.95774",
}

const CircleProgressBar = ({
  strokeColor,
  strokeWidth,
  innerText,
  legendText,
  percentage,
  trailStrokeWidth,
  trailStrokeColor,
  trailSpaced,
  speed,
}) => {
  const [progressBar, setProgressBar] = useState(0)
  const pace = percentage / speed
  const updatePercentage = () => {
    setTimeout(() => {
      setProgressBar(progressBar + 1)
    }, pace)
  }

  useEffect(() => {
    if (percentage > 0) updatePercentage()
  }, [percentage])

  useEffect(() => {
    if (progressBar < percentage) updatePercentage()
  }, [progressBar])

  return (
    <svg width="33%" height="33%" viewBox={circleConfig.viewBox}>
      <circle
        className="donut-ring"
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radio}
        fill="transparent"
        stroke={trailStrokeColor}
        strokeWidth={trailStrokeWidth}
        strokeDasharray={trailSpaced ? 1 : 0}
      />

      <circle
        className="donut-segment"
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radio}
        fill="transparent"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={`${(progressBar / 100) * circumference} ${
          circumference - (progressBar / 100) * circumference
        }`}
        strokeDashoffset={INITIAL_OFFSET}
      />

      <g className="chart-text">
        <text x="50%" y="55%" className="chart-number">
          {progressBar} %
        </text>
        <text x="50%" y="55%" className="chart-label">
          {innerText}
        </text>
      </g>
    </svg>
  )
}

CircleProgressBar.propTypes = {
  strokeColor: string,
  strokeWidth: number,
  innerText: string,
  legendText: string,
  percentage: number,
  trailStrokeWidth: number,
  trailStrokeColor: string,
  trailSpaced: bool,
  speed: number,
}

CircleProgressBar.defaultProps = {
  strokeColor: "#452081",
  strokeWidth: 0.75,
  innerText: "Completed",
  legendText: "",
  percentage: 0,
  trailStrokeWidth: 0.75,
  trailStrokeColor: "#ff534f",
  trailSpaced: false,
  speed: 8,
}

export default CircleProgressBar
