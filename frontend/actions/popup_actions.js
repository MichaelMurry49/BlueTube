export const OPEN_POPUP = 'OPEN_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export const openPopup = () => {
    return {
        type: OPEN_POPUP,
    };
};

export const closePopup = () => {
    return {
        type: CLOSE_POPUP
    };
};
