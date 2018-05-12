import { css } from "emotion";

export const bp = {
  xs: { min: "0", max: "575px" },
  sm: { min: "576px", max: "767px" },
  md: { min: "768px", max: "991px" },
  lg: { min: "992px", max: "1199px" },
  xl: { min: "1200px", max: "" }
};

const testZones = false;
const bgcolor = {
  header: testZones ? "red" : "white",
  body: testZones ? "white" : "white",
  content: testZones ? "green" : "white",
  footer: testZones ? "#999" : "white"
};

export const container = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;

  height: 500px;
  width: 330px;

  @media only screen and (max-width: ${bp.xs.max}) {
  }

  @media only screen and (min-width: ${bp.sm.min}) (max-width: ${bp.sm.max}) {
  }

  @media only screen and (min-width: ${bp.md.min}) (max-width: ${bp.md.max}) {
  }

  @media only screen and (min-width: ${bp.lg.min}) (max-width: ${bp.lg.max}) {
  }

  @media only screen and (min-width: ${bp.xl.min}) (max-width: ${bp.xl.max}) {
  }
`;

export const header = css`
  order: 0;
  flex: 0 0 auto;
  align-self: stretch;
  background-color: ${bgcolor.header};
  height: 270px;

  @media only screen and (max-width: ${bp.xs.max}) {
  }

  @media only screen and (min-width: ${bp.sm.min}) (max-width: ${bp.sm.max}) {
  }

  @media only screen and (min-width: ${bp.md.min}) (max-width: ${bp.md.max}) {
  }

  @media only screen and (min-width: ${bp.lg.min}) (max-width: ${bp.lg.max}) {
  }

  @media only screen and (min-width: ${bp.xl.min}) (max-width: ${bp.xl.max}) {
  }
`;

export const body = css`
  order: 0;
  flex: 1 0 auto;
  align-self: stretch;
  position: relative;
  background-color: ${bgcolor.body};
`;

export const footer = css`
  order: 0;
  flex: 0 0 auto;
  align-self: stretch;
  background-color: ${bgcolor.footer};
  height: 85px;

  @media only screen and (max-width: ${bp.xs.max}) {
  }

  @media only screen and (min-width: ${bp.sm.min}) (max-width: ${bp.sm.max}) {
  }

  @media only screen and (min-width: ${bp.md.min}) (max-width: ${bp.md.max}) {
  }

  @media only screen and (min-width: ${bp.lg.min}) (max-width: ${bp.lg.max}) {
  }

  @media only screen and (min-width: ${bp.xl.min}) (max-width: ${bp.xl.max}) {
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
  /*border: 1px solid red;*/
`;

export const image = css`
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 100%;
`;

const paddingLR = "27px;";
export const contentPaddingLR = css`
  padding-left: 27px;
  padding-right: 27px;
`;

export const content = css`
  ${contentPaddingLR};
  padding-top: 25px;
  padding-bottom: 5px;
  height: 100%;
  background-color: ${bgcolor.content};
  position: static;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const contentFooter = css`
  position: absolute;
  left: ${paddingLR};
  bottom: 5px;
`;

export const text = css`
  font-size: 16px;
`;

export const title = css`
  ${text};
  color: #7f7f7f;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const price = css`
  font-weight: bold;
  font-size: 42px;
`;

export const divider = css`
  width: 100%;
  border-bottom: 1px solid rgb(225, 225, 225);
  margin: 2px 0 7px;
`;
