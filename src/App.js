import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Students from './components/Students';
import fetchStudents from './fetchStudents';
function App() {
  const [students, setStudents] = useState([]);
  let allStudents = useRef([]);

  useEffect(() => {
    async function processData() {
      const students = await fetchStudents();

      students.forEach((student) => {
        student.tags = [];
      });

      allStudents.current = students;
      setStudents(students);
    }

    processData();
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
    if (value === '') {
      setStudents(allStudents.current);
      return;
    }
    const searchByTag = allStudents.current.filter((student) => {
      if (tagSearch(student.tags, value)) {
        return student;
      }
    });
    setStudents(searchByTag);
    return searchByTag;
  }

  function tagSearch(tags, value) {
    const filteredTags = tags.filter((tag) => {
      if (tag.includes(value)) {
        return tag;
      }
    });

    if (filteredTags.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="App">
      <div className="navbar">
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
      </div>

      <Students students={students} />
    </div>
  );
}

export default App;
