const MessageTypes = {
  clearanceStylesAvailable: 'clearancestylesavailable',
  someStylesAvailableOnline: 'somestylesavailableonline'
};

const MessageTypesText = {};
MessageTypesText[MessageTypes.clearanceStylesAvailable] = 'Clearance Styles Available';
MessageTypesText[MessageTypes.someStylesAvailableOnline] = 'Some styles only available online';

export const getMessageTypeText = (key = '') => (MessageTypes[key] ? MessageTypesText[MessageTypes[key]] : undefined);

export const getFirstMessageTypeText = priceMessages => {
  const messageKeys = (priceMessages || '').split(',');
  const messageKey = messageKeys.find(key => getMessageTypeText(key)) || '';
  return getMessageTypeText(messageKey);
};

export default MessageTypes;
