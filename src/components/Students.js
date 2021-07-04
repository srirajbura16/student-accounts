import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaPlus } from 'react-icons/fa';
import TestScores from './TestScores';

function Students(props) {
  const { students } = props;

  return (
    <div className="Students">
      {students.map((student) => {
        const { pic, firstName, lastName, email, company, skill, grades, id } =
          student;

        return (
          <Student
            key={id}
            pic={pic}
            firstName={firstName}
            lastName={lastName}
            email={email}
            company={company}
            skill={skill}
            grades={grades}
          />
        );
      })}
    </div>
  );
}

function Student(props) {
  const { pic, firstName, lastName, email, company, skill, grades } = props;

  const [extend, setExtend] = useState(false);

  function average(grades) {
    const total = grades.reduce(
      (acc, value) => parseInt(acc) + parseInt(value)
    );
    const averageGrade = (total / grades.length).toFixed(3);
    return averageGrade;
  }

  return (
    <IconContext.Provider value={{ color: '#c2c2c2', size: '2em' }}>
      <div className="Student">
        <div className="student-container">
          <div className="avatar">
            <img src={pic} alt="Profile Avatar" />
          </div>
          <div className="info-container">
            <div className="name">
              <h1>{`${firstName} ${lastName}`.toUpperCase()}</h1>
              <FaPlus
                onClick={() => {
                  setExtend(true);
                }}
              />
            </div>
            <div className="personal-info">
              <div className="student-info">
                <div className="email">Email: {email}</div>
                <div className="company">Company: {company}</div>
                <div className="skill">Skill: {skill}</div>
                <div className="average">Average: {average(grades)}</div>
              </div>

              <TestScores grades={grades} />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </IconContext.Provider>
  );
}

export default Students;
