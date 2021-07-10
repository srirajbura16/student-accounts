import '../App.css';
import InfoContainer from './InfoContainer';

function Students({ students }) {
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
    <div className="Student">
      <div className="student-container">
        <div className="avatar">
          <img src={student.pic} alt="Profile Avatar" />
        </div>
        <InfoContainer student={student} />
      </div>
      <hr />
    </div>
  );
}

export default Students;
