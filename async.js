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

async function checkPromise(boolean, index) {
    const substring = `Promise ${index+1}`
    console.log(`Checking ${substring}...`)
    try {
        await booleanPromise(boolean)
        console.log(`${substring} test passed!`)
    } catch {
        console.log(`${substring} test failed...`)
    }
}

const checkList = [true, false, false, true, true]

function asyncLog() {
    const length = checkList.length
    for (let i = 0; i < length; ++i) {
        setTimeout(()=> {checkPromise(checkList[i], i)}, 1500)
    }   
}

export default asyncLog;