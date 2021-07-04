import React from 'react';

function Students(props) {
  const { students } = props;

  console.log(students);

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

  function average(grades) {
    const total = grades.reduce(
      (acc, value) => parseInt(acc) + parseInt(value)
    );
    const averageGrade = (total / grades.length).toFixed(3);
    return averageGrade;
  }

  return (
    <div className="Students">
      <div className="avatar">
        <img src={pic} alt="Profile Avatar" />
      </div>
      <div className="info">
        <h1 className="name">{`${firstName} ${lastName}`}</h1>
        <div className="email">Email: {email}</div>
        <div className="company">Company: {company}</div>
        <div className="skill">Skill: {skill}</div>
        <div className="average">Average: {average(grades)}</div>
      </div>
    </div>
  );
}

export default Students;
