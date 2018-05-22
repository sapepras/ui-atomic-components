import { getFirstDefined, ellipsesText } from "../../../util/component";
import { determinePriceType } from "../../PriceDetails/lib/PredictivePriceTypes";
import {
  DuplicatePriceTypeMapToPriceType,
  getPriceTypeKeyByValue
} from "../../PriceDetails/lib/PriceTypes";
import MessageTypes from "../../PriceDetails/lib/MessageTypes";
import AdbugTypes from "../../PriceDetails/lib/AdbugTypes";

const MapPriceTypeToBadge = {
  clearance: "Clearance",
  clearanceRange: "Clearance",
  drop: "Price Drop",
  hotDeal: "Hot Deal"
};

export const getCardProps = (product = {}, props = {}) => {
  const priceObject = determinePriceObject(props, product);
  const mergedProps = {
    title: ellipsesText(determineTitle(props, product), props.titleMaxCC || 25),
    description: ellipsesText(determineDescription(props, product), props.descriptionMaxCC || 40),
    image: determineImage(props, product),
    imageAltText: determineImageAltText(props, product),
    rating: determineRating(props, product),
    badge: determineBadge(props, product, priceObject.priceType),
    priceObject
  };

  return { ...props, ...mergedProps };
};

const determineImage = (props, product) =>
  getFirstDefined([props.image, props.imageURL, product.imageURL]);

const determineTitle = (props, product) => getFirstDefined([props.title, product.manufacturer]);

const determineDescription = (props, product) => getFirstDefined([props.description, product.name]);

const determineImageAltText = (props, product) =>
  getFirstDefined([props.imageAltText, product.imageAltDescription]);

const determineRating = (props, product) => getFirstDefined([props.rating, product.bvRating]);

const determineBadge = (props, product, priceType) => {
  if (props.badge) {
    return props.badge;
  }

  if (MapPriceTypeToBadge[priceType]) {
    return MapPriceTypeToBadge[priceType];
  }

  if (product && product.adbug && product.adbug.length > 0) {
    return product.adbug[0];
  }

  return null;
};

const determinePriceObject = (props = {}, product = {}) => {
  const { priceObject = {} } = props;
  const { adbug: arrAdbug = [], defaultSkuPrice = {} } = product;
  const adbug = arrAdbug.length > 0 ? arrAdbug[0] : null;
  const adbugKeys = getAdbugKeys(arrAdbug);
  const messageKeys = getMessageTypeKeys(defaultSkuPrice.priceMessage);
  const priceTypeKeys = getPriceTypeKeys(defaultSkuPrice.priceMessage);
  const newPriceObject = {
    adbug,
    adbugKeys,
    messageKeys,
    priceTypeKeys,
    ...defaultSkuPrice,
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

const getAdbugKeys = (adbugs = []) =>
  adbugs
    .map(adbug => adbug.trim().toLowerCase())
    .filter(adbugLCase => AdbugTypes[adbugLCase] && true);

const getMessageTypeKeys = (priceMessages = "") => {
  priceMessages
    .split(",")
    .map(priceMessage => priceMessage.trim().toLowerCase())
    .filter(priceMessageLCase => MessageTypes[priceMessageLCase] && true)
    .join(",");
};

const getPriceTypeKeys = (priceMessages = "") => {
  const result = priceMessages
    .split(",")
    .map(priceMessage => priceMessage.replace(/\s/g, "").toLowerCase())
    .map(priceMessageLCase =>
        getPriceTypeKeyByValue(DuplicatePriceTypeMapToPriceType[priceMessageLCase])
          ? DuplicatePriceTypeMapToPriceType[priceMessageLCase]
          : priceMessageLCase)
    .filter(priceMessageLCase => getPriceTypeKeyByValue(priceMessageLCase) && true)
    .join(",");
  return result;
};
