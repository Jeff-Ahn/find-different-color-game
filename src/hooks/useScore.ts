import { useState } from 'react';

const useScore = () => {
  const [score, setScore] = useState(0);
  const onAddScore = (points: number) => setScore(score + points);
  const onResetScore = () => setScore(0);
  return { score, onAddScore, onResetScore };
};

export default useScore;
