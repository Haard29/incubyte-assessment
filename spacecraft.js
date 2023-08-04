class SpaceCraft {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.currentDirection = 'N';
        this.directions = {};
        this.directions['N'] = {'l': 'W', 'r': 'E', 'u': 'U', 'd': 'D'};
        this.directions['E'] = {'l': 'N', 'r': 'S', 'u': 'U', 'd': 'D'};
        this.directions['W'] = {'l': 'S', 'r': 'N', 'u': 'U', 'd': 'D'};
        this.directions['S'] = {'l': 'E', 'r': 'W', 'u': 'U', 'd': 'D'};
        this.directions['U'] = {'l': 'W', 'r': 'E', 'u': 'S', 'd': 'N'};
        this.directions['D'] = {'l': 'W', 'r': 'E', 'u': 'N', 'd': 'S'};
    }
    init(x, y, z, currentDirection) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.currentDirection = currentDirection;
    }
    move(val) {
        if (['S', 'W', 'D'].includes(this.currentDirection)) {
            val *= -1;
        }
        if (['N', 'S'].includes(this.currentDirection)) {
            this.y += val;
        } else if (['E', 'W'].includes(this.currentDirection)) {
            this.x += val;
        } else {
            this.z += val;
        }
    }
    turn(direction) {
        this.currentDirection = this.directions[this.currentDirection][direction];
    }
    getPos() {
        return [this.x, this.y, this.z];
    }
    getDirection() {
        return this.currentDirection;
    }
}

const operations = ["f", "r", "u", "b", "l"];
const chandrayan = new SpaceCraft();
for (const opp of operations) {
    if (opp === 'f') {
        chandrayan.move(1);
    } else if (opp === 'b') {
        chandrayan.move(-1);
    } else {
        chandrayan.turn(opp);
    }
}
console.log(chandrayan.getPos(), chandrayan.getDirection());

module.exports = SpaceCraft;
