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

export const DuplicatePriceTypeMapToPriceType = {
  ourpriceincart: PriceTypes.inCartPlusCompare
};

const PriceTypesText = {};
PriceTypesText[PriceTypes.clearanceStylesAvailable] = "Our Price in Cart";
PriceTypesText[PriceTypes.callFor] = "Call for Pricing";

export const getMessageTypeText = (key = "") => (PriceTypes[key]) ? PriceTypesText[PriceTypes[key]] : undefined;

export default PriceTypes;
