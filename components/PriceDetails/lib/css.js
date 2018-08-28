import { css } from 'react-emotion';

export const titleText = css`
  font-family: MalloryCond-Black;
  font-weight: bold;
  font-size: 21px;
`;

export const contentText = css`
  font-family: Mallory-Book;
  font-size: 12px;
  color: #333333;
  margin-left: 0.5rem;
  @media only screen and (min-width: 768px) {
    margin-left: 0;
  }
  @media only screen and (min-width: 1349px) {
    margin-left: 0.5rem;
  }
`;

export const clearanceMsgStyle = css`
  ${contentText};
  color: #ee0000;
`;

export const toolTipStyles = css`
  width: 200px;
  background-color: #ffffff;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.1), 0 6px 12px 0 rgba(0, 0, 0, 0.04), 0 2px 5px 0 rgba(0, 0, 0, 0.08);
  font-family: Mallory-Book;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #333333;
`;
