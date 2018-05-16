import { getFirstDefined } from "../../../util/component";

export const getCardProps = (product = {}, props = {}) => {
  const mergedProps = {
    title: determineTitle(props, product),
    description: determineDescription(props, product),
    image: determineImage(props, product),
    imageAltText: determineImageAltText(props, product),
    rating: props.rating,
    price: determinePrice(props, product)
  };

  return { ...props, ...mergedProps };
};

const determineImage = (props, product) => getFirstDefined([props.image, product.imageURL]);

const determineTitle = (props, product) => getFirstDefined([props.title, product.manufacturer]);

const determineDescription = (props, product) => getFirstDefined([props.description, product.name]);
const determineImageAltText = (props, product) =>
  getFirstDefined([props.imageAltText, product.imageAltDescription]);

const determinePrice = props => getFirstDefined([props.price]);
