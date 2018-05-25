/**
 * VERTICAL CARD
 */

import { css } from 'emotion';
import { bp } from '../../../../../util/style';

const styles = {};

export const appendProperties = (cssClass, properties) => css`
  ${cssClass} ${properties};
`;

// export const cascade = (baseStyles, overridingStyle) => {
//   let newStyles = { ...baseStyles };
//   if (overridingStyle) {
//     newStyles = Object.keys(overridingStyle).reduce(prop => {
//       if (newStyles[prop]) {
//         newStyles[prop] = css`
//           ${newStyles[prop]} ${overridingStyle[prop]};
//         `;
//       } else {
//         newStyles[prop] = css`
//           ${overridingStyle[prop]};
//         `;
//       }
//     }, newStyles);
//   }
//   return newStyles;
// };

/**
 * Goal responsive cards that can whose starting size can be easily modified for various layouts
 * Starting assumptions
 * Pixel perfect for a window width of 1200px;
 * Starting width 330px;
 * Starting height 500px;
 */

// container starting dimensions
const containerHeight = '50em'; // 500px @1200px vw
const containerWidth = '33em'; // 330px @1200px vw

// container-row starting dimensions
const headerHeight = '27em'; // 270px @1200px vw
const contentFooterHeight = '2.5em'; // 25px @1200px vw
const footerHeight = '8.5em'; // 85px @1200px vw

// image starting values
const imageWidth = '27em'; // 270px @1200px vw
const imageLR = '2.8em'; // 28px @1200px vw
const imageHeight = '27em'; // 270px @1200px vw
const imageTB = '0'; // 0px @1200px vw

const smallImageWidth = '19em'; // 190px @1200px vw
const smallImageLR = '7.3em'; // 73px @1200px vw
const smallImageHeight = '19em'; // 190px @1200px vw
const smallImageTB = '4.2em'; // 42px @1200px vw

// padding defaults
const paddingLR = '2.7em'; // 27px @1200px vw
const paddingT = '2.5em'; // 25px @1200px vw

// default font sizes
const mobileTextFontsize = '14px';
const desktopTextFontSize = '16px'; // px @any vw
const mobilePriceFontSize = '28px';
const desktopSmallPriceFontSize = '36px';
const desktopPriceFontSize = '42px'; // px @any vw

/**
 * Outer Most Container
 */

styles.container = css`
  emo-ref: "container";
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  /* border: 1px solid red; */

  height: ${containerHeight};
  width: ${containerWidth};
`;

styles.card = css`
  ${styles.container};
  emo-ref: "card";
  background: #fff;
  text-align: left;
  border-radius: 6px;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
  font-family: Mallory-Black, Helvetica, sans-serif;
  color: #33333;
`;

/**
 * Card Rows
 */

styles.header = css`
  emo-ref: "header";
  order: 0;
  flex: 0 0 auto;
  align-self: stretch;
  height: ${headerHeight};
`;

styles.body = css`
  emo-ref: "body";
  order: 0;
  flex: 1 0 auto;
  align-self: stretch;
  position: relative;
`;

styles.contentFooter = css`
  ${styles.text};
  emo-ref: "contentFooter";
  padding-left: ${paddingLR};
  padding-right: ${paddingLR};
  height: ${contentFooterHeight};
`;

styles.footer = css`
  emo-ref: "footer";
  order: 0;
  flex: 0 0 auto;
  align-self: stretch;
  height: ${footerHeight};
`;

/**
 * Show/Hide vertical on mobile.
 */

styles.cardDesktopOnly = css`
  ${styles.card};
  emo-ref: "cardDesktopOnly";
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

/**
 * Image Styles
 */

styles.imageWide = css`
  emo-ref: "imageWide";
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 100%;
`;

styles.image = css`
  ${styles.imageWide};
  emo-ref: "image";
  width: ${imageWidth};
  max-width: ${imageWidth};
  margin-left: ${imageLR};
  margin-right: ${imageLR};

  height: ${imageHeight};
  max-height: ${imageHeight};
  margin-top: ${imageTB};
  margin-bottom: ${imageTB};
`;

styles.imageSmall = css`
  ${styles.imageWide};
  emo-ref: "imageSmall";
  width: ${smallImageWidth};
  max-width: ${smallImageWidth};
  margin-left: ${smallImageLR};
  margin-right: ${smallImageLR};

  height: ${smallImageHeight};
  max-height: ${smallImageHeight};
  margin-top: ${smallImageTB};
  margin-bottom: ${smallImageTB};
`;

styles.emptyImage = css`
  ${styles.imageSmall};
  emo-ref: "emptyImage";
  background-color: #d8d8d8;
  display: inline-block;
`;

/**
 * Body Content
 */

styles.contentPaddingLR = css`
  emo-ref: "contentPaddingLR";
  padding-left: ${paddingLR};
  padding-right: ${paddingLR};
`;

styles.content = css`
  ${styles.contentPaddingLR};
  emo-ref: "content";
  padding-top: ${paddingT};
  padding-bottom: 5px;
  height: 100%;
  position: static;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

styles.text = css`
  emo-ref: "text";
  font-size: ${mobileTextFontsize};

  @media only screen and (min-width: ${bp.md.min}) {
    font-size: ${desktopTextFontSize};
  }
}
`;

styles.description = css`
  ${styles.text};
  emo-ref: "description";
`;

styles.title = css`
  ${styles.text};
  emo-ref: "title";
  color: #7f7f7f;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

styles.rating = css`
  ${styles.text};
  emo-ref: "rating";
`;

/**
 * Footer Content
 */

styles.price = css`
  emo-ref: "price";
  font-weight: bold;
  font-size: ${mobilePriceFontSize};

  @media only screen and (min-width: ${bp.md.min}) and (max-width: ${bp.md.max}) {
    font-size: ${desktopSmallPriceFontSize};
  }

  @media only screen and (min-width: ${bp.lg.min}) {
    font-size: ${desktopPriceFontSize};
  }
`;

styles.divider = css`
  emo-ref: "divider";
  width: 100%;
  border-bottom: 1px solid rgb(225, 225, 225);
  margin: 2px 0 7px;
`;

styles.messageText = css`
  emo-ref: "messageText";
  font-family: Mallory;
  font-size: 12px;
  color: #585858;
`;

export default styles;
