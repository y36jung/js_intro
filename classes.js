class Player {
    constructor(id, hp, lvl) {
        this.id = id;
        this.hp = hp;
        this.lvl = lvl;
    }
}

let players = []

function addPlayer(id, hp, lvl) {
    const player = new Player(id, hp, lvl);
    players.push(player);
}

addPlayer(1, 100, 2)
addPlayer(2, 150, 3)

function classesLog() {
    players.forEach(player => {
        console.log(`id = ${player.id}, hp = ${player.hp}, lvl = ${player.lvl}`);
    });
}

export default classesLog;