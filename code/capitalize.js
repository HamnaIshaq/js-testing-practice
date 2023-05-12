function capitalize(str) {
  const capitalFirstChar = str.charAt(0).toUpperCase();
  const remainingChar = str.slice(1);
  return capitalFirstChar + remainingChar;
}

export default capitalize;
