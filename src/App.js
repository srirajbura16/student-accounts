import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Students from './components/Students';

function App() {
  const [students, setStudents] = useState([]);
  let allStudents = useRef([]);

  useEffect(() => {
    async function fetchStudents() {
      const data = await fetch(`https://api.hatchways.io/assessment/students`, {
        mode: 'cors',
      });

      const dataJSON = await data.json();
      const students = dataJSON.students;

      allStudents.current = students;
      setStudents(students);

      return dataJSON.students;
    }

    fetchStudents();
  }, []);

  function searchName(e) {
    const value = e.target.value;
    const searchByName = allStudents.current.filter((student) => {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
      if (fullName.includes(value)) {
        return student;
      }
    });
    setStudents(searchByName);
    return searchByName;
  }

  return (
    <div className="App">
      <input
        type="text"
        className="name-search"
        placeholder="Search by name"
        onChange={searchName}
      />
      <Students students={students} />
    </div>
  );
}

export default App;
