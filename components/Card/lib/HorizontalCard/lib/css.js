import { css } from "emotion";

// const testZones = false;
// const bgcolor = {
//   header: testZones ? "red" : "white",
//   body: testZones ? "white" : "white",
//   content: testZones ? "green" : "white",
//   footer: testZones ? "#999" : "white"
// };

export const paddingLR = "20px";
export const contentPaddingLR = css`
  padding-left: ${paddingLR};
  padding-right: ${paddingLR};
`;

export const columnContainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
`;

export const leftColumn = css`
  order: 0;
  flex: 0 0 auto;
  align-self: auto;
  width: 125px;
`;

export const rowContainer = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
`;

export const rightColumn = css`
  order: 0;
  flex: 0 0 auto;
  align-self: auto;
  ${rowContainer};
  width: 250px;
`;

export const rowHeader = css`
  order: 0;
  flex: 0 0 auto;
  align-self: auto;
  height: 12px;
`;

export const rowBody = css`
  order: 1;
  flex: 1 0 auto;
  align-self: auto;
  padding-top: 18px;
  padding-bottom: 5px;
`;

export const rowFooterOne = css`
  order: 2;
  flex: 0 0 auto;
  align-self: auto;
  ${contentPaddingLR};
  width: 100%;
  height: 25px;
`;

export const rowFooterTwo = css`
  order: 3;
  flex: 0 0 auto;
  align-self: auto;
  height: 65px;
`;

export const card = css`
  ${columnContainer};
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

export const cardHideOnDesktop = css`
  ${card};
  display: none;

  @media only screen and (max-width: 767px) {
    display: flex;
  }
`;

const imageWidth = "100px";
const imageLR = "20px";
const imageHeight = "100px";
const imageTB = "33px";
export const image = css`
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

export const emptyImage = css`
  ${image};
  background-color: #d8d8d8;
  display: inline-block;
`;

export const text = css`
  font-size: 11px;
`;

export const title = css`
  ${text};
  color: #7f7f7f;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const description = css`
  ${text};
`;

export const rating = css`
  ${text};
`;

const priceFontSize = "28px";
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
