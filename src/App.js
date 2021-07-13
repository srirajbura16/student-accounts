import { useEffect, useRef, useState } from 'react';
import './App.css';
import Students from './components/Students';
import fetchData from './fetchData';

function App() {
  const [students, setStudents] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const [nameField, setNameField] = useState('');
  const [tagField, setTagField] = useState('');

  const AllStudents = useRef([]);

  useEffect(() => {
    async function processData() {
      const [students, error] = await fetchData();

      if (error) {
        setErrorMessage('Failed to fetch');
        return;
      } else {
        students.forEach((student) => (student.tags = []));
        AllStudents.current = students;
        setStudents(students);
      }

      setErrorMessage('No students found');
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
      if (searchStudentTags(student.tags, tagField)) {
        return student;
      }
      return false;
    });

    return filterStudentTags;
  }

  function searchStudentTags(tags, value) {
    //search value through student tags, if found, return a boolean.
    const findTag = tags.some((tag) => tag.includes(value));

    return findTag;
  }

  // Update input field state
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
        <div className="error-msg">{errorMessage}</div>
      )}
    </div>
  );
}

export default App;
