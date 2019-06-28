import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';
import * as css from '../../css';

const Standard = props => {
  const { salePrice, listPrice, firstPriceMessageText, omitPriceMessage, ...remainingProps } = props;
  const price = salePrice || listPrice;
  if (price) {
    return (
      <Fragment>
        <Price price={price} {...remainingProps} />
        { !omitPriceMessage && firstPriceMessageText && firstPriceMessageText.length > 0 &&
          <div className={css.clearanceMsgStyle}>{firstPriceMessageText}</div>
        }
      </Fragment>
    );
  }
  return null;
};

Standard.propTypes = {
  ...productDetailChildPropTypes,
  omitPriceMessage: PropTypes.bool,
};

Standard.defaultProps = {
  omitPriceMessage: false,
};

export default Standard;
