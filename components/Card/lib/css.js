/**
 * CARD
 */

import { css } from 'emotion';
import { bp } from '../../../util/style';

const buildVwMultiplier = rootVw => css`
  emo-ref: "rootVws";

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

const rootVws = {
  default: {
    xs: '7px', // vw
    sm: '7px', // vw
    md: '0.908173562vw', // md: "1.009081736vw", // vw
    lg: '0.834028357vw', // px
    xl: '10px' // px
  },
  carousel: {
    xs: '7px', // vw
    sm: '7px', // vw
    md: '0.75vw', // md: "1.009081736vw", // vw
    lg: '0.75vw', // px
    xl: '0.75vw' // px
  },
  collection: {
    xs: '7px', // vw
    sm: '7px', // vw
    md: '0.908173562vw', // md: "1.009081736vw", // vw
    lg: '0.834028357vw', // px
    xl: '10px' // px
  },
  grid: {
    xs: '7px', // vw
    sm: '7px', // vw
    md: '0.908173562vw', // md: "1.009081736vw", // vw
    lg: '0.834028357vw', // px
    xl: '10px' // px
  },
  gridnarrow: {
    xs: '7px', // vw
    sm: '7px', // vw
    md: '0.908173562vw', // md: "1.009081736vw", // vw
    lg: '0.834028357vw', // px
    xl: '10px' // px
  }
};

const styles = {
  default: buildVwMultiplier(rootVws.default),
  carousel: buildVwMultiplier(rootVws.carousel),
  collection: buildVwMultiplier(rootVws.collection),
  grid: buildVwMultiplier(rootVws.grid),
  gridnarrow: buildVwMultiplier(rootVws.gridnarrow)
};

export default styles;
