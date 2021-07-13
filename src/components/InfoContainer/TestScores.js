import { nanoid } from 'nanoid';
import React from 'react';

function TestScores({ grades }) {
  return (
    <ul className="TestScores">
      {grades.map((grade, index) => {
        return (
          <li key={nanoid()}>
            Test {index + 1}: <span className="grade-percent">{grade}%</span>
          </li>
        );
      })}
    </ul>
  );
}

export default TestScores;
