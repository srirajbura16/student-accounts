import { useContext } from 'react';
import { IconContext } from 'react-icons';
import '../App.css';
import InfoContainer from './InfoContainer';
import { StudentContext } from './StudentContext';
function Students() {
  const [students] = useContext(StudentContext);

  return (
    <div className="Students">
      {students.map((student) => {
        return <Student key={student.id} student={student} />;
      })}
    </div>
  );
}

function Student({ student }) {
  return (
    <IconContext.Provider value={{ color: '#c2c2c2', size: '2em' }}>
      <div className="Student">
        <div className="student-container">
          <div className="avatar">
            <img src={student.pic} alt="Profile Avatar" />
          </div>
          <InfoContainer student={student} />
        </div>
        <hr />
      </div>
    </IconContext.Provider>
  );
}

export default Students;
