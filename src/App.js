import React, { useContext, useEffect, useRef } from 'react';
import './App.css';
import { StudentContext } from './components/StudentContext';
import Students from './components/Students';

function App() {
  const [students, setStudents] = useContext(StudentContext);

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

  function searchTag(e) {
    const value = e.target.value;
    console.log(value);
  }

  return (
    <div className="App">
      <input
        type="text"
        className="name-search"
        placeholder="Search by name"
        onChange={searchName}
      />
      <input
        type="text"
        className="tag-search"
        placeholder="Search by tag"
        onChange={searchTag}
      />
      <Students />
    </div>
  );
}

export default App;
