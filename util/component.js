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

export const ellipsesText = (text, maxCount = 25, ellipses = "...") => {
  if (!text) {
    return text;
  }

  if (text && text.trim().length <= maxCount) {
    return text.trim();
  }

  const cleanMaxCount = Math.max(maxCount, 3);
  return `${text.trim().substr(0, cleanMaxCount - 3)}${ellipses}`;
};
