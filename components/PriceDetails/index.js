import React, { Component } from "react";
import { productDetailPropTypes } from "./lib/PropTypes";
import PriceTypes from "./lib/PriceTypes";
import {
  CallFor,
  Clearance,
  ClearanceRange,
  Drop,
  HotDeal,
  InCartPlusCompare,
  Range,
  Standard,
  WasNow
} from "./lib/components";

class PriceDetails extends Component {
  render() {
    const { adbug = PriceTypes.standard, ...remainingProps } = this.props;
    switch (adbug) {
      case PriceTypes.standard:
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

      case PriceTypes.inCartPlusCompare:
        return <InCartPlusCompare {...remainingProps} />;

      case PriceTypes.range:
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
