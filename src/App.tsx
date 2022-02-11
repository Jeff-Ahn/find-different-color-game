// TODO
// [] maximum stage 만들기
import Board from './components/Board';
import { useTimer, useStage, useScore, useBlockColors } from './hooks';
import {
  calcAcquiredScore,
  generateRandomColor,
  getLittleDifferentColorByStage,
  getNumberOfBlocks,
  makeRGBColor,
} from './utils/lib';
import { MAX_TIME_LIMITED } from './utils/constants';
import { useCallback, useEffect, useMemo } from 'react';
import Header from './components/Header/Header';

const DEFAULT_BLOCK_COLORS = generateRandomColor();

function App() {
  const { score, onAddScore, onResetScore } = useScore();
  const { stage, onNextStage, onResetStage } = useStage();
  const { leftTime, onStartTimer, onClearTimer, onResetTimer, onSubtractTime } =
    useTimer(MAX_TIME_LIMITED);
  const { blockColors: basicBlockColors, changeBlockColors } =
    useBlockColors(DEFAULT_BLOCK_COLORS);
  const numberOfBlocks = useMemo(() => getNumberOfBlocks(stage), [stage]);
  const answerBlockColors = useMemo(
    () => getLittleDifferentColorByStage(basicBlockColors, stage),
    [basicBlockColors, stage]
  );
  const blocks = useMemo(
    () => new Array(numberOfBlocks).fill(null),
    [stage, basicBlockColors]
  );
  const randomBlockIndex = useMemo(
    () => Math.floor(Math.random() * numberOfBlocks),
    [stage, basicBlockColors]
  );
  blocks[randomBlockIndex] = {
    color: makeRGBColor(answerBlockColors),
    isAnswer: true,
  };
  const newBlocks = useMemo(
    () =>
      blocks.map(
        (v) => v || { color: makeRGBColor(basicBlockColors), isAnswer: false }
      ),
    [stage, basicBlockColors]
  );

  useEffect(() => {
    onStartTimer();
    onResetScore();
    return () => onClearTimer();
  }, []);

  useEffect(() => {
    checkIsGameOver();
  }, [leftTime]);

  const checkIsGameOver = () => {
    if (leftTime <= 0) {
      onClearTimer();
      alert(`GAME OVER!\n스테이지: ${stage}, 점수: ${score}`);
      onGameRestart();
    }
  };

  const onGameRestart = () => {
    changeBlockColors(generateRandomColor());
    onResetTimer();
    onResetScore();
    onResetStage();
  };

  const onAnswerBlockClick = useCallback(() => {
    const acquiredScore = calcAcquiredScore(stage, leftTime);
    onAddScore(acquiredScore);
    changeBlockColors(generateRandomColor());
    onNextStage();
    onResetTimer();
  }, [stage]);

  const onWrongBlockClick = useCallback(() => {
    onSubtractTime(3);
  }, [stage]);

  return (
    <div className='App'>
      <Header stage={stage} leftTime={leftTime} score={score} />
      <Board
        blocks={newBlocks}
        onAnswerBlockClick={onAnswerBlockClick}
        onWrongBlockClick={onWrongBlockClick}
      />
    </div>
  );
}

export default App;
