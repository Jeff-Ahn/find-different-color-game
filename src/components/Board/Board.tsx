import React from 'react';
import { css } from '@emotion/react';
import { BOARD_SIZE } from '../../utils/constants';

interface Block {
  color: string;
  isAnswer: boolean;
}
interface BoardProps {
  blocks: Block[];
  onAnswerBlockClick: () => void;
  onWrongBlockClick: () => void;
}

function Board({ blocks, onAnswerBlockClick, onWrongBlockClick }: BoardProps) {
  return (
    <div css={wrap}>
      {blocks.map(({ color, isAnswer }, index) =>
        isAnswer ? (
          <div
            key={index}
            onClick={onAnswerBlockClick}
            css={blockStyle(color, Math.sqrt(blocks.length))}
          />
        ) : (
          <div
            key={index}
            onClick={onWrongBlockClick}
            css={blockStyle(color, Math.sqrt(blocks.length))}
          />
        )
      )}
    </div>
  );
}

const wrap = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: ${BOARD_SIZE}px;
  height: ${BOARD_SIZE}px;
`;

const offset = 4;
const blockStyle = (color: string, columns: number) => css`
  background-color: ${color};
  display: inline-block;
  width: ${BOARD_SIZE / columns - offset}px;
  height: ${BOARD_SIZE / columns - offset}px;
`;

export default React.memo(Board);
