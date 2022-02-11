import { useState } from 'react';

const DEFAULT_STAGE = 1;

const useStage = () => {
  const [stage, setStage] = useState(DEFAULT_STAGE);
  const onNextStage = () => {
    setStage(stage + 1);
  };
  const onResetStage = () => {
    setStage(DEFAULT_STAGE);
  };
  return { stage, onNextStage, onResetStage };
};

export default useStage;
