import { useEffect, useRef, useState } from 'react';
import Students from '../components/Students';

function App({ data }) {
  const [students, setStudents] = useState([]);
  const [errLoadingMessage, setErrLoadingMessage] = useState('Loading...');

  const [nameField, setNameField] = useState('');
  const [tagField, setTagField] = useState('');

  const AllStudents = useRef([]);

  useEffect(() => {
    if (data.notFound) {
      setErrLoadingMessage('Failed to fetch data');
      return;
    } else {
      const fetchedStudents = data.students;

      AllStudents.current = fetchedStudents;
      setStudents(fetchedStudents);
    }

    setErrLoadingMessage('No students found');
  }, []);

  useEffect(() => {
    function filterNames(students) {
      //filter students with given name respective to the tag or no tag.
      const filterStudentNames = students.filter((student) => {
        const fullName =
          `${student.firstName} ${student.lastName}`.toLowerCase();

        return fullName.includes(nameField);
      });

      return filterStudentNames;
    }

    function filterTags() {
      //filter all students with given input by the user. If tagfield is empty, return all students.
      if (tagField.length === 0) {
        return AllStudents.current;
      }

      const filterStudentTags = AllStudents.current.filter((student) => {
        return searchStudentTags(student.tags, tagField);
      });

      return filterStudentTags;
    }

    const filteredStudentTags = filterTags();
    const currentStudents = filterNames(filteredStudentTags);

    setStudents(currentStudents);
  }, [nameField, tagField]);

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
        <div className="error-loading-msg">{errLoadingMessage}</div>
      )}
    </div>
  );
}

export default App;

export async function getStaticProps(context) {
  const API_URL = `https://api.hatchways.io/assessment/students`;
  const res = await fetch(API_URL, { mode: 'cors' });
  const data = await res.json();
  data.students.forEach((student) => (student.tags = []));
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
