import { css } from '@emotion/react';

interface HeaderProps {
  stage: number;
  leftTime: number;
  score: number;
}

function Header({ stage, leftTime, score }: HeaderProps) {
  return (
    <header css={wrap}>
      스테이지: {stage}, 남은 시간: {leftTime}, 점수: {score}
    </header>
  );
}

const wrap = css`
  line-height: 1.2;
`;

export default Header;
