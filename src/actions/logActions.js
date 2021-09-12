export const logMessage = (message) => ({
    type: 'LOG_MESSAGE',
    payload: {
        message
    }
});

export const clearLog = (message) => ({
    type: 'CLEAR_LOG',
    payload: {
        message
    }
});