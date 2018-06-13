const defaultBadgeColor = 'blue';

const badgeInfo = {
  red: ['clearance', 'hot deal', 'price drop', /^[0-9]{1,3}% off$/],
  blue: ['new', 'ships to store', 'customize']
};

export const getBadgeColor = badgeText => {
  const color = Object.keys(badgeInfo).filter(colorKey =>
    badgeInfo[colorKey].some(re => new RegExp(`${re}`, 'i').test(badgeText))
  ); // eslint-disable-line function-paren-newline
  return color || defaultBadgeColor;
};

export const getBadgeColorHex = badgeText => {
  const hex = {
    red: '#ee0000',
    blue: '#005599'
  };
  return hex[getBadgeColor(badgeText)];
};
