
/* eslint no-console: 0 */

const handleDeleteLink = (args) => {

    let newArgs = {};

    for (let i in args) {
        try {
            newArgs[i] = typeof args[i] === 'object' ? JSON.parse(JSON.stringify(args[i])) : args[i];
        } catch (e) {
            newArgs[i] = args[i];
        }
    }

    return newArgs;
};

const handleConsoleLogging = (logName = 'WITHOUT NAME', args = 'WITHOUT ARGS', type = 'error') => {

    let displayArgs = handleDeleteLink(args);

    console.group(logName);
    console[type](displayArgs);
    console.groupEnd();
};

export const log = (logName, ...args) => {

    handleConsoleLogging(logName, args, 'log');
};

export const warn = (logName, ...args) => {

    handleConsoleLogging(logName, args, 'warn');
};

export const error = (logName, ...args) => {

    handleConsoleLogging(logName, args, 'error');
};

export const table = (logName, ...args) => {

    handleConsoleLogging(logName, args, 'table');
};

export const params = (logName, ...args) => {

    let newArgs = [];

    logName = 'CHECK ' + logName + ' PARAMS';

    for (let i in args) {

        if (args[i].params) {
            newArgs.push(args[i].params);
        }
    }

    handleConsoleLogging(logName, newArgs, 'warn');
};

export const props = (logName, ...args) => {

    let newArgs = [];

    logName = 'CHECK ' + logName + ' PROPS';

    for (let i in args) {

        if (args[i].props) {
            newArgs.push(args[i].props);
        }
    }

    handleConsoleLogging(logName, newArgs, 'warn');
};

export const check = (name = '') => {
    console.group('CHECK -> ' + name);
    console.groupEnd();
};
