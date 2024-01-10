export const roundingNumber = (numb?: number, fractionDigits = 2) => {
  if (!numb || isNaN(numb)) return 0;

  const rounded =
    Math.round((numb + Number.EPSILON) * Math.pow(10, fractionDigits)) /
    Math.pow(10, fractionDigits);

  return rounded;
};
