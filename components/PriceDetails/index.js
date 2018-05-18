import React, { Component } from "react";
import { productDetailPropTypes } from "./lib/PropTypes";
import PriceTypes from "./lib/PriceTypes";
import {
  CallFor,
  Clearance,
  ClearanceRange,
  Drop,
  HotDeal,
  IsInCartPlusCompare,
  Range,
  Standard,
  WasNow
} from "./lib/components";

class PriceDetails extends Component {
  render() {
    const { adBug = PriceTypes.standard, ...remainingProps } = this.props;

    switch (adBug) {
      case PriceTypes.Standard:
        return <Standard {...remainingProps} />;

      case PriceTypes.callFor:
        return <CallFor {...remainingProps} />;

      case PriceTypes.clearance:
        return <Clearance {...remainingProps} />;

      case PriceTypes.clearanceRange:
        return <ClearanceRange {...remainingProps} />;

      case PriceTypes.drop:
        return <Drop {...remainingProps} />;

      case PriceTypes.hotDeal:
        return <HotDeal {...remainingProps} />;

      case PriceTypes.IsInCartPlusCompare:
        return <IsInCartPlusCompare {...remainingProps} />;

      case PriceTypes.Range:
        return <Range {...remainingProps} />;

      case PriceTypes.wasNow:
        return <WasNow {...remainingProps} />;

      default:
        return <Standard {...remainingProps} />;
    }
  }
}

PriceDetails.propTypes = productDetailPropTypes;

export default PriceDetails;
