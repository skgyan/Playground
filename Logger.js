class Logger {
    constructor() {
        if(Logger.instance == null) {
            this.logs = [];
            Logger.instance = this;
        }

        return Logger.instance;
    }

    log(message) {
        this.logs.push(message);
        console.log(`LOG: ${message}`);
    }

    printLogCount() {
        console.log(`Log count - ${this.logs.length}`);
    }
}

const logger1 = new Logger();
const logger2 = new Logger();

logger1.log('logger 1: Log # 1 - This is a log');
logger1.log('logger 1: Log # 2 - This is a log');

logger1.printLogCount();

logger2.log('logger 2: Log # 1 - This is also a log');

logger2.printLogCount();
logger1.printLogCount();