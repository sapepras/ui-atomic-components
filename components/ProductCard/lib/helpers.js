import { getFirstDefined, ellipsesText } from "../../../util/component";
import { determinePriceType } from "../../PriceDetails/lib/PredictivePriceTypes";
import { DuplicatePriceTypeMapToPriceType, getPriceTypeKeyByValue } from "../../PriceDetails/lib/PriceTypes";
import MessageTypes from "../../PriceDetails/lib/MessageTypes";
import AdbugTypes from "../../PriceDetails/lib/AdbugTypes";

export const getCardProps = (product = {}, props = {}) => {
  const mergedProps = {
    title: ellipsesText(determineTitle(props, product), props.titleMaxCC || 25),
    description: ellipsesText(determineDescription(props, product), props.descriptionMaxCC || 40),
    image: determineImage(props, product),
    imageAltText: determineImageAltText(props, product),
    rating: props.rating,
    priceObject: determinePriceObject(props, product)
  };

  console.log("MERGED PROPS");
  console.log(mergedProps);

  return { ...props, ...mergedProps };
};

const determineImage = (props, product) =>
  getFirstDefined([props.image, props.imageURL, product.imageURL]);

const determineTitle = (props, product) => getFirstDefined([props.title, product.manufacturer]);

const determineDescription = (props, product) => getFirstDefined([props.description, product.name]);

const determineImageAltText = (props, product) =>
  getFirstDefined([props.imageAltText, product.imageAltDescription]);

const determinePriceObject = (props = {}, product = {}) => {
  const { priceObject = {} } = props;
  const { adbug: arrAdbug = [], defaultSkuPrice = {} } = product;
  const adbug = arrAdbug.length > 0 ? arrAdbug[0] : null;
  const adbugKeys = getAdbugKeys(arrAdbug);
  const messageKeys = getMessageTypeKeys(defaultSkuPrice.priceMessage);
  const priceTypeKeys = getPriceTypeKeys(defaultSkuPrice.priceMessage);
  const newPriceObject = { adbug, adbugKeys, messageKeys, priceTypeKeys, ...defaultSkuPrice, priceObject }; // eslint-disable-line object-curly-newline
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
    .filter(priceMessageLCase => MessageTypes[priceMessageLCase] && true).join(",");
};

const getPriceTypeKeys = (priceMessages = "") => {
  const result = priceMessages
    .split(",")
    .map(priceMessage => priceMessage.replace(/\s/g, "").toLowerCase())
    .map(priceMessageLCase => (
      getPriceTypeKeyByValue(DuplicatePriceTypeMapToPriceType[priceMessageLCase])
        ? DuplicatePriceTypeMapToPriceType[priceMessageLCase]
        : priceMessageLCase
    ))
    .filter(priceMessageLCase => getPriceTypeKeyByValue(priceMessageLCase) && true).join(",");
    return result;
};
