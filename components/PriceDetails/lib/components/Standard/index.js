import React, { Fragment } from 'react';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';
import * as css from '../../css';

const Standard = props => {
  const {
 salePrice, listPrice, firstPriceMessageText, ...remainingProps
} = props;
  const price = salePrice || listPrice;
  if (price) {
    return (
      <Fragment>
        <Price price={price} {...remainingProps} />
        {firstPriceMessageText && firstPriceMessageText.length > 0 && <div className={css.clearanceMsgStyle}>{firstPriceMessageText}</div>}
      </Fragment>
    );
  }
  return null;
};

Standard.propTypes = productDetailChildPropTypes;

export default Standard;
