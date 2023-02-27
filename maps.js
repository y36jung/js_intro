class Player {
    constructor(id, hp, lvl) {
        this.id = id;
        this.hp = hp;
        this.lvl = lvl;
    }
}

const players = new Map();

players.set("Player 1", new Player(3, 400, 8))
players.set("Player 2", new Player(4, 250, 6))
const playerKeys = [
    "Player 1",
    "Player 2"
]

function mapsLog() {
    console.log('Iterate via forEach on players')
    players.forEach(player => {
        console.log(`id = ${player.id}, hp = ${player.hp}, lvl = ${player.lvl}`);
    })

    console.log('Iterate via forEach on playerKeys')
    playerKeys.forEach(key => {
        const player = players.get(key)
        console.log(`name = ${key}, id = ${player.id}, hp = ${player.hp}, lvl = ${player.lvl}`)
    })
}

export default mapsLog;