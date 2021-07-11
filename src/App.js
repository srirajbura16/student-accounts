import { useEffect, useRef, useState } from 'react';
import './App.css';
import Students from './components/Students';
import fetchData from './fetchData';

function App() {
  const [students, setStudents] = useState([]);

  const [tagField, setTagField] = useState('');
  const [nameField, setNameField] = useState('');

  const AllStudents = useRef([]);

  useEffect(() => {
    async function processData() {
      const students = await fetchData();

      AllStudents.current = students;

      setStudents(students);
    }

    processData();
  }, []);

  useEffect(() => {
    const filteredStudentTags = filterTags();
    const currentStudents = filterNames(filteredStudentTags);

    setStudents(currentStudents);
  }, [nameField, tagField]);

  function filterNames(students) {
    //filter students with given name respective to the tag or no tag.
    const filterStudentNames = students.filter((student) => {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
      if (fullName.includes(nameField)) {
        return student;
      }
      return false;
    });

    return filterStudentNames;
  }

  function filterTags() {
    //filter all students with given input by the user. If tagfield is empty, return all students.
    if (tagField.length === 0) {
      return AllStudents.current;
    }

    const filterStudentTags = AllStudents.current.filter((student) => {
      if (searchStudentTag(student.tags, tagField)) {
        return student;
      }
      return false;
    });

    return filterStudentTags;
  }

  function searchStudentTag(tags, value) {
    //search through student tags, if found, return a boolean.
    const findTag = tags.some((tag) => tag.includes(value));

    return findTag;
  }

  // Update input field state
  function handleName(e) {
    setNameField(e.target.value.toLowerCase());

    return;
  }

  function handleTag(e) {
    setTagField(e.target.value.toLowerCase());

    return;
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
