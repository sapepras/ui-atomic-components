import { getFirstDefined, ellipsesText } from '../../../util/component';
import { determinePriceObjectFromProductInfo } from '../../PriceDetails/lib/util';
const MapPriceTypeToBadge = {
  clearance: 'Clearance',
  clearanceRange: 'Clearance',
  drop: 'Price Drop',
  hotDeal: 'Hot Deal'
};

export const getCardProps = (product = {}, props = {}) => {
  const priceObject = determinePriceObjectFromProductInfo(props, product);
  const mergedProps = {
    title: ellipsesText(determineTitle(props, product), props.titleMaxCC || 25),
    description: ellipsesText(determineDescription(props, product), props.descriptionMaxCC || 100),
    image: determineImage(props, product),
    imageAltText: determineImageAltText(props, product),
    rating: determineRating(props, product),
    badge: determineBadge(props, product, priceObject.priceType),
    colorCount: determineColorCount(props, product),
    shippingPrice: determineShippingPrice(props, product),
    patternCount: determinePatternCount(props, product),
    flavourCount: determineFlavourCount(props, product),
    teamCount: determineTeamCount(props, product),
    ctaLink: determineCtaLink(props, product),
    isGiftCard: product.isGiftCard === 'Y',
    partNumber: determinePartNumber(props, product),
    priceObject,
    isLazyLoad: props.isLazyLoad,
    classes: props.classes
  };

  return { ...props, ...mergedProps };
};

const determineImage = (props, product) => getFirstDefined([props.image, props.imageURL, product.imageURL]);

const determineTitle = (props, product) => getFirstDefined([props.title, product.manufacturer]);

const determineDescription = (props, product) => getFirstDefined([props.description, product.name]);

const determineImageAltText = (props, product) => getFirstDefined([props.imageAltText, product.imageAltDescription]);

const determineRating = (props, product) => getFirstDefined([props.rating, product.bvRating]);

const determinePartNumber = (props, product) => getFirstDefined([props.partNumber, product.partNumber]);

const determineBadge = (props, product, priceType) => {
  if (props.badge) {
    return props.badge;
  }

  if (MapPriceTypeToBadge[priceType]) {
    return MapPriceTypeToBadge[priceType];
  }

  if (product && product.adBug && product.adBug.length > 0) {
    return product.adBug[0];
  }

  return null;
};

const determineColorCount = (props, product) => getFirstDefined([props.colorCount, product.colorCount]);
const determinePatternCount = (props, product) => getFirstDefined([props.patternCount, product.patternCount]);
const determineTeamCount = (props, product) => getFirstDefined([props.teamCount, product.teamCount]);
const determineFlavourCount = (props, product) => getFirstDefined([props.flavourCount, product.flavourCount]);
const determineCtaLink = (props, product) => getFirstDefined([props.ctaLink, product.seoURL]);
const determineShippingPrice = (props, product) => getFirstDefined([props.shipping_price, product.shipping_price]);
