import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { firstName: 1 },
    { firstName: 2 },
    { firstName: 3 },
    { firstName: 4 },
    { firstName: 5 },
  ]);

  // async function fetchStudents() {
  //   const data = await fetch(`https://api.hatchways.io/assessment/students`, {
  //     mode: 'cors',
  //   });

  //   const dataJSON = await data.json();

  //   return dataJSON.students;
  // }

  useEffect(() => {
    async function fetchStudents() {
      const data = await fetch(`https://api.hatchways.io/assessment/students`, {
        mode: 'cors',
      });

      const dataJSON = await data.json();
      const students = dataJSON.students;
      console.log(students);

      setStudents(students);

      return dataJSON.students;
    }

    fetchStudents();
  }, []);

  return (
    <div className="App">
      {students.map((student) => {
        return <div>{student.firstName}</div>;
      })}
    </div>
  );
}

export default App;
