const PriceTypes = {
  clearance: "clearance",
  clearanceRange: "clearancerange",
  inCartPlusCompare: "priceincart",
  wasNow: "wasnowprice",
  drop: "pricedrop",
  hotDeal: "hotdeal",
  range: "range",
  standard: "standard",
  callFor: "specialprice"
};

const PriceTypeKeyByValue = Object.keys(PriceTypes).reduce((result = {}, key) => {
  const newVal = {};
  newVal[PriceTypes[key]] = key;
  return { ...result, ...newVal };
});

export const DuplicatePriceTypeMapToPriceType = {
  ourpriceincart: PriceTypes.inCartPlusCompare,
  callforpricing: PriceTypes.callFor
};

const PriceTypesText = {};
PriceTypesText[PriceTypes.inCartPlusCompare] = "Our Price in Cart";
PriceTypesText[PriceTypes.callFor] = "Call for Pricing";

export const getPriceTypeKeyByValue = (val = "") => PriceTypeKeyByValue[val];

// export const getPriceTypeText = (key = "") => (PriceTypes[key]) ? PriceTypesText[PriceTypes[key]] : undefined;

export default PriceTypes;
