function booleanPromise(boolean) {
    return new Promise((resolve, reject) => {
        if (boolean) {
          setTimeout(() => {
            resolve()},
            2500)
        } else {
          setTimeout(() => {
            reject()},
            2500)
        }
    })
}

async function checkPromise(boolean) {
    console.log('Checking promise...')
    try {
        await booleanPromise(boolean)
        console.log('Test passed!')
    } catch(error) {
        console.log('Test failed...')
    }
}

function asyncLog(boolean) {
    return setTimeout(()=> {checkPromise(boolean)}, 1500)
}

export default asyncLog;