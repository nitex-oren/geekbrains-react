export const ADD_CHAT = '@@chat/ADD_CHAT';
export const BLINK = '@@chat/BLINK'

export const addChat = (title) => ({
   type: ADD_CHAT,
   title,
});

export const blinkChat = (chatId) => ({
   type: BLINK,
   chatId,
});
