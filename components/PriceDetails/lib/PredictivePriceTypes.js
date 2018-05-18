/**
 * Currently experimental.  May come back to predictive price types, abandoning for now.
 */

import PriceTypes from "./PriceTypes";

const priceTypePriorities = [
  PriceTypes.clearance,
  PriceTypes.clearanceRange,
  PriceTypes.inCartPlusCompare,
  PriceTypes.wasNow,
  PriceTypes.drop,
  PriceTypes.hotDeal,
  PriceTypes.standard,
  PriceTypes.range,
  PriceTypes.callFor
];

const isClearance = () => null; //* "CLEARANCE" */

const isClearanceRange = () => null; //* "CLEARANCE_RANGE" */

const isInCartPlusCompare = () => null; /* "IN_CART_PLUS_COMPARE" */

const isWasNow = () => null; /* "WAS_NOW" */

const isDrop = () => null; /* "DROP" */

const isHotDeal = () => null; /* "HOT_DEAL" */

const isRange = () => null; /* "RANGE" */

const isStandard = () => null; /* "STANDARD" */

const isCallFor = () => null; //* "CALL_FOR" */

const priceTypeCheckMap = {};
priceTypeCheckMap[PriceTypes.clearance] = isClearance;
priceTypeCheckMap[PriceTypes.clearanceRange] = isClearanceRange;
priceTypeCheckMap[PriceTypes.inCartPlusCompare] = isInCartPlusCompare;
priceTypeCheckMap[PriceTypes.wasNow] = isWasNow;
priceTypeCheckMap[PriceTypes.drop] = isDrop;
priceTypeCheckMap[PriceTypes.hotDeal] = isHotDeal;
priceTypeCheckMap[PriceTypes.range] = isRange;
priceTypeCheckMap[PriceTypes.standard] = isStandard;
priceTypeCheckMap[PriceTypes.callFor] = isCallFor;

export const determinPriceType = (product = {}) => {
  let found = false;

  const priceTypeChecks = priceTypePriorities.map(code => priceTypeCheckMap[code]);

  const validValues = priceTypeChecks.filter(isType => isType(product));
  found = validValues.length > 0;

  if (found) {
    return validValues[0];
  }

  return null;
};
