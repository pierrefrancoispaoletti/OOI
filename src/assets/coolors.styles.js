export const COLORS = {
  blue: "#26547cff",
  pink: "#ef476fff",
  crayola: "#ffd166ff",
  green: "#06d6a0ff",
  baby: "#fffcf9ff",
};

export const SECONDARY_COLORS = {
  orange: "#f75c03ff",
  rose: "#d90368ff",
  byzantium: "#820263ff",
};

export const TERTIARY_COLORS = {
  Jonquil: "#e6c229",
  Pumpkin: "#f17105",
  "Spanish Carmine": "#d11149",
  "Electric Indigo": "#6610f2",
  "Tufts Blue": "#1a8fe3",
  "Cyber Grape": "#54457f",
};

export const randomColor = () => {
  let array = [COLORS, SECONDARY_COLORS, TERTIARY_COLORS];

  let randomObject = array[Math.floor(Math.random() * array.length)];

  let objectValues = Object.values(randomObject);

  const value = objectValues[Math.floor(Math.random() * objectValues.length)];

  return value;
};
