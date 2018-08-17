import React, { Fragment } from 'react';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';
import * as css from '../../css';

const Standard = props => {
  const {
 salePrice, listPrice, priceMessage, ...remainingProps
} = props;
  const price = salePrice || listPrice;
  if (price) {
    return (
      <Fragment>
        <Price price={price} {...remainingProps} />
        {priceMessage &&
          priceMessage.indexOf('clearanceStylesAvailable') > -1 && <div className={css.clearanceMsgStyle}>Clearance Styles Available</div>}
      </Fragment>
    );
  }
  return null;
};

Standard.propTypes = productDetailChildPropTypes;

export default Standard;
