import { determinePriceType } from './PredictivePriceTypes';
import { DuplicatePriceTypeMapToPriceType, getPriceTypeKeyByValue } from './PriceTypes';
import MessageTypes from './MessageTypes';
import AdBugTypes from './AdBugTypes';

export const determinePriceObjectFromProductInfo = (props = {}, product = {}) => {
  const { priceObject = {} } = props;
  const { adBug: arrAdBug = [], defaultSkuPrice = {} } = product;
  const adBug = arrAdBug.length > 0 ? arrAdBug[0] : null;
  const adBugKeys = getAdBugKeys(arrAdBug);
  const messageKeys = getMessageTypeKeys(defaultSkuPrice.priceMessage);
  const priceTypeKeys = getPriceTypeKeys(defaultSkuPrice.priceMessage);
  let updatedDefaultSkuPricesInObject = { ...defaultSkuPrice, ...{ listPrice: cleanPrice(defaultSkuPrice.listPrice) } };
  if (defaultSkuPrice.salePrice && defaultSkuPrice.salePrice.length) {
    updatedDefaultSkuPricesInObject = { ...updatedDefaultSkuPricesInObject, ...{ salePrice: cleanPrice(defaultSkuPrice.salePrice) } };
  }
  const newPriceObject = {
    adBug,
    adBugKeys,
    messageKeys,
    priceTypeKeys,
    ...updatedDefaultSkuPricesInObject,
    priceObject
  }; // eslint-disable-line object-curly-newline
  if (product.priceRange) {
    newPriceObject.priceRange = product.priceRange;
  }
  if (props.priceObject && props.priceObject.priceRange) {
    newPriceObject.priceRange = props.priceObject.priceRange;
  }
  const priceType = determinePriceType(newPriceObject);
  return { priceType, ...newPriceObject };
};

export const determinePriceObjectFromProduct = (props = {}, product = {}) => {
  const priceObject = props; // eslint-disable-line

  const { adBug: arrAdBug = [] } = product;
  const adBug = arrAdBug.length > 0 ? arrAdBug[0] : null;
  const adBugKeys = getAdBugKeys(arrAdBug);

  const defaultSkuPrice = getDefaultSkuPriceFromSkus(product);
  const messageKeys = getMessageTypeKeys(defaultSkuPrice.priceMessage);
  const priceTypeKeys = getPriceTypeKeys(defaultSkuPrice.priceMessage);
  let updatedDefaultSkuPricesInObject = { ...defaultSkuPrice, ...{ listPrice: cleanPrice(defaultSkuPrice.listPrice) } };
  if (defaultSkuPrice.salePrice && defaultSkuPrice.salePrice.length) {
    updatedDefaultSkuPricesInObject = { ...updatedDefaultSkuPricesInObject, ...{ salePrice: cleanPrice(defaultSkuPrice.salePrice) } };
  }
  const newPriceObject = {
    adBug,
    adBugKeys,
    messageKeys,
    priceTypeKeys,
    ...updatedDefaultSkuPricesInObject,
    ...priceObject
  }; // eslint-disable-line object-curly-newline
  if (product.priceRange) {
    newPriceObject.priceRange = product.priceRange;
  }
  if (priceObject && priceObject.priceRange) {
    newPriceObject.priceRange = priceObject.priceRange;
  }
  const newPriceType = determinePriceType(newPriceObject);
  return { priceType: newPriceType, ...newPriceObject };
};

export const determinePriceObjectFromProps = (props = {}) => {
  const priceObject = props;
  let updatedDefaultSkuPricesInObject = { ...priceObject, ...{ listPrice: cleanPrice(priceObject.listPrice) } };
  if (priceObject.salePrice && priceObject.salePrice.length) {
    updatedDefaultSkuPricesInObject = { ...updatedDefaultSkuPricesInObject, ...{ salePrice: cleanPrice(priceObject.salePrice) } };
  }
  const priceType = determinePriceType(updatedDefaultSkuPricesInObject);
  return { priceType, ...updatedDefaultSkuPricesInObject };
};

const getAdBugKeys = (adBugs = []) => adBugs.map(adBug => adBug.trim().toLowerCase()).filter(adBugLCase => AdBugTypes[adBugLCase] && true);

const getMessageTypeKeys = (priceMessages = '') => {
  priceMessages
    .split(',')
    .map(priceMessage => priceMessage.trim().toLowerCase())
    .filter(priceMessageLCase => MessageTypes[priceMessageLCase] && true)
    .join(',');
};

const getPriceTypeKeys = (priceMessages = '') => {
  const result = priceMessages
    .split(',')
    .map(priceMessage => priceMessage.replace(/\s/g, '').toLowerCase())
    .map(priceMessageLCase =>
        getPriceTypeKeyByValue(DuplicatePriceTypeMapToPriceType[priceMessageLCase])
          ? DuplicatePriceTypeMapToPriceType[priceMessageLCase]
          : priceMessageLCase)
    .filter(priceMessageLCase => getPriceTypeKeyByValue(priceMessageLCase) && true)
    .join(',');
  return result;
};

const getDefaultSkuPriceFromSkus = product => {
  const { defaultSku, sKUs = [] } = product;
  const defaultSkuPrice = sKUs.find(sku => sku.skuId === defaultSku);
  return defaultSkuPrice.price || {};
};

export const cleanPrice = val => {
  if (val === null || val === undefined) {
    return val;
  }

  // assume val is number || string
  let result = (typeof val === 'number') ? val.toString() : val;
  let floatResult = parseFloat(result.replace(/[^\d\.]/gi, ''), 10);// eslint-disable-line no-useless-escape
  floatResult = floatResult.toFixed(2);
  result = floatResult.toString();
  return result;
};
