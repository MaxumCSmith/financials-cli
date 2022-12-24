function wrapCommand(fn: any): any {
    return async (...args: any) => {
        try {
            await fn(...args);
        } catch (error) {
            console.error(`Error: ${(error as Error).message}`);
            process.exitCode = 1;
        }
    };
}

module.exports = { wrapCommand };
