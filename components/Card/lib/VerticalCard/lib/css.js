import { css } from "emotion";

/**
 * Goal responsive cards that can whose starting size can be easily modified for various layouts
 * Starting assumptions
 * Pixel perfect for a window width of 1200px;
 * Starting width 330px;
 * Starting height 500px;
 */

export const appendProperties = (cssClass, properties) => css`
  ${cssClass} ${properties};
`;

const testZones = false;
const bgcolor = {
  header: testZones ? "red" : "transparent",
  body: testZones ? "white" : "transparent",
  content: testZones ? "green" : "transparent",
  footer: testZones ? "#999" : "transparent"
};

// container starting dimensions
const containerHeight = "50em"; // 500px @1200px vw
const containerWidth = "33em"; // 330px @1200px vw

// container-row starting dimensions
const headerHeight = "27em"; // 270px @1200px vw
const contentFooterHeight = "2.5em"; // 25px @1200px vw
const footerHeight = "8.5em"; // 85px @1200px vw

// image starting values
const imageWidth = "27em"; // 270px @1200px vw
const imageLR = "2.8em"; // 28px @1200px vw
const imageHeight = "27em"; // 270px @1200px vw
const imageTB = "0"; // 0px @1200px vw

const smallImageWidth = "19em"; // 190px @1200px vw
const smallImageLR = "7.3em"; // 73px @1200px vw
const smallImageHeight = "19em"; // 190px @1200px vw
const smallImageTB = "4.2em"; // 42px @1200px vw

// padding defaults
const paddingLR = "2.7em"; // 27px @1200px vw
const paddingT = "2.5em"; // 25px @1200px vw

// default font sizes
const textFontSize = "16px"; // px @any vw
const priceFontSize = "42px"; // px @any vw

/**
 * Outer Most Container
 */

export const container = css`
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

export const card = css`
  ${container};
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

export const header = css`
  order: 0;
  flex: 0 0 auto;
  align-self: stretch;
  background-color: ${bgcolor.header};
  height: ${headerHeight};
`;

export const body = css`
  order: 0;
  flex: 1 0 auto;
  align-self: stretch;
  position: relative;
  background-color: ${bgcolor.body};
`;

export const contentFooter = css`
  ${text};
  padding-left: ${paddingLR};
  padding-right: ${paddingLR};
  height: ${contentFooterHeight};
`;

export const footer = css`
  order: 0;
  flex: 0 0 auto;
  align-self: stretch;
  background-color: ${bgcolor.footer};
  height: ${footerHeight};
`;

/**
 * Show/Hide vertical on mobile.
 */

export const cardDesktopOnly = css`
  ${card};
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

/**
 * Image Styles
 */

export const imageWide = css`
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 100%;
`;

export const image = css`
  ${imageWide};
  width: ${imageWidth};
  max-width: ${imageWidth};
  margin-left: ${imageLR};
  margin-right: ${imageLR};

  height: ${imageHeight};
  max-height: ${imageHeight};
  margin-top: ${imageTB};
  margin-bottom: ${imageTB};
`;

export const imageSmall = css`
  ${imageWide};
  width: ${smallImageWidth};
  max-width: ${smallImageWidth};
  margin-left: ${smallImageLR};
  margin-right: ${smallImageLR};

  height: ${smallImageHeight};
  max-height: ${smallImageHeight};
  margin-top: ${smallImageTB};
  margin-bottom: ${smallImageTB};
`;

export const emptyImage = css`
  ${imageSmall};
  background-color: #d8d8d8;
  display: inline-block;
`;

/**
 * Body Content
 */

export const contentPaddingLR = css`
  padding-left: ${paddingLR};
  padding-right: ${paddingLR};
`;

export const content = css`
  ${contentPaddingLR};
  padding-top: ${paddingT};
  padding-bottom: 5px;
  height: 100%;
  background-color: ${bgcolor.content};
  position: static;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const text = css`
  font-size: ${textFontSize};
}
`;

export const description = css`
  ${text};
`;

export const title = css`
  ${text};
  color: #7f7f7f;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const rating = css`
  ${text};
`;

/**
 * Footer Content
 */

export const price = css`
  font-weight: bold;
  font-size: ${priceFontSize};
`;

export const divider = css`
  width: 100%;
  border-bottom: 1px solid rgb(225, 225, 225);
  margin: 2px 0 7px;
`;

export const messageText = css`
  font-family: Mallory;
  font-size: 12px;
  color: #585858;
`;
