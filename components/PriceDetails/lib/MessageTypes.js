const MessageTypes = {
  clearanceStylesAvailable: "clearancestylesavailable"
};

const MessageTypesText = {};
MessageTypesText[MessageTypes.clearanceStylesAvailable] = "Clearance Styles Available";

export const getMessageTypeText = (key = "") => (MessageTypes[key]) ? MessageTypesText[MessageTypes[key]] : undefined;

export default MessageTypes;
