export function convertNumberToInverseRatio(number: number, threshold = 400) {
  if (number < 0 || number > threshold) {
    return 0;
  }

  return 1 - (number / threshold);
}
