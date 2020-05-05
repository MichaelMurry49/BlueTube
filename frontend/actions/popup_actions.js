export const OPEN_POPUP = 'OPEN_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export const openPopup = popup => {
    return {
        type: OPEN_POPUP,
        popup
    };
};

export const closePopup = () => {
    return {
        type: CLOSE_POPUP
    };
};
