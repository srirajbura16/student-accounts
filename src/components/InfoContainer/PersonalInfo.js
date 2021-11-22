import React from 'react';

function PersonalInfo({ email, company, skill, grades }) {
  function getAverageGrade(grades) {
    const total = grades.reduce(
      (acc, value) => parseInt(acc) + parseInt(value)
    );
    const totalAverage = total / grades.length;

    return totalAverage;
  }

  const averageGrade = getAverageGrade(grades);

  return (
    <div className="PersonalInfo">
      <div className="email">Email: {email}</div>
      <div className="company">Company: {company}</div>
      <div className="skill">Skill: {skill}</div>
      <div className="average">Average: {averageGrade}%</div>
    </div>
  );
}

export default PersonalInfo;
