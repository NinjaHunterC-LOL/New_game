class Enemy {
    constructor(name, life, experience, minGold, maxGoldBonus, minAtk, atkBonus) {
        this.name = name;
        this.life = life;
        this.maxLife = life;
        this.experience = experience;
        this.minGold = minGold;
        this.maxGoldBonus = maxGoldBonus;
        this.minAtk = minAtk;
        this.atkBonus = atkBonus;
    }

    dropGold() {
        return Math.ceil(this.minGold + Math.random() * this.maxGoldBonus);
    }

    attack() {
        const random = Math.random() * 10;
        const damage = this.minAtk + Math.ceil(Math.random() * this.atkBonus);

        if (random < 8) {
            return damage; // Normal hit (80% chance)
        } else if (random < 9) {
            return damage * 2; // Critical hit (10% chance)
        } else {
            return 0; // Miss (10% chance)
        }
    }

    takeDamage(damage) {
        this.life = Math.max(0, this.life - damage);
    }
}

export class Goblin extends Enemy {
    constructor() {
        super("Goblin", 50, 20, 3, 12, 5, 10);
    }
}

export class Orc extends Enemy {
    constructor() {
        super("Orc", 75, 30, 5, 15, 7, 15);
    }
}
