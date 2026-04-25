import http from "http";
import { app } from "./app.js";
import { logger } from "#infrastructure/logging/logger.js";

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
	logger.info(`Server running on http://localhost:${process.env.PORT}`)
});

server.on("error", (err) => {
	logger.error(err);
	process.exit(1);
});

process.on("uncaughtException", (err) => {
	logger.fatal(`Uncaught Exception: ${err.stack}`);
	logger.trace(err);
});

process.on("unhandledRejection", (reason) => {
	logger.fatal(`Unhandled Rejection: ${reason}`);
	logger.trace(reason);
});
