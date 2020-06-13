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
        percentage={84}
        innerText="of mentees"
      />
      <CircleProgressBar
        className="circle-progress"
        percentage={67.7}
        innerText="of mentees"
      />
      <CircleProgressBar
        className="circle-progress"
        percentage={50}
        innerText="of mentees"
      />
      <div className="row rowWithFullWidth">
        <div className="col">
          <p>
            said they felt "more aware of opportunities, resources, and
            networks, within their chosen career path
          </p>
        </div>
        <div className="col">
          <p>
            said they felt "more confident about their leadership potential and
            ability to change the world."
          </p>
        </div>
        <div className="col">
          <p>
            would not otherwise have access to one-on-one personal mentorship
            realtionships in their communities.
          </p>
        </div>
      </div>
      <div className="row rowWithFullWidth">
        <div className="col-sm-12">
          <p className="stat-source">
            <a href="https://csedweek.org/resource_kit/blurbs" target="_blank">
              Source: https://csedweek.org/resource_kit/blurbs
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Statistics
