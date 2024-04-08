export function checkValidation(Regex: string, checkValue: string) {
  let regex = new RegExp(Regex);

  return regex.test(checkValue);
}
