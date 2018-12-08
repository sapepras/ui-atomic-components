const MessageTypes = {
  clearanceStylesAvailable: 'clearancestylesavailable',
  someStylesAvailableOnline: 'somestylesavailableonline'
};
const { ASOData: { messages: { CLEARANCE_STYLES_AVAILABLE_MSG, SOME_STYLES_AVAILABLE_ONLINE_MSG } = {} } = {} } = window;
const MessageTypesText = {};
MessageTypesText[MessageTypes.clearanceStylesAvailable] = CLEARANCE_STYLES_AVAILABLE_MSG || 'Clearance Styles Available';
MessageTypesText[MessageTypes.someStylesAvailableOnline] = SOME_STYLES_AVAILABLE_ONLINE_MSG || 'Some styles only available online';

export const getMessageTypeText = (key = '') => (MessageTypes[key] ? MessageTypesText[MessageTypes[key]] : undefined);

export const getFirstMessageTypeText = priceMessages => {
  const messageKeys = (priceMessages || '').split(',');
  const messageKey = messageKeys.find(key => getMessageTypeText(key)) || '';
  return getMessageTypeText(messageKey);
};

export default MessageTypes;
