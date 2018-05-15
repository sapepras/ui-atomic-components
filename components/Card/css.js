import { css } from "emotion";

export const bp = {
  xs: { min: "0", max: "575px" },
  sm: { min: "576px", max: "767px" },
  md: { min: "768px", max: "991px" },
  lg: { min: "992px", max: "1199px" },
  xl: { min: "1200px", max: "" }
};

export const bpModifier = {
  xs: 0.71,
  sm: 0.71,
  md: 0.71,
  lg: 0.81,
  xl: 1
};

const testZones = false;
const bgcolor = {
  header: testZones ? "red" : "white",
  body: testZones ? "white" : "white",
  content: testZones ? "green" : "white",
  footer: testZones ? "#999" : "white"
};

const containerHeight = "500px";
const containerWidth = "330px";
export const container = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  border: 1px solid red;

  height: 500px;
  width: 330px;

  @media only screen and (max-width: ${bp.xs.max}) {
    height: calc(${containerHeight} * ${bpModifier.xs});
    width: calc(${containerWidth} * ${bpModifier.xs});
  }

  @media only screen and (min-width: ${bp.sm.min}) and (max-width: ${bp.sm.max}) {
    height: calc(${containerHeight} * ${bpModifier.sm});
    width: calc(${containerWidth} * ${bpModifier.sm});
  }

  @media only screen and (min-width: ${bp.md.min}) and (max-width: ${bp.md.max}) {
    height: calc(${containerHeight} * ${bpModifier.md});
    width: calc(${containerWidth} * ${bpModifier.md});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    height: calc(${containerHeight} * ${bpModifier.lg});
    width: calc(${containerWidth} * ${bpModifier.lg});
  }

  @media only screen and (min-width: ${bp.xl.min}) {
    height: ${containerHeight};
    width: ${containerWidth};
  }
`;

const headerHeight = "270px";
export const header = css`
  order: 0;
  flex: 0 0 auto;
  align-self: stretch;
  background-color: ${bgcolor.header};
  height: 270px;

  @media only screen and (max-width: ${bp.xs.max}) {
    height: calc(${headerHeight} * ${bpModifier.xs});
  }

  @media only screen and (min-width: ${bp.sm.min}) and (max-width: ${bp.sm.max}) {
    height: calc(${headerHeight} * ${bpModifier.sm});
  }

  @media only screen and (min-width: ${bp.md.min}) and (max-width: ${bp.md.max}) {
    height: calc(${headerHeight} * ${bpModifier.md});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    height: calc(${headerHeight} * ${bpModifier.lg});
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

const footerHeight = "85px";
export const footer = css`
  order: 0;
  flex: 0 0 auto;
  align-self: stretch;
  background-color: ${bgcolor.footer};
  height: 85px;

  @media only screen and (max-width: ${bp.xs.max}) {
    height: calc(${footerHeight} * ${bpModifier.xs});
  }

  @media only screen and (min-width: ${bp.sm.min}) and (max-width: ${bp.sm.max}) {
    height: calc(${footerHeight} * ${bpModifier.sm});
  }

  @media only screen and (min-width: ${bp.md.min}) and (max-width: ${bp.md.max}) {
    height: calc(${footerHeight} * ${bpModifier.md});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    height: calc(${footerHeight} * ${bpModifier.lg});
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
  font-family: Helvetica, sans-serif;
  color: #33333;
`;

export const imageWide = css`
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 100%;
`;

let imageWidth = "270px";
let imageLR = "28px";
let imageHeight = "270px";
let imageTB = "0px";
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

  @media only screen and (max-width: ${bp.xs.max}) {
    width: calc(${imageWidth} * ${bpModifier.xs});
    max-width: calc(${imageWidth} * ${bpModifier.xs});
    margin-left: calc(${imageLR} * ${bpModifier.xs});
    margin-right: calc(${imageLR} * ${bpModifier.xs});

    height: calc(${imageHeight} * ${bpModifier.xs});
    max-height: calc(${imageHeight} * ${bpModifier.xs});
    margin-top: calc(${imageTB} * ${bpModifier.xs});
    margin-bottom: calc(${imageTB} * ${bpModifier.xs});
  }

  @media only screen and (min-width: ${bp.sm.min}) and (max-width: ${bp.sm.max}) {
    width: calc(${imageWidth} * ${bpModifier.sm});
    max-width: calc(${imageWidth} * ${bpModifier.sm});
    margin-left: calc(${imageLR} * ${bpModifier.sm});
    margin-right: calc(${imageLR} * ${bpModifier.sm});

    height: calc(${imageHeight} * ${bpModifier.sm});
    max-height: calc(${imageHeight} * ${bpModifier.sm});
    margin-top: calc(${imageTB} * ${bpModifier.sm});
    margin-bottom: calc(${imageTB} * ${bpModifier.sm});
  }

  @media only screen and (min-width: ${bp.md.min}) and (max-width: ${bp.md.max}) {
    width: calc(${imageWidth} * ${bpModifier.md});
    max-width: calc(${imageWidth} * ${bpModifier.md});
    margin-left: calc(${imageLR} * ${bpModifier.md});
    margin-right: calc(${imageLR} * ${bpModifier.md});

    height: calc(${imageHeight} * ${bpModifier.md});
    max-height: calc(${imageHeight} * ${bpModifier.md});
    margin-top: calc(${imageTB} * ${bpModifier.md});
    margin-bottom: calc(${imageTB} * ${bpModifier.md});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    width: calc(${imageWidth} * ${bpModifier.lg});
    max-width: calc(${imageWidth} * ${bpModifier.lg});
    margin-left: calc(${imageLR} * ${bpModifier.lg});
    margin-right: calc(${imageLR} * ${bpModifier.lg});

    height: calc(${imageHeight} * ${bpModifier.lg});
    max-height: calc(${imageHeight} * ${bpModifier.lg});
    margin-top: calc(${imageTB} * ${bpModifier.lg});
    margin-bottom: calc(${imageTB} * ${bpModifier.lg});
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

imageWidth = "190px";
imageLR = "73px";
imageHeight = "190px";
imageTB = "42px";
export const imageSmall = css`
  ${imageWide};
  width: ${imageWidth};
  max-width: ${imageWidth};
  margin-left: ${imageLR};
  margin-right: ${imageLR};

  height: ${imageHeight};
  max-height: ${imageHeight};
  margin-top: ${imageTB};
  margin-bottom: ${imageTB};

  @media only screen and (max-width: ${bp.xs.max}) {
    width: calc(${imageWidth} * ${bpModifier.xs});
    max-width: calc(${imageWidth} * ${bpModifier.xs});
    margin-left: calc(${imageLR} * ${bpModifier.xs});
    margin-right: calc(${imageLR} * ${bpModifier.xs});

    height: calc(${imageHeight} * ${bpModifier.xs});
    max-height: calc(${imageHeight} * ${bpModifier.xs});
    margin-top: calc(${imageTB} * ${bpModifier.xs});
    margin-bottom: calc(${imageTB} * ${bpModifier.xs});
  }

  @media only screen and (min-width: ${bp.sm.min}) and (max-width: ${bp.sm.max}) {
    width: calc(${imageWidth} * ${bpModifier.sm});
    max-width: calc(${imageWidth} * ${bpModifier.sm});
    margin-left: calc(${imageLR} * ${bpModifier.sm});
    margin-right: calc(${imageLR} * ${bpModifier.sm});

    height: calc(${imageHeight} * ${bpModifier.sm});
    max-height: calc(${imageHeight} * ${bpModifier.sm});
    margin-top: calc(${imageTB} * ${bpModifier.sm});
    margin-bottom: calc(${imageTB} * ${bpModifier.sm});
  }

  @media only screen and (min-width: ${bp.md.min}) and (max-width: ${bp.md.max}) {
    width: calc(${imageWidth} * ${bpModifier.md});
    max-width: calc(${imageWidth} * ${bpModifier.md});
    margin-left: calc(${imageLR} * ${bpModifier.md});
    margin-right: calc(${imageLR} * ${bpModifier.md});

    height: calc(${imageHeight} * ${bpModifier.md});
    max-height: calc(${imageHeight} * ${bpModifier.md});
    margin-top: calc(${imageTB} * ${bpModifier.md});
    margin-bottom: calc(${imageTB} * ${bpModifier.md});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    width: calc(${imageWidth} * ${bpModifier.lg});
    max-width: calc(${imageWidth} * ${bpModifier.lg});
    margin-left: calc(${imageLR} * ${bpModifier.lg});
    margin-right: calc(${imageLR} * ${bpModifier.lg});

    height: calc(${imageHeight} * ${bpModifier.lg});
    max-height: calc(${imageHeight} * ${bpModifier.lg});
    margin-top: calc(${imageTB} * ${bpModifier.lg});
    margin-bottom: calc(${imageTB} * ${bpModifier.lg});
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

const paddingLR = "27px";
export const contentPaddingLR = css`
  padding-left: ${paddingLR};
  padding-right: ${paddingLR};
`;

const paddingT = "25px";
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

  @media only screen and (max-width: ${bp.xs.max}) {
    padding-top: calc(${paddingT} * ${bpModifier.xs});
  }

  @media only screen and (min-width: ${bp.sm.min}) and (max-width: ${bp.sm.max}) {
    padding-top: calc(${paddingT} * ${bpModifier.sm});
  }

  @media only screen and (min-width: ${bp.md.min}) and (max-width: ${bp.md.max}) {
    padding-top: calc(${paddingT} * ${bpModifier.md});
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    padding-top: calc(${paddingT} * ${bpModifier.lg});
  }

  @media only screen and (min-width: ${bp.xl.min}) {
    padding-top: ${paddingT};
  }
`;

export const contentFooter = css`
  position: absolute;
  left: ${paddingLR};
  bottom: 5px;
`;

const textFontSize = "16px";
export const text = css`
  font-size: ${textFontSize};

  @media only screen and (max-width: ${bp.xs.max}) {
    font-size: calc(${textFontSize} * ${bpModifier.lg});
  }

  @media only screen and (min-width: ${bp.sm.min}) and (max-width: ${bp.sm.max}) {
    font-size: calc(${textFontSize} * ${bpModifier.lg});
  }

  @media only screen and (min-width: ${bp.md.min}) and (max-width: ${bp.md.max}) {
    font-size: calc(${textFontSize} * ${bpModifier.lg});
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

const priceFontSize = "42px";
export const price = css`
  font-weight: bold;
  font-size: ${priceFontSize};

  @media only screen and (max-width: ${bp.xs.max}) {
    font-size: calc(${priceFontSize} * ${bpModifier.lg});
  }

  @media only screen and (min-width: ${bp.sm.min}) and (max-width: ${bp.sm.max}) {
    font-size: calc(${priceFontSize} * ${bpModifier.lg});
  }

  @media only screen and (min-width: ${bp.md.min}) and (max-width: ${bp.md.max}) {
    font-size: calc(${priceFontSize} * ${bpModifier.lg});
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
