import { css } from "emotion";

/**
 * Goal responsive cards that can whose starting size can be easily modified for various layouts
 * Starting assumptions
 * Pixel perfect for a window width of 1200px;
 * Starting width 328px;
 * Starting height 500px;
 * 1200px / 10 = 120 == 16px;
 */

const testZones = false;
const bgcolor = {
  header: testZones ? "red" : "transparent",
  body: testZones ? "white" : "transparent",
  content: testZones ? "green" : "transparent",
  footer: testZones ? "#999" : "transparent"
};

const containerHeight = "50em";
const containerWidth = "330px";
const headerHeight = "270px";
const contentFooterHeight = "25px";
const paddingLR = "27px";

const imageWidth = "270px";
const imageLR = "28px";
const imageHeight = "270px";
const imageTB = "0px";

const smallImageWidth = "190px";
const smallImageLR = "73px";
const smallImageHeight = "190px";
const smallImageTB = "42px";

const paddingT = "25px";

const textFontSize = "16px";
const priceFontSize = "42px";

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

const footerHeight = "85px";
export const footer = css`
  order: 0;
  flex: 0 0 auto;
  align-self: stretch;
  background-color: ${bgcolor.footer};
  height: 85px;
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

export const cardDesktopOnly = css`
  ${card};
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

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
  background-color: #7a7a7a;
  display: inline-block;
`;

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
  font-size: ${textFontSize};
`;

export const title = css`
  ${text};
  color: #7f7f7f;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const price = css`
  font-weight: bold;
  font-size: ${priceFontSize};
`;

export const divider = css`
  width: 100%;
  border-bottom: 1px solid rgb(225, 225, 225);
  margin: 2px 0 7px;
`;
