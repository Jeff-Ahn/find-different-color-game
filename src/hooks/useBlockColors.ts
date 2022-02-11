import { useState } from 'react';
import { Colors } from '../model/colors';

const useBlockColors = (DEFAULT_COLORS: Colors) => {
  const [blockColors, setBlockColors] = useState(DEFAULT_COLORS);
  const changeBlockColors = (newColors: Colors) => setBlockColors(newColors);
  return { blockColors, changeBlockColors };
};

export default useBlockColors;
