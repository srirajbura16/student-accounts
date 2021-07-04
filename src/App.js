import React, { useEffect, useState } from 'react';
import './App.css';
import Students from './components/Students';

function App() {
  const [students, setStudents] = useState([]);

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
      <Students students={students} />
    </div>
  );
}

export default App;
