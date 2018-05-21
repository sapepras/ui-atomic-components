import PropTypes from "prop-types";
import React, { Component } from "react";
import { css } from "emotion";
import VerticalCard from "./lib/VerticalCard";
import HorizontalCard from "./lib/HorizontalCard";
import { bp } from "../../util/style";

const rootVw = {
  xs: "7px", // vw
  sm: "7px", // vw
  md: "0.908173562vw", // md: "1.009081736vw", // vw
  lg: "0.834028357vw", // px
  xl: "10px" // px
};

export const vwMultiplier = css`
  font-size: ${rootVw.xs};

  @media only screen and (min-width: ${bp.sm.min}) and (max-width: ${bp.sm.max}) {
    font-size: ${rootVw.sm};
  }

  @media only screen and (min-width: ${bp.md.min}) and (max-width: ${bp.md.max}) {
    font-size: ${rootVw.md};
  }

  @media only screen and (min-width: ${bp.lg.min}) and (max-width: ${bp.lg.max}) {
    font-size: ${rootVw.lg};
  }

  @media only screen and (min-width: ${bp.xl.min}) {
    font-size: ${rootVw.xl};
  }
`;

class Card extends Component {
  onClickGoTo(url, onClickLogGA) {
    return () => {
      if (onClickLogGA) {
        onClickLogGA();
      }
      window.location = url;
    };
  }

  render() {
    const { auid, horizontalMobile, ctaLink, onClickLogGA, ...remainingProps } = this.props; // eslint-disable-line object-curly-newline
    const thisOnClickGoTo = this.onClickGoTo(ctaLink, onClickLogGA);
    let clickAttributes = {};
    if (ctaLink) {
      clickAttributes = {
        onClick: thisOnClickGoTo,
        onKeyPress: thisOnClickGoTo,
        style: { cursor: "pointer" }
      };
    }
    return (
      <div data-auid={auid} {...clickAttributes} className={vwMultiplier}>
        <VerticalCard {...remainingProps} desktopOnly={horizontalMobile} />
        {!!horizontalMobile && (
          <HorizontalCard {...remainingProps} hideOnDesktop={horizontalMobile} />
        )}
      </div>
    );
  }
}

Card.propTypes = {
  auid: PropTypes.string,
  horizontalMobile: PropTypes.bool,
  ctaLink: PropTypes.string,
  onClickLogGA: PropTypes.func
};

export default Card;
