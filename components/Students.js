import StudentInfo from './StudentInfo';
import Image from 'next/image';

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
          <Image
            src={student.pic}
            alt="Profile Avatar"
            width={500}
            height={500}
          />
        </div>
        <StudentInfo student={student} />
      </div>
      <hr />
    </div>
  );
}

export default Students;
