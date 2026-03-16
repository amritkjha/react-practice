import React, { useState } from 'react';

const Questions = [
  {
    Question: 'What is the capital of India?',
    Options: ['Mumbai', 'New Delhi', 'Kolkata', 'Chennai'],
    CorrectAnswer: 1,
  },
  {
    Question: 'Which planet is known as the Red Planet?',
    Options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
    CorrectAnswer: 2,
  },
  {
    Question: "Who wrote the play 'Romeo and Juliet'?",
    Options: [
      'William Shakespeare',
      'Charles Dickens',
      'Leo Tolstoy',
      'Mark Twain',
    ],
    CorrectAnswer: 0,
  },
  {
    Question: 'What is the largest ocean on Earth?',
    Options: [
      'Indian Ocean',
      'Atlantic Ocean',
      'Arctic Ocean',
      'Pacific Ocean',
    ],
    CorrectAnswer: 3,
  },
  {
    Question: 'Which gas do plants absorb from the atmosphere?',
    Options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    CorrectAnswer: 2,
  },
  {
    Question: 'How many continents are there on Earth?',
    Options: ['Five', 'Six', 'Seven', 'Eight'],
    CorrectAnswer: 2,
  },
  {
    Question: 'What is the boiling point of water at sea level?',
    Options: ['50°C', '75°C', '100°C', '125°C'],
    CorrectAnswer: 2,
  },
  {
    Question: 'Which animal is known as the King of the Jungle?',
    Options: ['Tiger', 'Elephant', 'Lion', 'Leopard'],
    CorrectAnswer: 2,
  },
  {
    Question: 'Which language is the most spoken worldwide?',
    Options: ['English', 'Spanish', 'Mandarin Chinese', 'Hindi'],
    CorrectAnswer: 2,
  },
  {
    Question: 'What is the hardest natural substance on Earth?',
    Options: ['Gold', 'Iron', 'Diamond', 'Silver'],
    CorrectAnswer: 2,
  },
];

export default function App() {
  const [score, setScore] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState();
  const handleOptionSelect = (val, idx) => {
    setSelectedOption(idx);
    if(idx==Questions[activeQuestion].CorrectAnswer) {
      setScore(prev=>prev+1);
    }
    setTimeout(() => {
      setActiveQuestion(prev=>prev+1);
      setSelectedOption();
    }, 2000);
  }
  if(activeQuestion==Questions.length)return (
    <h1>Score: {score}</h1>
  )
  else return <div>
    <p>{Questions[activeQuestion].Question}</p>
    {Questions[activeQuestion].Options.map((opt, idx) => {
      return (
        <div>
          <input type='radio' checked={selectedOption==idx} onClick={e=>handleOptionSelect(e.target.checked, idx)} />
          {opt}
        </div>
      )
    })}
  </div>;
}
