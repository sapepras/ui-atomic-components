/**
 * HORIZONTAL CARD
 */

import { css } from 'emotion';
import { bp } from '../../../../../util/style';

const styles = {};

styles.productCard = css`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.04), 0 0 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
`;
styles.horizontal = css`
  & .badge {
    @media only screen and (min-width: ${bp.md.min}) {
      font-size: 14px;
      padding: 4px 12px;
      font-weight: normal;
      line-height: 20px;
    }
  }
`;
styles.hrStyles = css`
  border: 0.5px solid #cccccc;
`;

const quickViewPositioning = css`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: none;

  @media only screen and (min-width: 768px) {
    div:hover > div > & {
    display: block;
  }
`;

styles.quickView = css`
  ${quickViewPositioning};
  min-height: 50px;
  height: 50px;
  min-width: 150px;
  width: 150px;
  font-family: Mallory;
  font-size: 14px;
  font-weight: bold;
  text-transform: underline;
  padding: 0;
  outline: none;
  cursor: pointer;
`;

export default styles;
