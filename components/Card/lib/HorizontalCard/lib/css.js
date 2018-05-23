/**
 * HORIZONTAL CARD
 */

import { css } from "emotion";

const styles = {};

// padding defaults
const paddingLR = "20px";

// image starting values
const imageWidth = "100px";
const imageLR = "20px";
const imageHeight = "100px";
const imageTB = "33px";

// price
const priceFontSize = "28px";

/**
 * Base Syles
 */

styles.contentPaddingLR = css`
  padding-left: ${paddingLR};
  padding-right: ${paddingLR};
`;

/**
 * Outer Most Container
 */

styles.columnContainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
`;

styles.card = css`
  ${styles.columnContainer};
  position: relative;
  background: #fff;
  text-align: left;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
  font-family: Mallory-Black, Helvetica, sans-serif;
  color: #33333;
  height: 190px;
  width: 375px;
`;

styles.cardHideOnDesktop = css`
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
  order: 0;
  flex: 0 0 auto;
  align-self: auto;
  width: 125px;
`;

/**
 * Right Column
 */

styles.rowContainer = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
`;

styles.rightColumn = css`
  order: 0;
  flex: 0 0 auto;
  align-self: auto;
  ${styles.rowContainer};
  width: 250px;
`;

/**
 * Rows - right col
 */

styles.rowHeader = css`
  order: 0;
  flex: 0 0 auto;
  align-self: auto;
  height: 12px;
`;

styles.rowBody = css`
  order: 1;
  flex: 1 0 auto;
  align-self: auto;
  padding-top: 18px;
  padding-bottom: 5px;
`;

styles.rowFooterOne = css`
  order: 2;
  flex: 0 0 auto;
  align-self: auto;
  ${styles.contentPaddingLR};
  width: 100%;
  height: 25px;
`;

styles.rowFooterTwo = css`
  order: 3;
  flex: 0 0 auto;
  align-self: auto;
  height: 65px;
`;

/**
 * Image Styles
 */

styles.image = css`
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
  ${styles.image};
  background-color: #d8d8d8;
  display: inline-block;
`;

/**
 * Body Content
 */

styles.text = css`
  font-size: 11px;
`;

styles.title = css`
  ${styles.text};
  color: #7f7f7f;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

styles.description = css`
  ${styles.text};
`;

styles.rating = css`
  ${styles.text};
`;

styles.price = css`
  font-weight: bold;
  font-size: ${priceFontSize};
`;

styles.divider = css`
  width: 100%;
  border-bottom: 1px solid rgb(225, 225, 225);
  margin: 2px 0 7px;
`;

styles.messageText = css`
  font-family: Mallory;
  font-size: 12px;
  color: #585858;
`;

export default styles;
