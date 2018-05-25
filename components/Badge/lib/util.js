const defaultBadgeColor = 'blue';

const badgeInfo = {
  red: ['clearance', 'hot deal', 'price drop', /^\d{1,3}% off$/],
  blue: ['new', 'ships to store', 'customize']
};

const matches = (strOrRE, strValToTest) => new RegExp(strOrRE, 'i').test(strValToTest);

export const getBadgeColor = badgeText => {
  const color = Object.keys(badgeInfo).find(colorKey =>
    badgeInfo[colorKey].some(re => matches(re, badgeText))
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
