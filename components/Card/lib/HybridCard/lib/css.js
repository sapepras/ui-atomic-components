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
  font-weight:  normal;
  line-height: 20px;
  }
 }
`;
styles.hrStyles = css`
border: 0.5px solid #cccccc;
`;
export default styles;

