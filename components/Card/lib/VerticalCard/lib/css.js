import { css } from "emotion";
import { bp, modifier } from "../../../../../util/style";

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

  height: 500px;
  width: 330px;

  @media only screen and (max-width: ${bp.md.max}) {
    height: calc(${containerHeight} * ${modifier.bp.md});
    width: calc(${containerWidth} * ${modifier.bp.md});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    height: calc(${containerHeight} * ${modifier.bp.lg});
    width: calc(${containerWidth} * ${modifier.bp.lg});
  }

  @media only screen and (min-width: ${bp.xl.min}) {
    height: ${containerHeight};
    width: ${containerWidth};
  }
`;

export const header = css`
  order: 0;
  flex: 0 0 auto;
  align-self: stretch;
  background-color: ${bgcolor.header};
  height: 270px;

  @media only screen and (max-width: ${bp.md.max}) {
    height: calc(${headerHeight} * ${modifier.bp.md});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    height: calc(${headerHeight} * ${modifier.bp.lg});
  }

  @media only screen and (min-width: ${bp.xl.min}) {
    height: ${headerHeight};
  }
`;

export const body = css`
  order: 0;
  flex: 1 0 auto;
  align-self: stretch;
  position: relative;
  background-color: ${bgcolor.body};
`;

export const contentFooter = css`
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

  @media only screen and (max-width: ${bp.md.max}) {
    height: calc(${footerHeight} * ${modifier.bp.md});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    height: calc(${footerHeight} * ${modifier.bp.lg});
  }

  @media only screen and (min-width: ${bp.xl.min}) {
    height: ${footerHeight};
  }
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

  @media only screen and (max-width: ${bp.md.max}) {
    width: calc(${imageWidth} * ${modifier.bp.md});
    max-width: calc(${imageWidth} * ${modifier.bp.md});
    margin-left: calc(${imageLR} * ${modifier.bp.md});
    margin-right: calc(${imageLR} * ${modifier.bp.md});

    height: calc(${imageHeight} * ${modifier.bp.md});
    max-height: calc(${imageHeight} * ${modifier.bp.md});
    margin-top: calc(${imageTB} * ${modifier.bp.md});
    margin-bottom: calc(${imageTB} * ${modifier.bp.md});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    width: calc(${imageWidth} * ${modifier.bp.lg});
    max-width: calc(${imageWidth} * ${modifier.bp.lg});
    margin-left: calc(${imageLR} * ${modifier.bp.lg});
    margin-right: calc(${imageLR} * ${modifier.bp.lg});

    height: calc(${imageHeight} * ${modifier.bp.lg});
    max-height: calc(${imageHeight} * ${modifier.bp.lg});
    margin-top: calc(${imageTB} * ${modifier.bp.lg});
    margin-bottom: calc(${imageTB} * ${modifier.bp.lg});
  }

  @media only screen and (min-width: ${bp.xl.min}) {
    width: ${imageWidth};
    max-width: ${imageWidth};
    margin-left: ${imageLR};
    margin-right: ${imageLR};

    height: ${imageHeight};
    max-height: ${imageHeight};
    margin-top: ${imageTB};
    margin-bottom: ${imageTB};
  }
`;

export const imageSmall = css`
  ${imageWide};
  width: ${smallImageWidth};
  max-width: ${smallImageWidth};
  margin-left: ${smallImageLR};
  margin-right: ${smallImageLR};

  height: ${smallImageHeight};
  max-height: ${smallImageHeight};
  margin-top: ${imageTB};
  margin-bottom: ${imageTB};

  @media only screen and (max-width: ${bp.md.max}) {
    width: calc(${smallImageWidth} * ${modifier.bp.md});
    max-width: calc(${smallImageWidth} * ${modifier.bp.md});
    margin-left: calc(${smallImageLR} * ${modifier.bp.md});
    margin-right: calc(${smallImageLR} * ${modifier.bp.md});

    height: calc(${smallImageHeight} * ${modifier.bp.md});
    max-height: calc(${smallImageHeight} * ${modifier.bp.md});
    margin-top: calc(${smallImageTB} * ${modifier.bp.md});
    margin-bottom: calc(${smallImageTB} * ${modifier.bp.md});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    width: calc(${smallImageWidth} * ${modifier.bp.lg});
    max-width: calc(${smallImageWidth} * ${modifier.bp.lg});
    margin-left: calc(${smallImageLR} * ${modifier.bp.lg});
    margin-right: calc(${smallImageLR} * ${modifier.bp.lg});

    height: calc(${smallImageHeight} * ${modifier.bp.lg});
    max-height: calc(${smallImageHeight} * ${modifier.bp.lg});
    margin-top: calc(${smallImageTB} * ${modifier.bp.lg});
    margin-bottom: calc(${smallImageTB} * ${modifier.bp.lg});
  }

  @media only screen and (min-width: ${bp.xl.min}) {
    width: ${smallImageWidth};
    max-width: ${smallImageWidth};
    margin-left: ${smallImageLR};
    margin-right: ${smallImageLR};

    height: ${smallImageHeight};
    max-height: ${smallImageHeight};
    margin-top: ${smallImageTB};
    margin-bottom: ${smallImageTB};
  }
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

  @media only screen and (max-width: ${bp.md.max}) {
    padding-top: calc(${paddingT} * ${modifier.bp.md});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    padding-top: calc(${paddingT} * ${modifier.bp.lg});
  }

  @media only screen and (min-width: ${bp.xl.min}) {
    padding-top: ${paddingT};
  }
`;

export const text = css`
  font-size: ${textFontSize};

  @media only screen and (max-width: ${bp.md.max}) {
    font-size: calc(${textFontSize} * ${modifier.bp.lg});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    font-size: ${textFontSize};
  }

  @media only screen and (min-width: ${bp.xl.min}) {
    font-size: ${textFontSize};
  }
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

  @media only screen and (max-width: ${bp.md.max}) {
    font-size: calc(${priceFontSize} * ${modifier.bp.lg});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    font-size: ${priceFontSize};
  }

  @media only screen and (min-width: ${bp.xl.min}) {
    font-size: ${priceFontSize};
  }
`;

export const divider = css`
  width: 100%;
  border-bottom: 1px solid rgb(225, 225, 225);
  margin: 2px 0 7px;
`;
