import { chunk } from 'lodash';

// BEGIN (write your solution here)
const hexToRgb = (colors) => {
  const result = {};
  const colorsMod = colors
    .substring(1)
    .split('');
  const colorsArr = chunk(colorsMod, 2)
    .map((item) => item[0] + item[1]);
  result.r = parseInt(colorsArr[0], 16);
  result.g = parseInt(colorsArr[1], 16);
  result.b = parseInt(colorsArr[2], 16);
  
  return result;
}; 

const rgbToHexF = (color) => {
  let hex = Number(color).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

const rgbToHex = (r, g, b) => '#' + rgbToHexF(r) + rgbToHexF(g) + rgbToHexF(b); 

export { hexToRgb, rgbToHex};
// END

// BEGIN Tutor
export const rgbToHex = (...channels) => {
    const hex = channels
      .map((channel) => channel.toString(16).padStart(2, '0'))
      .join('');
    return `#${hex}`;
  };
  
  export const hexToRgb = (hex) => {
    const chars = hex.slice(1).split('');
    const [r, g, b] = chunk(chars, 2)
      .map((channel) => channel.join(''))
      .map((channel) => parseInt(channel, 16));
    return { r, g, b };
  };
  // END

