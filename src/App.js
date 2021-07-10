import { useEffect, useRef, useState } from 'react';
import './App.css';
import Students from './components/Students';
import fetchStudents from './fetchStudents';
function App() {
  const [students, setStudents] = useState([]);
  const [tagField, setTagField] = useState('');
  const [nameField, setNameField] = useState('');
  let allStudents = useRef([]);

  useEffect(() => {
    async function processData() {
      const students = await fetchStudents();

      allStudents.current = students;
      setStudents(students);
    }

    processData();
  }, []);

  useEffect(() => {
    const tagStudents = filterTags();
    const currentStudents = filterNames(tagStudents);
    setStudents(currentStudents);
  }, [nameField, tagField]);

  function filterNames(students) {
    const studentNames = students.filter((student) => {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
      if (fullName.includes(nameField)) {
        return student;
      }
      return false;
    });

    return studentNames;
  }

  function filterTags() {
    if (tagField.length === 0) {
      return allStudents.current;
    }

    const students = allStudents.current.filter((student) => {
      if (searchStudentTag(student.tags, tagField)) {
        return student;
      }
      return false;
    });

    return students;
  }

  function searchStudentTag(tags, value) {
    const findTag = tags.some((tag) => tag.includes(value));
    return findTag;
  }

  function handleName(e) {
    setNameField(e.target.value.toLowerCase());
  }
  function handleTag(e) {
    setTagField(e.target.value.toLowerCase());
  }

  return (
    <div className="App">
      <div className="navbar">
        <input
          type="text"
          className="name-search"
          placeholder="Search by name"
          onChange={handleName}
        />
        <input
          type="text"
          className="tag-search"
          placeholder="Search by tag"
          onChange={handleTag}
        />
      </div>

      {students.length > 0 ? (
        <Students students={students} />
      ) : (
        <div className="error-msg">No results found</div>
      )}
    </div>
  );
}

export default App;
