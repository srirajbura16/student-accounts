async function fetchData() {
  const API_URL = `https://api.hatchways.io/assessment/students`;

  try {
    const response = await fetch(API_URL, { mode: 'cors' });
    const data = await response.json();

    const students = data.students;

    return [students, null];
  } catch (error) {
    return [null, error];
  }
}

export default fetchData;
