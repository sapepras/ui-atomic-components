import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';
import { CLEARANCE_STYLES_AVBL, STYLES_AVAILABLE_ONLINE } from '../constants';
const MessageTypes = {
  clearanceStylesAvailable: 'clearancestylesavailable',
  someStylesAvailableOnline: 'somestylesavailableonline'
};
const {
  ASOData: {
    messages: { CLEARANCE_STYLES_AVAILABLE_MSG = CLEARANCE_STYLES_AVBL, SOME_STYLES_AVAILABLE_ONLINE_MSG = STYLES_AVAILABLE_ONLINE } = {}
  } = {}
} =
  ExecutionEnvironment.canUseDOM && window;
const MessageTypesText = {};
MessageTypesText[MessageTypes.clearanceStylesAvailable] = CLEARANCE_STYLES_AVAILABLE_MSG;
MessageTypesText[MessageTypes.someStylesAvailableOnline] = SOME_STYLES_AVAILABLE_ONLINE_MSG;

export const getMessageTypeText = (key = '') => (MessageTypes[key] ? MessageTypesText[MessageTypes[key]] : undefined);

export const getFirstMessageTypeText = priceMessages => {
  const messageKeys = (priceMessages || '').split(',');
  const messageKey = messageKeys.find(key => getMessageTypeText(key)) || '';
  return getMessageTypeText(messageKey);
};

export default MessageTypes;
