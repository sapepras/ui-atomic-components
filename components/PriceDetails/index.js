import React, { Component } from "react";
import { productDetailPropTypes } from "./lib/PropTypes";
import PriceTypes from "./lib/PriceTypes";
import {
  CallFor,
  Clearance,
  ClearanceRange,
  InCartPlusCompare,
  Range,
  Standard,
  WasNow
} from "./lib/components";

class PriceDetails extends Component {
  render() {
    const { priceType = "" } = this.props;
    switch (priceType) {
      case PriceTypes.standard:
        return <Standard {...this.props} />;

      case PriceTypes.callFor:
        return <CallFor {...this.props} />;

      case PriceTypes.clearance:
        return <Clearance {...this.props} />;

      case PriceTypes.clearanceRange:
        return <ClearanceRange {...this.props} />;

      case PriceTypes.drop:
        return <WasNow {...this.props} />;

      case PriceTypes.hotDeal:
        return <WasNow {...this.props} />;

      case PriceTypes.inCartPlusCompare:
        return <InCartPlusCompare {...this.props} />;

      case PriceTypes.range:
        return <Range {...this.props} />;

      case PriceTypes.wasNow:
        return <WasNow {...this.props} />;

      default:
        return <Standard {...this.props} />;
    }
  }
}

PriceDetails.propTypes = productDetailPropTypes;

export default PriceDetails;
