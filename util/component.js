const isNull = val => val === null;
const isUndefined = val => val === undefined;
const isEmptyString = val => typeof val === "string" && val.trim() === "";

export const getFirstDefined = (arrVals = [], opts = {}) => {
  let found = false;
  const { defaultValue = undefined, treatEmptyStringAsNull = true } = opts;

  const nullChecks = [isNull, isUndefined];
  if (treatEmptyStringAsNull) {
    nullChecks.push(isEmptyString);
  }

  const validValues = arrVals.filter(val => nullChecks.every(isEmpty => !isEmpty(val)));
  found = validValues.length > 0;

  if (found) {
    return validValues[0];
  }

  return defaultValue;
};
