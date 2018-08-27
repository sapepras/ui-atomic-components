const DEFAULT_BADGE_COLOR = 'blue';
const HEX_COLORS = {
  red: '#ee0000',
  blue: '#005599'
};
const BADGE_INFO = {
  red: ['clearance', 'hot deal', 'price drop', /^[0-9]{1,3}% off$/],
  blue: ['new', 'ships to store', 'customize']
};

const getBadgeColor = badgeText => {
  let badgeColor = DEFAULT_BADGE_COLOR;
  Object.keys(BADGE_INFO).forEach(key => {
    const found = BADGE_INFO[key].some(el => new RegExp(`${el}`, 'i').test(badgeText));
    if (found) {
      badgeColor = key;
    }
  });

  return HEX_COLORS[badgeColor];
};

export default getBadgeColor;
