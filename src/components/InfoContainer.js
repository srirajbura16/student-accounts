import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import '../App.css';
import PersonalInfo from './PersonalInfo';
import Tags from './Tags';
import TestScores from './TestScores';

function InfoContainer({ student }) {
  const { firstName, lastName, email, company, skill, grades } = student;
  const [extend, setExtend] = useState(false);

  return (
    <div className="InfoContainer">
      <div>
        <div className="name">
          <h1>{`${firstName} ${lastName}`.toUpperCase()}</h1>
        </div>
        <div className="student-info">
          <PersonalInfo
            email={email}
            company={company}
            skill={skill}
            grades={grades}
          />
          {!extend && <Tags student={student} />}
          {extend && (
            <>
              <TestScores grades={grades} /> <Tags student={student} />
            </>
          )}
        </div>
      </div>
      <FaPlus
        onClick={() => {
          setExtend(!extend);
        }}
      />
    </div>
  );
}

export default InfoContainer;
