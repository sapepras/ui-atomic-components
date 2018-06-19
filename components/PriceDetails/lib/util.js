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
  let updatedDefaultSkuPricesInObject = { ...defaultSkuPrice, ...{ listPrice: parseFloat(defaultSkuPrice.listPrice, 10).toFixed(2) } };
  if (defaultSkuPrice.salePrice && defaultSkuPrice.salePrice.length) {
    updatedDefaultSkuPricesInObject = { ...updatedDefaultSkuPricesInObject, ...{ salePrice: parseFloat(defaultSkuPrice.salePrice, 10).toFixed(2) } };
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
  let updatedDefaultSkuPricesInObject = { ...defaultSkuPrice, ...{ listPrice: parseFloat(defaultSkuPrice.listPrice, 10).toFixed(2) } };
  if (defaultSkuPrice.salePrice && defaultSkuPrice.salePrice.length) {
    updatedDefaultSkuPricesInObject = { ...updatedDefaultSkuPricesInObject, ...{ salePrice: parseFloat(defaultSkuPrice.salePrice, 10).toFixed(2) } };
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
  let updatedDefaultSkuPricesInObject = { ...priceObject, ...{ listPrice: parseFloat(priceObject.listPrice, 10).toFixed(2) } };
  if (priceObject.salePrice && priceObject.salePrice.length) {
    updatedDefaultSkuPricesInObject = { ...updatedDefaultSkuPricesInObject, ...{ salePrice: parseFloat(priceObject.salePrice, 10).toFixed(2) } };
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
