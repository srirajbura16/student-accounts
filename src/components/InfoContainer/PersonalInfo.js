import React from 'react';

function PersonalInfo({ email, company, skill, grades }) {
  function averageGrade(grades) {
    const total = grades.reduce(
      (acc, value) => parseInt(acc) + parseInt(value)
    );
    const averageGrade = (total / grades.length).toFixed(2);

    return averageGrade;
  }

  return (
    <div className="PersonalInfo">
      <div className="email">Email: {email}</div>
      <div className="company">Company: {company}</div>
      <div className="skill">Skill: {skill}</div>
      <div className="average">Average: {averageGrade(grades)}</div>
    </div>
  );
}

export default PersonalInfo;
