import React from 'react'
import './CompetencyCard.css'

const CompetencyCard = ({ competency }) => {
  let { name, description, activities } = competency
  return (
    <div className="competency-wrapper">
      <div className="competency">
        <div className="competency-top">
          <div
            className="competency-bg"
            style={{ background: competency.colourPrimary }}
          ></div>
          <h2>{name}</h2>
        </div>
        <div className="competency-bottom">
          {description.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
          <div className="competency-activity">
            <ul>
              {activities.map((activity) => (
                <li key={`${name}-${activity}`}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetencyCard
