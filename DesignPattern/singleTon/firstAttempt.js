import logger from "./Logger.js";
export default function logFirstAttempt() {
    logger.printLogCount();
    logger.log("Send First try");
    logger.printLogCount();
}