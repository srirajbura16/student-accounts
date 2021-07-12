import '../App.css';
import StudentInfo from './StudentInfo';

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
        <StudentInfo student={student} />
      </div>
      <hr />
    </div>
  );
}

export default Students;
