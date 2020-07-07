import React from "react"
import "./Statistics.scss"
import CircleProgressBar from "../../atoms/CircleProgressBar"

const Statistics = () => {
  return (
    <div className="statistics">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        crossOrigin="anonymous"
      ></link>
      <CircleProgressBar
        className="circle-progress"
        percentage={25}
        innerText="of schools"
      />
      <CircleProgressBar
        className="circle-progress"
        percentage={22}
        innerText="of students"
      />
      <CircleProgressBar
        className="circle-progress"
        percentage={13}
        innerText="of students"
      />
      <div className="row rowWithFullWidth">
        <div className="col">
          <p>
            teach computer programming as part of their curriculum.
          </p>
        </div>
        <div className="col">
          <p>
            that are in AP Computer Science classes are women.
          </p>
        </div>
        <div className="col">
          <p>
            that are in AP Computer Science classes are Black or Hispanic.
          </p>
        </div>
      </div>
      <div className="row rowWithFullWidth">
        <div className="col-sm-12">
          <p><a className="stat-source" href="https://csedweek.org/resource_kit/blurbs" target="_blank">
              View source: https://csedweek.org/resource_kit/blurbs
            </a></p>
        </div>
      </div>
    </div>
  )
}

export default Statistics
