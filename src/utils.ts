export const generateCode = (function (start = 0) {
    return () => ++start;
}());

export const getName = (str: string) => {
  const index = str.indexOf(' ');
  const name = str.slice(0, index + 2);
  return name + '.';
}