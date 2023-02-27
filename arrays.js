const people = [
    {
        age: 10,
        height: 170,
        birthdate: "April 6, 1996",
    },
    {
        age: 15,
        height: 183,
        birthdate: "April 6, 1896",
    }
]

function arrayLog() {
    people.forEach(person => {
        console.log(`${person.age} ${person.height} ${person.birthdate}`);
    });
}

export default arrayLog;