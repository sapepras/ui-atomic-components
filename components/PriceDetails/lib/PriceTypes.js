import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';
const PriceTypes = {
  clearance: 'clearance',
  clearanceRange: 'clearancerange',
  inCartPlusCompare: 'priceincart',
  wasNow: 'wasnowprice',
  drop: 'pricedrop',
  hotDeal: 'hotdeal',
  range: 'range',
  standard: 'standard',
  callFor: 'specialprice'
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
const { ASOData: { messages: { IN_CART_PLUS_COMPARE_MSG, CALL_FOR_MSG } = {} } = {} } = ExecutionEnvironment.canUseDOM && window;
PriceTypesText[PriceTypes.inCartPlusCompare] = IN_CART_PLUS_COMPARE_MSG || 'Our Price in Cart';
PriceTypesText[PriceTypes.callFor] = CALL_FOR_MSG || 'Call for Pricing';

export const getPriceTypeKeyByValue = (val = '') => PriceTypeKeyByValue[val];

export default PriceTypes;
