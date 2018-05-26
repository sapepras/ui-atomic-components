/**
 * HORIZONTAL CARD
 */

import { css } from 'emotion';

const styles = {};

// padding defaults
const paddingLR = '22px';

// image starting values
const imageWidth = '100px';
const imageLR = '20px';
const imageHeight = '100px';
const imageTB = '33px';

const textFontSize = '12px';
const messageTextFontSize = '10px';

// price
const priceFontSize = '28px';

/**
 * Base Syles
 */

styles.contentPaddingLR = css`
  emo-ref: 'contentPaddingLR';
  padding-left: ${paddingLR};
  padding-right: ${paddingLR};
`;

/**
 * Outer Most Container
 */

styles.columnContainer = css`
  emo-ref: 'columnContainer';
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
`;

styles.card = css`
  emo-ref: 'card';
  ${styles.columnContainer};
  position: relative;
  background: #fff;
  text-align: left;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.04), 0 0 2px 0 rgba(0, 0, 0, 0.1), 0 3px 7px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
  font-family: Mallory-Black, Helvetica, sans-serif;
  color: #33333;
  height: 190px;
  width: 375px;
  max-width: 90vw;
`;

styles.cardHideOnDesktop = css`
  emo-ref: 'cardHideOnDesktop';
  ${styles.card};
  display: none;

  @media only screen and (max-width: 767px) {
    display: flex;
  }
`;

/**
 * Left Column
 */

styles.leftColumn = css`
  emo-ref: 'leftColumn';
  order: 0;
  flex: 0 0 auto;
  align-self: auto;
  width: 125px;
`;

/**
 * Right Column
 */

styles.rowContainer = css`
  emo-ref: 'rowContainer';
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
`;

styles.rightColumn = css`
  emo-ref: 'rightColumn';
  order: 0;
  flex: 0 0 auto;
  align-self: auto;
  ${styles.rowContainer};
  width: 250px;
  max-width: 60vw;
`;

/**
 * Rows - right col
 */

styles.rowHeader = css`
  emo-ref: 'rowHeader';
  order: 0;
  flex: 0 0 auto;
  align-self: auto;
  height: 12px;
`;

styles.rowBody = css`
  emo-ref: 'rowBody';
  order: 1;
  flex: 1 0 auto;
  align-self: auto;
  padding-top: 16px;
  padding-bottom: 5px;
`;

styles.rowFooterOne = css`
  emo-ref: 'rowFooterOne';
  order: 2;
  flex: 0 0 auto;
  align-self: auto;
  ${styles.contentPaddingLR};
  width: 100%;
  height: 25px;
`;

styles.rowFooterTwo = css`
  emo-ref: 'rowFooterTwo';
  order: 3;
  flex: 0 0 auto;
  align-self: auto;
  height: 65px;
  width: 100%;
`;

/**
 * Image Styles
 */

styles.image = css`
  emo-ref: 'image';
  display: block;
  width: ${imageWidth};
  max-width: ${imageWidth};
  margin-left: ${imageLR};
  margin-right: ${imageLR};

  height: ${imageHeight};
  max-height: ${imageHeight};
  margin-top: ${imageTB};
  margin-bottom: ${imageTB};
`;

styles.emptyImage = css`
  emo-ref: 'emptyImage';
  ${styles.image};
  background-color: #d8d8d8;
  display: inline-block;
`;

/**
 * Body Content
 */

styles.text = css`
  emo-ref: 'text';
  font-family: Mallory-Book;
  font-size: ${textFontSize};
  font-weight: normal;
`;

styles.title = css`
  emo-ref: 'title';
  ${styles.text};
  color: #7f7f7f;
  text-transform: uppercase;
  margin-bottom: 3px;
  letter-spacing: 0.6px;
`;

styles.description = css`
  emo-ref: 'description';
  ${styles.text};
  line-height: 1.17;
`;

styles.rating = css`
  emo-ref: 'rating';
  ${styles.text};
`;

styles.price = css`
  emo-ref: 'price';
  font-weight: bold;
  font-size: ${priceFontSize};
`;

styles.divider = css`
  emo-ref: 'divider';
  width: 100%;
  border-bottom: 1px solid rgb(225, 225, 225);
  margin: 2px 0 7px;
`;

styles.messageText = css`
  emo-ref: 'messageText';
  font-size: ${messageTextFontSize};
  font-family: Mallory;
  color: #585858;
`;

export default styles;
