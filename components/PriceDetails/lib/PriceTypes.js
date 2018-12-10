import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';
import { OUR_PRICE_IN_CART, CALL_FOR_PRICING } from '../constants';

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
const { ASOData: { messages: { IN_CART_PLUS_COMPARE_MSG = OUR_PRICE_IN_CART, CALL_FOR_MSG = CALL_FOR_PRICING } = {} } = {} } =
  ExecutionEnvironment.canUseDOM && window;
PriceTypesText[PriceTypes.inCartPlusCompare] = IN_CART_PLUS_COMPARE_MSG;
PriceTypesText[PriceTypes.callFor] = CALL_FOR_MSG;

export const getPriceTypeKeyByValue = (val = '') => PriceTypeKeyByValue[val];

export default PriceTypes;
