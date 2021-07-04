import React from 'react';
import '../App.css';

function TestScores({ grades }) {
  return (
    <ul className="test-scores">
      {grades.map((grade, idx) => {
        return (
          <li>
            Test{idx + 1}: {grade}%
          </li>
        );
      })}
    </ul>
  );
}

export default TestScores;
