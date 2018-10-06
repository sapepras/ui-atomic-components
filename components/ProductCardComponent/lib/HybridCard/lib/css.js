/**
 * HORIZONTAL CARD
 */

import { css } from 'emotion';
import { bp } from '../../../../../util/style';

const styles = {
  outOfStock: css`
    color: #ee0000;
  `
};

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
    div:hover > &,
    a:focus > div.product-card &,
    a:focus-within > div.product-card & {
      display: block;
    }
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
  cursor: pointer;
`;
styles.hoverImage = css`
  @media only screen and (min-width: 768px) {
    .c-product__has-quickview div:hover > & {
      opacity: 0.5;
    }
  }
`;
styles.removeIcon = css`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
    position: absolute;
    right: 0px;
    color: #0055a6;
    font-size: 12px;
    border: none;
    width: auto;
    background: none;
    padding: 0;
    cursor: pointer;
    :focus {
      outline: none;
    }
  }
`;
styles.removeCircleIcon = css`
  display: block;
  font-size: 16px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
styles.iconBtn = css`
  border: none;
  width: auto;
  background: none;
  color: #0055a6;
  cursor: pointer;
  :focus {
    outline: none;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
styles.removeText = css`
  display: block;
  font-size: 14px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
styles.moveToCartBtn = css`
  white-space: nowrap;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;
styles.hrFullStyles = css`
  border: 0.5px solid #cccccc;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export default styles;
