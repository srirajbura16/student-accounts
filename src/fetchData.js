async function fetchData() {
  const response = await fetch(`https://api.hatchways.io/assessment/students`, {
    mode: 'cors',
  });
  const data = await response.json();

  const students = data.students;
  students.forEach((student) => {
    student.tags = [];
  });

  return students;
}

export default fetchData;
