import logger from "./Logger.js";
export default function logSecondAttempt() {
    logger.printLogCount();
    logger.log("Send Second try");
    logger.printLogCount();
}