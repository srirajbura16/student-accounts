import { nanoid } from 'nanoid';
import React from 'react';
import '../App.css';

function TestScores({ grades, id }) {
  return (
    <ul className="TestScores">
      {grades.map((grade, index) => {
        return <TestScore key={nanoid()} grade={grade} index={index} />;
      })}
    </ul>
  );
}

function TestScore({ grade, index }) {
  return (
    <li>
      Test{index + 1}: {grade}%
    </li>
  );
}

export default TestScores;
