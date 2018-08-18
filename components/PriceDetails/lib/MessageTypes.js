const MessageTypes = {
  clearanceStylesAvailable: 'clearancestylesavailable',
  someStylesAvailableOnline: 'somestylesavailableonline'
};

const MessageTypesText = {};
MessageTypesText[MessageTypes.clearanceStylesAvailable] = 'Clearance Styles Available';
MessageTypesText[MessageTypes.someStylesAvailableOnline] = 'Some styles only available online';

export const getMessageTypeText = (key = '') => (MessageTypes[key]) ? MessageTypesText[MessageTypes[key]] : undefined;

export default MessageTypes;
