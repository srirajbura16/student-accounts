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
    //     <IconContext.Provider value={{ color: '#c2c2c2', size: '2em' }}>
    // </IconContext.Provider>
  );
}

export default Students;
