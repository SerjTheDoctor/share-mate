export let MATCH_USER = {};

export const setMatchUser = (obj) => {
    MATCH_USER = {
       ...obj
    };
    console.log(MATCH_USER);
};

export let NOTIFICATION = false;

export const openNotification = () => {
    NOTIFICATION = true;
}

export const getNotification = () => {
    return NOTIFICATION;
}