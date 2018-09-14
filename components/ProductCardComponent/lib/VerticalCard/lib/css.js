import { css } from 'emotion';
import standard from './css.standard';
import from300To260 from './css.from300To260';
import from300To260Flex from './css.from300To260Flex';
import hold240 from './css.hold240';

export const appendProperties = (cssClass, properties) => css`
  ${cssClass} ${properties};
`;

const styles = {
  standard,
  from300To260,
  from300To260Flex,
  hold240
};

export default styles;
