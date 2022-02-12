import { Colors } from '../model/colors';
import { MAXIMUM_STAGE } from './constants';

export const getNumberOfBlocks = (stage: number) =>
  Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);

export const generateRandomColor = () => {
  const redColor = Math.floor(Math.random() * 256);
  const greenColor = Math.floor(Math.random() * 256);
  const blueColor = Math.floor(Math.random() * 256);
  return { redColor, greenColor, blueColor };
};

const DIFF_COLOR_OFFSET = 2;
const DEFAULT_DIFF_COLOR_AMOUNT =
  MAXIMUM_STAGE * DIFF_COLOR_OFFSET + DIFF_COLOR_OFFSET;
export const makeRGBColor = (rgbColors: Colors) => {
  const { redColor, greenColor, blueColor } = rgbColors;
  return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
};

export const getLittleDifferentColorByStage = (
  rgbColors: Colors,
  stage: number
) => {
  const diffAmount = DEFAULT_DIFF_COLOR_AMOUNT - DIFF_COLOR_OFFSET * stage;
  const getPlusOrMinusColorValue = (color: number) => {
    if (color < diffAmount) return color + diffAmount;
    return color - diffAmount;
  };
  const { redColor, greenColor, blueColor } = rgbColors;
  return {
    redColor: getPlusOrMinusColorValue(redColor),
    greenColor: getPlusOrMinusColorValue(greenColor),
    blueColor: getPlusOrMinusColorValue(blueColor),
  };
};

export const calcAcquiredScore = (stage: number, leftTime: number) =>
  Math.pow(stage, 3) * leftTime;
