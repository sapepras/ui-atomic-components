import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

const inlineAnchorStyle = css`
  color: #585858;
  line-height: 2;
  border-bottom: 1px solid #585858;
  padding: 0.1rem;
  text-decoration: none;
  &:hover {
    color: #0055a6;
    border-bottom-color: #0055a6;
  }
`;
const iconTextAnchorStyle = css`
  color: #585858;
  line-height: 2;
  border-bottom: 1px solid #585858;
  padding: 0.1rem;
  text-decoration: none;
  border-bottom: none;
  &:hover {
    color: #0055a6;
    border-bottom-color: #0055a6;
  }
  &:after {
    content: '>';
    padding-left: 2px;
  }
`;

const Anchor = props => {
  const { ariarole, href, auid, atype } = props; // eslint-disable-line
  let cname = inlineAnchorStyle;
  if (atype === 'inline') {
    cname = inlineAnchorStyle;
  } else {
    cname = iconTextAnchorStyle;
  }

  return (
    <a data-auid={auid} className={cname} role={ariarole} href={href}>
      {props.children}
    </a>
  );
};

Anchor.propTypes = {
  /** link to external site */
  href: PropTypes.string,
  /** aria role  */
  ariarole: PropTypes.oneOf(['link', 'button']),
  children: PropTypes.string,
  auid: PropTypes.string.isRequired,
  atype: PropTypes.oneOf(['inline', 'icontext'])
};

Anchor.defaultProps = {
  ariarole: 'link',
  atype: 'inline'
};

export default Anchor;
