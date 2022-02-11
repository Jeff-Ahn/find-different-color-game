import { Colors } from '../model/colors';

export const getNumberOfBlocks = (stage: number) =>
  Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);

export const generateRandomColor = () => {
  const redColor = Math.floor(Math.random() * 256);
  const greenColor = Math.floor(Math.random() * 256);
  const blueColor = Math.floor(Math.random() * 256);
  return { redColor, greenColor, blueColor };
};

const DEFAULT_DIFF_COLOR_AMOUNT = 32;
export const makeRGBColor = (rgbColors: Colors) => {
  const { redColor, greenColor, blueColor } = rgbColors;
  return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
};

export const getLittleDifferentColorByStage = (
  rgbColors: Colors,
  stage: number
) => {
  const diffAmount = DEFAULT_DIFF_COLOR_AMOUNT - 2 * stage;
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
