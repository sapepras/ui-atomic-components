/**
 * CARD
 */

import { css } from 'emotion';
import { bp } from '../../../util/style';

const buildVwMultiplier = rootVw => css`
  emo-ref: 'rootVws';

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
  standard: {
    xs: '7px', // vw
    sm: '7px', // vw
    md: '0.908173562vw', // md: "1.009081736vw", // vw
    lg: '0.834028357vw', // px
    xl: '10px' // px
  },
  from300To260: {
    xs: '8.4px', // vw
    sm: '8.4px', // vw
    md: '10px', // md: "1.009081736vw", // vw
    lg: '10px', // px
    xl: '10px' // px
  },
  from300To260Flex: {
    xs: '10px', // vw
    sm: '10px', // vw
    md: '10px', // md: "1.009081736vw", // vw
    lg: '10px', // px
    xl: '10px' // px
  },
  hold240: {
    xs: '7px', // vw
    sm: '7px', // vw
    md: '0.908173562vw', // md: "1.009081736vw", // vw
    lg: '0.834028357vw', // px
    xl: '10px' // px
  }
};

const styles = {
  standard: buildVwMultiplier(rootVws.standard),
  from300To260: buildVwMultiplier(rootVws.from300To260),
  from300To260Flex: buildVwMultiplier(rootVws.from300To260Flex),
  hold240: buildVwMultiplier(rootVws.hold240)
};

export default styles;
