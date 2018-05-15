import { getFirstDefined } from "../../util/component";

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

// | attr        | type         | desc                                                            |
// | ----------- | ------------ | --------------------------------------------------------------- |
// | description | string       | text describing item                                            |
// | imageURL    | string       | url pointing to image to be rendered in top of card             |
// | imageAltText  | string       | alt text to be displayed on image hover                         |
// | imageWide   | boolean      | stretches the image to take up maximum header room, no padding  |
// | imageSmall  | boolean      | adds extra padding around the image                             |
// | rating      | number (0-5) | number of stars to show as colored for rating view              |
// | price       | string       | price to be shown at bottom of card                             |
// | product     | object       | product json object as returned by api - details in below table |

// </hr>

// | product properties          | Maps to attr | type   | desc                                                |
// | --------------------------- | ------------ | ------ | --------------------------------------------------- |
// | product                     |              | object | product json object as returned by api              |
// | product.manufacturer        | title        | string | text describing item                                |
// | product.name                | description  | string | text describing item                                |
// | product.imageURL            | imageURL     | string | url pointing to image to be rendered in top of card |
// | product.imageAltDescription | imageAlt     | string | alt text to be displayed on image hover             |
