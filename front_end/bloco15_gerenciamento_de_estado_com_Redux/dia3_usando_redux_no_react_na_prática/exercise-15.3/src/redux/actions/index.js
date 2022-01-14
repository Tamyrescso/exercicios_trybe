export const IS_LOGGED = 'IS_LOGGED';
export const CLIENT = 'CLIENT';

export const validateLogin = (status) => (
    {
        type: IS_LOGGED,
        statusLogin: status,
    }
)

export const saveClient = (payload) => (
    {
        type: CLIENT,
        clients: {...payload},
    }
)