async function fetchStudents() {
  const response = await fetch(`https://api.hatchways.io/assessment/students`, {
    mode: 'cors',
  });

  const data = await response.json();

  return data.students;
}

export default fetchStudents;
