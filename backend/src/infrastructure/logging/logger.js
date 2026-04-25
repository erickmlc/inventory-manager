function log(logger, message) {
	const timestamp = new Date().toISOString();

	logger(`${timestamp} ${logger.name.toUpperCase()} ${message}`);
}

export const logger = {
	trace: (obj) => {
		console.info(`${new Date().toISOString()} ${console.trace.name.toUpperCase()}`);
		console.trace(obj);
	},
	debug: (msg) => log(console.debug, msg),
	info: (msg) => log(console.info, msg),
	warn: (msg) => log(console.warn, msg),
	error: (msg) => log(console.error, msg),
	fatal: (msg) => log(console.error, msg),
}
