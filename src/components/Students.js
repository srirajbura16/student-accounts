import { useContext, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaPlus } from 'react-icons/fa';
import '../App.css';
import PersonalInfo from './PersonalInfo';
import { StudentContext } from './StudentContext';
import TestScores from './TestScores';

function Students(props) {
  const [students, setStudents] = useContext(StudentContext);

  return (
    <div className="Students">
      {students.map((student) => {
        return <Student key={student.id} student={student} />;
      })}
    </div>
  );
}

function Student({ student }) {
  const { pic, firstName, lastName, email, company, skill, grades } = student;
  const [students, setStudents] = useContext(StudentContext);

  const [extend, setExtend] = useState(false);

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
            <div className="student-info">
              <PersonalInfo
                email={email}
                company={company}
                skill={skill}
                grades={grades}
              />

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
