import React from 'react';
import '../App.css';

function TestScores({ grades, id }) {
  return (
    <ul className="TestScores">
      {grades.map((grade, idx) => {
        return <TestScore key={idx} grade={grade} idx={idx} />;
      })}
    </ul>
  );
}

function TestScore({ grade, idx }) {
  return (
    <li>
      Test{idx + 1}: {grade}%
    </li>
  );
}

export default TestScores;
