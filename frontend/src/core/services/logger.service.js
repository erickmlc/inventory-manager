const isProduction = false;

function formatMessage(level, message, data) {
    const timestamp = new Date().toISOString();
    return {
        timestamp,
        level,
        message,
        data
    };
}

export const logger = {
    info(message, data = null) {
        if (isProduction) return;
        console.info(formatMessage("INFO", message, data));
    },

    warn(message, data = null) {
        console.warn(formatMessage("WARN", message, data));
    },

    error(message, data = null) {
        console.error(formatMessage("ERROR", message, data));
    }
};
