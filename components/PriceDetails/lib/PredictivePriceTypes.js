import PriceTypes from './PriceTypes';
import AdBugTypes from './AdBugTypes';
// import MessageTypes from "./MessageTypes";

const priceTypePriorities = [
  PriceTypes.inCartPlusCompare,
  PriceTypes.callFor,
  PriceTypes.clearance,
  PriceTypes.clearanceRange,
  PriceTypes.drop,
  PriceTypes.hotDeal,
  PriceTypes.wasNow,
  PriceTypes.range,
  PriceTypes.standard
];

const isNotDefined = val => val === null || val === undefined;

const isEmpty = val => isNotDefined(val) || (typeof val === 'string' && val.trim() === '');

const isEmptyPrice = val =>
  isNotDefined(val) || (typeof val === 'string' && val.replace(/[^\d\.]/g, '') === ''); // eslint-disable-line no-useless-escape

const priceToFloat = price =>
  isEmptyPrice(price) ? null : parseFloat(price.replace(/[^\d\.]/g, '')); // eslint-disable-line no-useless-escape

const messageContains = (message = '', value = '') =>
  message
    .toLowerCase()
    .split(',')
    .indexOf(value.toLowerCase()) >= 0;

//* "CLEARANCE" */
const isClearance = priceObject => {
  const { adBugKeys = [] } = priceObject;
  if (
    adBugKeys.length > 0 &&
    messageContains(adBugKeys.join(','), AdBugTypes.clearance) &&
    isStandard(priceObject)
  ) {
    return PriceTypes.clearance;
  }
  return null;
};

//* "CLEARANCE_RANGE" */
const isClearanceRange = priceObject => {
  const { adBugKeys = [] } = priceObject;
  if (
    adBugKeys.length > 0 &&
    messageContains(adBugKeys.join(','), AdBugTypes.clearance) &&
    isRange(priceObject)
  ) {
    return PriceTypes.clearanceRange;
  }
  return null;
};

/* "IN_CART_PLUS_COMPARE" */
// If (priceMessage  != null && priceMessage contains “Our Price in Cart” ) à show Our price in cart and also Show Compare at “{listPrice}” à Note : “Our price in cart” and “Compare at” Message in go hand in hand.
const isInCartPlusCompare = priceObject => {
  const { priceTypeKeys, listPrice } = priceObject;
  if (
    !isEmpty(priceTypeKeys) &&
    messageContains(priceTypeKeys, PriceTypes.inCartPlusCompare) &&
    !isEmptyPrice(listPrice)
  ) {
    return PriceTypes.inCartPlusCompare;
  }
  return null;
};

/* "CALL_FOR" */
const isCallFor = priceObject => {
  const { priceTypeKeys } = priceObject;
  if (!isEmpty(priceTypeKeys) && messageContains(priceTypeKeys, PriceTypes.callFor)) {
    return PriceTypes.callFor;
  }
  return null;
};

/* "DROP" */
const isDrop = priceObject => {
  const { adBugKeys = [] } = priceObject;
  if (
    adBugKeys.length > 0 &&
    messageContains(adBugKeys.join(','), AdBugTypes.pricedrop) &&
    isWasNow(priceObject)
  ) {
    return PriceTypes.drop;
  }
  return null;
};

/* "HOT_DEAL" */
const isHotDeal = priceObject => {
  const { adBugKeys = [] } = priceObject;
  if (
    adBugKeys.length > 0 &&
    messageContains(adBugKeys.join(','), AdBugTypes.hotDeal) &&
    isWasNow(priceObject)
  ) {
    return PriceTypes.hotDeal;
  }
  return null;
};

// If ( priceMessage IS EMPTY &&  (listPrice != null && salePrice< listPrice ) )--- >Show Was now pricing
const isWasNow = priceObject => {
  const { priceMessage, listPrice, salePrice } = priceObject;
  if (
    isEmpty(priceMessage) &&
    !isEmptyPrice(listPrice) &&
    !isEmptyPrice(salePrice) &&
    priceToFloat(salePrice) < priceToFloat(listPrice)
  ) {
    return PriceTypes.wasNow;
  }
  return null;
};

/* "RANGE" */
// If " priceRange" is NOT EMPTY -- > Price range
const isRange = priceObject => {
  const { priceRange } = priceObject;
  if (!isEmptyPrice(priceRange)) {
    return PriceTypes.range;
  }
  return null;
};

/* "STANDARD" */
const isStandard = ({ listPrice, salePrice }) => {
  if (!isEmptyPrice(salePrice) || !isEmptyPrice(listPrice)) {
    return PriceTypes.standard;
  }
  return null;
};

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

export const determinePriceType = (priceObject = {}) => {
  const priceTypeChecks = priceTypePriorities.map(code => priceTypeCheckMap[code]);
  const foundIsType = priceTypeChecks.find(isType => isType(priceObject));
  return foundIsType ? foundIsType(priceObject) : null;
};

// PRICE RANGE EXAMPLE
// "defaultSkuPrice" : {
//   "salePrice" : "14.98",
//   "priceMessage" : "clearanceStylesAvailable",
//   "savings" : "",
//   "listPrice" : ""
// },
// "priceRange" : "14.98-27.99",
// "promoMessage" : "Buy One Get One 50% Off",
// "adBug" : [ "C", "" ]

// Array(4)
// 0
// :
// "priceInCart"
// 1
// :
// "clearanceStylesAvailable,priceInCart"
// 2
// :
// ""
// 3
// :
// "clearanceStylesAvailable"

// ["", "priceInCart", "clearanceStylesAvailable"]
// ["priceInCart", "clearanceStylesAvailable,priceInCart", "", "clearanceStylesAvailable"]
// ["", "clearanceStylesAvailable", "priceInCart"]

// * * * *
// * * * *
// * * * *
// Our Price in Cart
// "productPrice": {
//   "salePrice": "50.99",
//   "listPrice": "99.99",
//   "priceMessage": “Our Price in Cart”,
//    "savings": “”,
// }
// “promoMessage”:”20 % Off”  ,
// “adBug”:””,
// “shippingMessage”:” Free return shipping”,
// “priceRange”:””  ,

// Logic – (XT side)
// If (priceMessage  != null && priceMessage contains “Our Price in Cart” ) à show Our price in cart and also Show Compare at “{listPrice}” à Note : “Our price in cart” and “Compare at” Message in go hand in hand.
// promoMessage = “20 % Off”
// adBug = “”

// * * * *
// * * * *
// * * * *
// Was Now
// "productPrice": {
//   "salePrice": "25.99",
//   "listPrice": "149.99",
//   "priceMessage": “”,
//  "savings": “10%”,
// }
// “promoMessage”:”” ,
// “priceRange”:””  ,
// “adBug”:”HOT DEAL”
// “shippingMessage”:” shipping message e.g Free return shipping”

// Logic – (XT side)

// If ( priceMessage IS EMPTY &&  (listPrice != null && salePrice< listPrice ) )--- >Show Was now pricing
// savings = save 10%
// adBug = “HOT DEAL”

// * * * *
// * * * *
// * * * *
// Range
// "productPrice": {
//   "salePrice": "99.99",
//   "listPrice": "",
//   "priceMessage": “”,
//    "savings": “”,
// }
// “promoMessage”:””  ,
// “priceRange”:”50.99 – 99.99”  ,
// “adBug”:””,
// “shippingMessage”:””

// Logic – (XT side)
// If " priceRange" is NOT EMPTY -- > Price range
// priceMessage = “”
// adBug = “”

// * * * *
// * * * *
// * * * *
// Regular price
// "productPrice": {
//   "salePrice": "22.50",
//   "listPrice": "22.50",
//   "priceMessage": “”,
//    "savings": “”,
// }
// “promoMessage”:””  ,
// “priceRange”:””  ,
// “adBug”:””,
// “shippingMessage”:” Free return shipping”

// Logic – (XT side)
// If "priceMessage" is EMPTY AND ( ( listPrice == null && salePrice != null)   OR  (salePrice == null && listPrice != null)  OR  listPrice EQUALS salePrice))  -- > Regular price
// priceMessage = “”
// adBug = “”

// * * * *
// * * * *
// * * * *
// Call For

// * * * *
// * * * *
// * * * *
// clearance styles available
