import arrayLog from './arrays.js';
import classesLog  from './classes.js';
import mapsLog from './maps.js';
import promiseLog from './promises.js';

var logFunctions = [
    arrayLog,
    classesLog,
    mapsLog,
    () => ( promiseLog(true) ),
    () => { promiseLog(false); }
]

logFunctions.forEach(func => {
    func();
    console.log('');
})

