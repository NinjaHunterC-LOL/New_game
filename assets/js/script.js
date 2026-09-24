class SmallSword {
    name = "Wooden Sword";
    type = "weapon";
    attack = 2;
    sellingPrice = 5;
    specialAttackName = "Thrust";
    specialAttackCost = 10;
    img = "../assets/img/wooden-sword-01.png";
    info = "Attack: 2 - Thrust: Guarantees a hit and deals double damage at the cost of 10 mana";

    specialAttack(herop){
        const random = Math.random() * 100;
        const damage = Math.ceil(herop.strength + this.attack + (this.attack) * Math.random() * 2) * 2;
        if(herop.mana >= this.specialAttackCost) {
            herop.mana -= this.specialAttackCost;
            if(random < 80) {
                console.log(damage)
                return damage;
            } else {
                console.log(damage * 2)
                return damage * 2;
            } 
        }
    }
}

class TestSword {
    name = "Test Sword";
    type = "weapon";
    attack = 2;
    sellingPrice = 5;
    specialAttackName = "Thrust";
    specialAttackCost = 10;
    img = "../assets/img/wooden-sword-01.png";
    info = "Test Sword - Attack: 2 - Thrust: Guarantees a hit and deals double damage at the cost of 20 mana";

    specialAttack(herop){
        const random = Math.random() * 100;
        const damage = Math.ceil(herop.strength + this.attack + (this.attack) * Math.random() * 2) * 2;
        if(herop.mana >= this.specialAttackCost) {
            herop.mana -= this.specialAttackCost;
            if(random < 80) {
                console.log(damage)
                return damage;
            } else {
                console.log(damage * 2)
                return damage * 2;
            } 
        }
    }
}

class SteelSword {
    name = "Steel Sword";
    type = "weapon";
    attack = 5;
    sellingPrice = 15;
    specialAttackName = "Cross Slash";
    specialAttackCost = 15;
    img = "../assets/img/iron-sword-01.png";
    info = "Attack: 5 - Cross Slash: Guarantees a hit and deals double damage at the cost of 15 mana";

    specialAttack(herop){
        const random = Math.random() * 100;
        const damage = Math.ceil(herop.strength + this.attack + (this.attack) * Math.random() * 2) * 2;
        if(herop.mana >= this.specialAttackCost) {
            herop.mana -= this.specialAttackCost;
            if(random < 80) {
                return damage;
            } else {
                return damage * 2;
            } 
        }
    }
}

class BattleAxe {
    name = "Battle Axe";
    type = "weapon";
    attack = 8;
    sellingPrice = 25;
    specialAttackName = "Cleave";
    specialAttackCost = 20;
    img = "../assets/img/battle-axe-01.png";
    info = "Attack: 8 - Cleave: Guarantees a hit, has 50% critical chance, and deals double damage at the cost of 20 mana";

    specialAttack(herop){
        const random = Math.random() * 100;
        const damage = Math.ceil(herop.strength + this.attack + (this.attack) * Math.random() * 2) * 2;
        if(herop.mana >= this.specialAttackCost) {
            herop.mana -= this.specialAttackCost;
            if(random < 50) {
                return damage;
            } else {
                return damage * 2;
            } 
        }
    }
}

class LeatherArmor {
    name = "Leather Armor";
    type = "armor";
    armor = 2;
    sellingPrice = 7;
    img = "../assets/img/leather-armor-01.png";
    info = "Armor: 2 - Reduces damage taken";
}

class HunterArmor {
    name = "Hunter Armor";
    type = "armor";
    armor = 3;
    sellingPrice = 10;
    img = "../assets/img/hunter-armor-01.png";
    info = "Armor: 3 - Reduces damage taken";
}

class ChainArmor {
    name = "Chainmail Armor";
    type = "armor";
    armor = 4;
    sellingPrice = 13;
    img = "../assets/img/chain-armor-01.png";
    info = "Armor: 4 - Reduces damage taken";
}

class PlateArmor {
    name = "Plate Armor";
    type = "armor";
    armor = 6;
    sellingPrice = 20;
    img = "../assets/img/plate-armor-01.png";
    info = "Armor: 6 - Reduces damage taken";
}

const hero = {
    name: "Haralan",
    level: 1,
    experience: 0,
    life: 100,
    maxLife: 100,
    mana: 50,
    maxMana: 50,
    strength: 5,
    magicPower: 3,
    gold: 20,
    lifePotion: 1,
    manaPotion: 1,
    equippedWeapon: new SmallSword(),
    equippedArmor: new LeatherArmor(),
    inventory: [new TestSword()],

    drinkLifePotion() {
        if(this.lifePotion > 0) {
            this.life = Math.min(this.maxLife, (this.life + 50));
            this.lifePotion--;
        }
    },
    drinkManaPotion() {
        if(this.manaPotion > 0) {
            this.mana = Math.min(this.maxMana, (this.mana + 50));
            this.manaPotion--;
        }
    },
    attack() {
        const random = Math.random() * 100;
        const damage = Math.ceil(this.strength + this.equippedWeapon.attack + (this.equippedWeapon.attack) * Math.random() * 2);
        if(random < 80) {
            return damage;
        } else if(random < 90) {
            return damage * 2;
        } else {
            return 0;
        }
    },
    takeDamage(damage) {
        const damageTaken = Math.max(0, (damage - this.equippedArmor.armor));
        this.life = Math.max(0, (this.life - damageTaken));
    },
    levelUp(xp) {
        if (this.experience >= 2090) {
            if(this.experience - xp < 2090) {
                battleStats4.innerHTML += " - Congratulations! You leveled up to level 10!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);
            }
            this.level = 10;
            this.strength = 23;
            this.magicPower = 11;
            this.maxLife = 235;
            this.maxMana = 95;
        } else if (this.experience >= 1660) {
            if(this.experience - xp < 1660) {
                battleStats4.innerHTML += " - Congratulations! You leveled up to level 9!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);
            }
            this.level = 9;
            this.strength = 21;
            this.magicPower = 10;
            this.maxLife = 220;
            this.maxMana = 90;
        } else if (this.experience >= 1300) {
            if(this.experience - xp < 1300) {
                battleStats4.innerHTML += " - Congratulations! You leveled up to level 8!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);
            }
            this.level = 8;
            this.strength = 19;
            this.magicPower = 9;
            this.maxLife = 205;
            this.maxMana = 85;
        } else if (this.experience >= 1000) {
            if(this.experience - xp < 1000) {
                battleStats4.innerHTML += " - Congratulations! You leveled up to level 7!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);
            }
            this.level = 7;
            this.strength = 17;
            this.magicPower = 8;
            this.maxLife = 190;
            this.maxMana = 80;
        } else if (this.experience >= 750) {
            if(this.experience - xp < 750) {
                battleStats4.innerHTML += " - Congratulations! You leveled up to level 6!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);
            }
            this.level = 6;
            this.strength = 15;
            this.magicPower = 7;
            this.maxLife = 175;
            this.maxMana = 75;
        } else if (this.experience >= 540) {
            if(this.experience - xp < 540) {
                battleStats4.innerHTML += " - Congratulations! You leveled up to level 5!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);
            }
            this.level = 5;
            this.strength = 13;
            this.magicPower = 6;
            this.maxLife = 160;
            this.maxMana = 70;
        } else if (this.experience >= 365) {
            if(this.experience - xp < 365) {
                battleStats4.innerHTML += " - Congratulations! You leveled up to level 4!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);
            }
            this.level = 4;
            this.strength = 11;
            this.magicPower = 5;
            this.maxLife = 145;
            this.maxMana = 65;
        } else if (this.experience >= 220) {
            if(this.experience - xp < 220) {
                battleStats4.innerHTML += " - Congratulations! You leveled up to level 3!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);
            }
            this.level = 3;
            this.strength = 9;
            this.magicPower = 4;
            this.maxLife = 130;
            this.maxMana = 60;
        } else if (this.experience >= 100) {
            if(this.experience - xp < 100) {
                battleStats4.innerHTML += " - Congratulations! You leveled up to level 2!"
                this.life = Math.min(this.life + 15, this.maxLife);
                this.mana = Math.min(this.mana + 5, this.maxMana);
            }
            this.level = 2;
            this.strength = 7;
            this.magicPower = 3;
            this.maxLife = 115;
            this.maxMana = 55;
        }
    }
}

class Goblin {
    name = "Goblin";
    life = 50;
    maxLife = 50;
    experience = 20;
    img = "../assets/img/goblin-01.png";
    hitImg = "../assets/img/goblin-hit-01.png";
    attackImg = "../assets/img/goblin-attack-01.png";
    deadImg = "../assets/img/goblin-dead-01.png";

    dropGold(){
        return Math.ceil(3 + Math.random() * 12);
    }
    attack() {
        const random = Math.random() * 10;
        if (random < 8) {
            return 5 + Math.ceil(Math.random() * 10);
        } else if (random < 9) {
            return (5 + Math.ceil(Math.random() * 10)) * 2;
        } else {
            return 0;
        }
    }
    takeDamage(damage) {
        this.life = Math.max(0, (this.life - damage));
    }
    dropItem() {
        const random = Math.random() * 100;
        if(random > 90) {
            const item = new SmallSword()
            hero.inventory.push(item)
            return item.name
        } else {
            return ""
        }
    }
}

class GoblinWarrior {
    name = "Goblin Warrior";
    life = 60;
    maxLife = 60;
    experience = 25;
    img = "../assets/img/goblin-warrior-01-128.png";
    hitImg = "../assets/img/goblin-warrior-hit.png";
    attackImg = "../assets/img/goblin-warrior-attack-01.png";
    deadImg = "../assets/img/goblin-dead-01.png";

    dropGold(){
        return Math.ceil(3 + Math.random() * 15);
    }
    attack() {
        const random = Math.random() * 10;
        if (random < 8) {
            return 6 + Math.ceil(Math.random() * 10);
        } else if (random < 9) {
            return (6 + Math.ceil(Math.random() * 10)) * 2;
        } else {
            return 0;
        }
    }
    takeDamage(damage) {
        this.life = Math.max(0, (this.life - damage));
    }
    dropItem() {
        const random = Math.random() * 100;
        if(random > 90) {
            const item = new LeatherArmor()
            hero.inventory.push(item)
            return item.name
        } else {
            return ""
        }
    }
}

class GoblinChief {
    name = "Goblin Chief";
    life = 250;
    maxLife = 250;
    experience = 60;
    img = "../assets/img/goblin-chief.png";
    hitImg = "../assets/img/goblin-chief-hit.png";
    attackImg = "../assets/img/goblin-chief-attack-01.png";
    deadImg = "../assets/img/goblin-dead-01.png";

    dropGold(){
        return Math.ceil(15 + Math.random() * 20);
    }
    attack() {
        const random = Math.random() * 10;
        if (random < 8) {
            return 12 + Math.ceil(Math.random() * 20);
        } else if (random < 9) {
            return (12 + Math.ceil(Math.random() * 20)) * 2;
        } else {
            return 0;
        }
    }
    takeDamage(damage) {
        this.life = Math.max(0, (this.life - damage));
    }
    dropItem() {
        const item = new BattleAxe()
        hero.inventory.push(item)
        return item.name
    }
}

class Orc {
    name = "Orc";
    life = 100;
    maxLife = 100;
    experience = 30;
    img = "../assets/img/orc-01.png";
    hitImg = "../assets/img/orc-hit-01.png";
    attackImg = "../assets/img/orc-attack-01.png";
    deadImg = "../assets/img/orc-dead-01.png";

    dropGold(){
        return Math.ceil(5 + Math.random() * 15);
    }
    attack() {
        const random = Math.random() * 10;
        if (random < 8) {
            return 9 + Math.ceil(Math.random() * 20);
        } else if (random < 9) {
            return (9 + Math.ceil(Math.random() * 20)) * 2;
        } else {
            return 0;
        }
    }
    takeDamage(damage) {
        this.life = Math.max(0, (this.life - damage));
    }
    dropItem() {
        const random = Math.random() * 10;
        if(random > 7) {
            const item = new HunterArmor()
            hero.inventory.push(item)
            return item.name
        } else {
            return ""
        }
    }
}

class OrcSoldier {
    name = "Orc Soldier";
    life = 150;
    maxLife = 150;
    experience = 35;
    img = "../assets/img/orc-soldier-01.png";
    hitImg = "../assets/img/orc-soldier-hit-01.png";
    attackImg = "../assets/img/orc-soldier-attack-01.png";
    deadImg = "../assets/img/orc-dead-01.png";

    dropGold(){
        return Math.ceil(5 + Math.random() * 15);
    }
    attack() {
        const random = Math.random() * 10;
        if (random < 8) {
            return 13 + Math.ceil(Math.random() * 25);
        } else if (random < 9) {
            return (13 + Math.ceil(Math.random() * 25)) * 2;
        } else {
            return 0;
        }
    }
    takeDamage(damage) {
        this.life = Math.max(0, (this.life - damage));
    }
    dropItem() {
        const random = Math.random() * 10;
        if(random > 7) {
            const item = new HunterArmor()
            hero.inventory.push(item)
            return item.name
        } else {
            return ""
        }
    }
}

class OrcKing {
    name = "Orc King";
    life = 500;
    maxLife = 500;
    experience = 100;
    img = "../assets/img/orc-king-01.png";
    hitImg = "../assets/img/orc-king-hit-01.png";
    attackImg = "../assets/img/orc-king-attack-01.png";
    deadImg = "../assets/img/orc-dead-01.png";

    dropGold(){
        return Math.ceil(30 + Math.random() * 50);
    }
    attack() {
        const random = Math.random() * 10;
        if (random < 8) {
            return 20 + Math.ceil(Math.random() * 40);
        } else if (random < 9) {
            return (20 + Math.ceil(Math.random() * 40)) * 2;
        } else {
            return 0;
        }
    }
    takeDamage(damage) {
        this.life = Math.max(0, (this.life - damage));
    }
    dropItem() {
        const item = new PlateArmor()
        hero.inventory.push(item)
        return item.name
    }
}

const buyManaPotion = () => {
    const quant = parseInt(mpBuyingQuant.value);
    if(quant > 0) {
        if(hero.gold >= (quant * 10)) {
            coinSound()
            hero.gold = hero.gold - (quant * 10);
            hero.manaPotion += quant;
            shopMessage.innerHTML = `You bought ${quant} mana potions for ${quant * 10} gold`
            mpBuyingQuant.value = 0;
        } else {
            shopMessage.innerHTML = "You don't have enough gold"
            mpBuyingQuant.value = 0;
        }
    } else {
        shopMessage.innerHTML = "Select an amount greater than zero"
        mpBuyingQuant.value = 0;
    }
}

const buyLifePotion = () => {
    const quant = parseInt(lpBuyingQuant.value);
    if(quant > 0) {
        if(hero.gold >= (quant * 10)) {
            coinSound()
            hero.gold = hero.gold - (quant * 10);
            hero.lifePotion += quant;
            shopMessage.innerHTML = `You bought ${quant} health potions for ${quant * 10} gold`
            lpBuyingQuant.value = 0;
        } else {
            shopMessage.innerHTML = "You don't have enough gold"
            lpBuyingQuant.value = 0;
        }
    } else {
        shopMessage.innerHTML = "Select an amount greater than zero"
        lpBuyingQuant.value = 0;
    }
}

const experienceList = [0, 100, 220, 365, 540, 750, 1000, 1300, 1660, 2090];
let monster;
let chosenRespawn = 0;
let selectedItem;
let dungeonLevel = 0;
let bossRoom = false;
let hasTheOrb = false;
const dungeonCompleted = [true, false, false, false]
const bgImgList = [" ", "../assets/img/goblin-forest-bg.png", "../assets/img/orc-fortress-bg-ani.gif"]

const startScreen = document.getElementById("create-char-screen");
const villageScreen = document.getElementById("village-screen");
const shopScreen = document.getElementById("shop-screen")
const mapScreen = document.getElementById("map-screen")
const battleScreen = document.getElementById("battle-screen")
const inventoryScreen = document.getElementById("inventory-screen")
const sellerScreen = document.getElementById("seller-screen")
const victoryScreen = document.getElementById("victory-screen")

const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("name-button");
const villageStats1 = document.querySelector(".stats-01")
const villageStats2 = document.querySelector(".stats-02");
const villageStats3 = document.querySelector(".stats-03")
const villageStats4 = document.querySelector(".stats-04");
const lifeBar = document.querySelector(".life-bar")
const manaBar = document.querySelector(".mana-bar")
const lifeBarStats = document.querySelector(".life-bar-stats")
const manaBarStats = document.querySelector(".mana-bar-stats")
const victoryButton = document.querySelector(".victory-button")
const startStats = document.querySelector(".start-stats")

const mpBuyingQuant = document.querySelector(".mp-input")
const lpBuyingQuant = document.querySelector(".lp-input")
const shopMessage = document.querySelector(".shop-message")
const shopStats1 = document.querySelector(".shop-stats-01")
const shopStats2 = document.querySelector(".shop-stats-02")
const sellerBox = document.querySelector(".seller-items-box")
const sellerMessage = document.querySelector(".selling-item-message")
const sellingStats = document.querySelector(".selling-stats")

const mapMessage = document.querySelector(".map-message");
const mapStats1 = document.querySelector(".map-stats-01");
const mapStats2 = document.querySelector(".map-stats-02");

const battleStats1 = document.querySelector(".battle-stats-01");
const battleStats2 = document.querySelector(".battle-stats-02");
const battleStats3 = document.querySelector(".battle-stats-03");
const battleStats4 = document.querySelector(".battle-stats-04");
const attackButton = document.querySelector(".attack-button");
const specialAttackButton = document.querySelector(".special-attack-button");
const battleExitButton = document.querySelector(".battle-exit-button")
const battleContinueButton = document.querySelector(".battle-continue-button")
const battleLPButton = document.querySelector(".battle-lp-button")
const battleMPButton = document.querySelector(".battle-mp-button")
const battleBox = document.querySelector(".battle-box")

const monsterImage = document.querySelector(".monster-battle-img")
const heroImage = document.querySelector(".char-battle-img")
const lifeBarStatsBtl = document.querySelector(".life-bar-stats-btl")
const manaBarStatsBtl = document.querySelector(".mana-bar-stats-btl")
const lifeBarBtl = document.querySelector(".life-bar-btl")
const manaBarBtl = document.querySelector(".mana-bar-btl")
const lifeBarStatsMonster = document.querySelector(".life-bar-stats-monster")
const lifeBarMonster = document.querySelector(".life-bar-monster")

const inventoryBox = document.querySelector(".inventory-box")
const inventoryMessage = document.querySelector(".inventory-stats-01")
const equippedWeapponImg = document.querySelector(".equipped-weapon-img")
const equippedArmorImg = document.querySelector(".equipped-armor-img")

const soundEffect = document.getElementById("sound-effect")
const soundEffectSrc = document.getElementById("sound-effect-src")

const setStats = () => {
    villageStats1.innerHTML = `${hero.name} - Lvl: ${hero.level} - Experience: ${hero.experience}/${experienceList[hero.level]} - Strength: ${hero.strength}`
    villageStats2.innerHTML = `Health Potions: ${hero.lifePotion} - Mana Potions: ${hero.manaPotion} - Gold: ${hero.gold}`
    villageStats3.innerHTML = `${hero.equippedWeapon.name} - Atk: ${hero.equippedWeapon.attack}`
    villageStats4.innerHTML = `${hero.equippedArmor.name} - Arm: ${hero.equippedArmor.armor}`

    lifeBarStats.innerHTML = `${hero.life}/${hero.maxLife}`
    manaBarStats.innerHTML = `${hero.mana}/${hero.maxMana}`
    lifeBar.setAttribute("style", `width: ${100/hero.maxLife * hero.life}%;`)
    manaBar.setAttribute("style", `width: ${100/hero.maxMana * hero.mana}%;`)
}

const setVillage = () => {
    hero.name = nameInput.value;
    startScreen.setAttribute("style", "display: none")
    shopScreen.setAttribute("style", "display: none")
    mapScreen.setAttribute("style", "display: none")
    inventoryScreen.setAttribute("style", "display: none")
    villageScreen.setAttribute("style", "display: flex")
    battleScreen.setAttribute("style", "display: none")
    victoryScreen.setAttribute("style", "display: none")
    
    if(dungeonCompleted[2]) {
        victoryButton.setAttribute("style", "display: block")
    }
    setStats()
}

const setShop = () => {
    shopMessage.innerHTML = "Welcome adventurer! What would you like to buy?"
    villageScreen.setAttribute("style", "display: none")
    sellerScreen.setAttribute("style", "display: none")
    shopScreen.setAttribute("style", "display: flex")
    shopStats1.innerHTML = `Health Potions: ${hero.lifePotion} - Mana Potions: ${hero.manaPotion} - Gold: ${hero.gold}`
    shopStats2.innerHTML = `${hero.equippedWeapon.name} - Atk: ${hero.equippedWeapon.attack} -- ${hero.equippedArmor.name} - Arm: ${hero.equippedArmor.armor}`
}

const setSellerScreen = () => {
    sellerScreen.setAttribute("style", "display: flex")
    shopScreen.setAttribute("style", "display: none")
    sellerMessage.innerHTML = "Select an item to view its details"
    setSellerStats()
}

const setSellerStats = () => {
    sellingStats.innerHTML = "Gold: " + hero.gold
    sellerBox.innerText = "";
    for (let i = 0; i < hero.inventory.length; i++) {
        const inventoryItemBox = document.createElement("div")
        const inventoryItemImg = document.createElement("img")
        const invetoryItemName = document.createElement("p")
        invetoryItemName.innerHTML = hero.inventory[i].name;
        inventoryItemImg.setAttribute("src", hero.inventory[i].img)
        inventoryItemImg.setAttribute("class", "inventory-item-img")
        invetoryItemName.setAttribute("class", "inv-item-name")
        inventoryItemBox.appendChild(inventoryItemImg)
        inventoryItemBox.appendChild(invetoryItemName)
        inventoryItemBox.setAttribute("class", "inventory-item-name")
        inventoryItemBox.setAttribute("onclick", `selectSellingItem(${i})`)
        sellerBox.appendChild(inventoryItemBox)
    }
}

const setInventory = () => {
    villageScreen.setAttribute("style", "display: none")
    inventoryScreen.setAttribute("style", "display: flex")
    setInventoryStats()
}

const setMap = () => {
    villageScreen.setAttribute("style", "display: none")
    mapScreen.setAttribute("style", "display: flex")
}

const setBattleStats = () => {
    battleStats1.innerHTML = `${hero.name} - Lvl: ${hero.level} - Experience: ${hero.experience}/${experienceList[hero.level]} - Gold: ${hero.gold}`
    battleStats2.innerHTML = `Health Potions: ${hero.lifePotion} - Mana Potions: ${hero.manaPotion}`
    if (bossRoom) {
        battleStats3.innerHTML = `Dungeon Level: BOSS - Enemy: ${monster.name}`
    } else {
        battleStats3.innerHTML = `Dungeon Level: ${dungeonLevel} - Enemy: ${monster.name}`
    }
    
    specialAttackButton.innerHTML = `${hero.equippedWeapon.specialAttackName} - ${hero.equippedWeapon.specialAttackCost}`
    lifeBarStatsBtl.innerHTML = `${hero.life}/${hero.maxLife}`
    manaBarStatsBtl.innerHTML = `${hero.mana}/${hero.maxMana}`
    lifeBarBtl.setAttribute("style", `width: ${100/hero.maxLife * hero.life}%;`)
    manaBarBtl.setAttribute("style", `width: ${100/hero.maxMana * hero.mana}%;`)
    lifeBarStatsMonster.innerHTML = `${monster.life}/${monster.maxLife}`
    lifeBarMonster.setAttribute("style", `width: ${100/monster.maxLife * monster.life}%;`)
}

const setBattle = () => {
    mapScreen.setAttribute("style", "display: none")
    battleScreen.setAttribute("style", "display: flex")
    attackButton.removeAttribute("disabled")
    battleStats4.innerHTML = `Attack to start`
    battleBox.setAttribute("style", `background-image: url(${bgImgList[chosenRespawn]});`)
    
    if(hero.mana >= hero.equippedWeapon.specialAttackCost) {
        specialAttackButton.removeAttribute("disabled")
    }
    battleContinueButton.setAttribute("disabled", "true")
    battleLPButton.setAttribute("disabled", "true")
    battleMPButton.setAttribute("disabled", "true")
}

const selectRespawn = (resp) => {
    chosenRespawn = resp;
    if(resp == 1) {
        mapMessage.innerHTML = "Go to the goblin camp";
        mapStats1.innerHTML = `Levels: 10 - Unlocked`
        mapStats2.innerHTML = "A wise man once said - Don't negotiate with goblins. Kill them! That's why you won't try negotiating with these green monsters. Kill them all until you reach the Goblin Chief to gain access to the Orc Fortress!"
    }
    if(resp == 2) {
        mapMessage.innerHTML = "Go to the orc fortress";
        
        if(dungeonCompleted[resp - 1]) {
            mapStats1.innerHTML = `Levels: 13 - Unlocked`
        } else {
            mapStats1.innerHTML = `Levels: 13 - Defeat the Goblin Chief to Unlock`
        }
        mapStats2.innerHTML = "This is the realm of the Orc King, who stole the Orb that protected your village from evil magic. Defeat the Goblin Chief to gain access to the fortress, and eliminate all the king's guards to reach him and retrieve the Orb."
    }
}

const goToRespawn = () => {
    if(!dungeonCompleted[chosenRespawn - 1]) {
        return
    }
    dungeonLevel++;
    if(chosenRespawn == 1) {
        if(dungeonLevel < 3) {
            monster = new Goblin();
            if(monster.life != 0){
                monsterImage.setAttribute("src", monster.img)
            }
        } else if (dungeonLevel < 10) {
            monster = new GoblinWarrior();
            if(monster.life != 0){
                monsterImage.setAttribute("src", monster.img)
            }
        } else if (dungeonLevel == 10) {
            monster = new GoblinChief();
            if(monster.life != 0){
                monsterImage.setAttribute("src", monster.img)
            }
            bossRoom = true;
        }
        
        setBattle()
        setBattleStats()
        battleExitButton.setAttribute("disabled", "true")
    } else if(chosenRespawn == 2) {
        if(dungeonLevel < 4) {
            monster = new Orc();
            if(monster.life != 0){
                monsterImage.setAttribute("src", monster.img)
            }
        } else if(dungeonLevel < 13) {
            monster = new OrcSoldier();
            if(monster.life != 0){
                monsterImage.setAttribute("src", monster.img)
            }
        } else if (dungeonLevel == 13) {
            monster = new OrcKing();
            if(monster.life != 0){
                monsterImage.setAttribute("src", monster.img)
            }
            bossRoom = true;
        }
        
        setBattle()
        setBattleStats()
        battleExitButton.setAttribute("disabled", "true")
    } else {
        mapMessage.innerHTML = "Invalid option. Select a location to go to"
    }
}

const fight = (attackOption) => {
    if(monster.life == 0) {
        monsterImage.setAttribute("src", monster.deadImg)
    }
    if (hero.life > 0 && monster.life > 0) {
        let damage
        if (attackOption == 1) {
            damage = hero.attack();
        }
        if (attackOption == 2) {
            damage = hero.equippedWeapon.specialAttack(hero);
            if(hero.mana < hero.equippedWeapon.specialAttackCost) {
                specialAttackButton.setAttribute("disabled", "true")
            }
        }
        
        monster.takeDamage(damage);
        battleStats4.innerHTML = `You dealt ${damage} damage`
        attackButton.setAttribute("disabled", "true")
        specialAttackButton.setAttribute("disabled", "true")
        monsterImage.setAttribute("src", monster.hitImg)
        soundEffect.setAttribute("src", "../assets/audio/combat-punch-swing-e.mp3")
        soundEffect.play()
        heroImage.setAttribute("style", "left: 85px;")
        heroImage.setAttribute("src", "../assets/img/warrior-attack-03.png")
        setTimeout(() => {
            monsterImage.setAttribute("src", monster.img)
            heroImage.setAttribute("src", "../assets/img/warrior-01-128.png")
            heroImage.setAttribute("style", "left: 40px;")
            if(monster.life == 0) {
                monsterImage.setAttribute("src", monster.deadImg)
            }
        }, 200)
        setBattleStats()
        if(monster.life > 0){
            setTimeout((() => {
                damage = monster.attack()
                hero.takeDamage(damage);
                soundEffect.setAttribute("src", "../assets/audio/combat-punch-swing-e.mp3")
                soundEffect.play()
                battleStats4.innerHTML = `You took ${damage} damage`
                attackButton.removeAttribute("disabled")
                if(hero.mana >= hero.equippedWeapon.specialAttackCost) {
                    specialAttackButton.removeAttribute("disabled")
                }
                setBattleStats()
                if(monster.life == 0) {
                    monsterImage.setAttribute("src", monster.deadImg)
                    attackButton.setAttribute("disabled", "true")
                    specialAttackButton.setAttribute("disabled", "true")
                }
                heroImage.setAttribute("src", "../assets/img/warrior-hit-01-128.png")
                monsterImage.setAttribute("style", "left: -45px;")
                monsterImage.setAttribute("src", monster.attackImg)
                setTimeout(() => {
                    monsterImage.setAttribute("style", "left: 5px;")
                    heroImage.setAttribute("src", "../assets/img/warrior-01-128.png")
                    monsterImage.setAttribute("src", monster.img)
                }, 200)
            }), 1000)
        }
    } else {
        attackButton.setAttribute("disabled", "true")
        battleExitButton.removeAttribute("disabled")
        battleStats4.innerHTML = "You died! You must restart."
        battleExitButton.innerHTML = "Restart"
    }
    if(monster.life == 0) {
        monsterImage.setAttribute("src", monster.deadImg)
        const goldDropped = monster.dropGold();
        const drop = monster.dropItem()
        hero.gold += goldDropped;
        hero.experience += monster.experience;
        battleStats4.innerHTML = `Victory! You gained ${monster.experience} XP and ${goldDropped} gold!`
        if(drop.length > 3) {
            battleStats4.innerHTML += ` You found ${drop}.`
        }
        hero.levelUp(monster.experience);
        if (!bossRoom) {
            battleContinueButton.removeAttribute("disabled")
        } else {
            dungeonCompleted[chosenRespawn] = true;
        }
        
        battleLPButton.removeAttribute("disabled")
        battleMPButton.removeAttribute("disabled")
        
        battleExitButton.removeAttribute("disabled")
        setBattleStats()
    }
}

const exitBattle = () => {
    if(hero.life <= 0) {
        location.reload()
    } else {
        bossRoom = false;
        dungeonLevel = 0;
        setVillage()
    }
}

const drinkLP = () => {
    if(hero.lifePotion > 0) {
        soundEffect.setAttribute("src", "../assets/audio/sfx-magic11.mp3")
        soundEffect.play()
    }
    hero.drinkLifePotion()
    setStats()
    setBattleStats()
}

const drinkMP = () => {
    if(hero.manaPotion > 0) {
        soundEffect.setAttribute("src", "../assets/audio/sfx-magic11.mp3")
        soundEffect.play()
    }
    hero.drinkManaPotion()
    setStats()
    setBattleStats()
}

const buyEquipment = (equipment) => {
    if(equipment == 1) {
        buyLifePotion()
    }
    if(equipment == 2) {
        buyManaPotion()
    }
    if(equipment == 3) {
        if(hero.gold >= 60) {
            coinSound()
            hero.inventory.push(new SteelSword())
            hero.gold -= 60;
            shopMessage.innerHTML = "You bought a steel sword for 60 gold"
        } else  {
            shopMessage.innerHTML = "You don't have enough gold"
        }
    }
    if(equipment == 4) {
        if(hero.gold >= 50) {
            coinSound()
            hero.inventory.push(new ChainArmor())
            hero.gold -= 50;
            shopMessage.innerHTML = "You bought chainmail armor for 50 gold"
        } else  {
            shopMessage.innerHTML = "You don't have enough gold"
        }
    }
    shopStats1.innerHTML = `Health Potions: ${hero.lifePotion} - Mana Potions: ${hero.manaPotion} - Gold: ${hero.gold}`
    shopStats2.innerHTML = `${hero.equippedWeapon.name} - Atk: ${hero.equippedWeapon.attack} -- ${hero.equippedArmor.name} - Arm: ${hero.equippedArmor.armor}`
}

const showItemData = (item) => {
    if(item == 1) {
        selectItemSound()
        shopMessage.innerHTML = "Restores 50 health - 10 gold"
    }
    if(item == 2) {
        selectItemSound()
        shopMessage.innerHTML = "Restores 50 mana - 10 gold"
    }
    if(item == 3) {
        selectItemSound()
        shopMessage.innerHTML = `Attack: 5 - Cross Slash: Double damage - 15 mana - 60 gold`
    }
    if(item == 4) {
        selectItemSound()
        shopMessage.innerHTML = `Armor: 4 - 50 gold`
    }
}

const exitGame = () => {
    location.reload()
}

const setInventoryStats = () => {
    inventoryBox.innerText = "";
    for (let i = 0; i < hero.inventory.length; i++) {
        equippedWeapponImg.setAttribute("src", hero.equippedWeapon.img)
        equippedArmorImg.setAttribute("src", hero.equippedArmor.img)
        const inventoryItemBox = document.createElement("div")
        const inventoryItemImg = document.createElement("img")
        const invetoryItemName = document.createElement("p")
        invetoryItemName.innerHTML = hero.inventory[i].name;
        inventoryItemImg.setAttribute("src", hero.inventory[i].img)
        inventoryItemImg.setAttribute("class", "inventory-item-img")
        invetoryItemName.setAttribute("class", "inv-item-name")
        inventoryItemBox.appendChild(inventoryItemImg)
        inventoryItemBox.appendChild(invetoryItemName)
        inventoryItemBox.setAttribute("class", "inventory-item-name")
        inventoryItemBox.setAttribute("onclick", `selectShowItem(${i})`)
        inventoryBox.appendChild(inventoryItemBox)
    }
}

const selectShowItem = (index) => {
    if(index == -1) {
        selectItemSound()
        inventoryMessage.innerHTML = hero.equippedWeapon.name + " - " + hero.equippedWeapon.info
    } else if (index == -2) {
        selectItemSound()
        inventoryMessage.innerHTML = hero.equippedArmor.name + " - " + hero.equippedArmor.info
    } else {
        selectItemSound()
        selectedItem = index
        inventoryMessage.innerHTML = hero.inventory[index].info
    }
}

const selectSellingItem = (index) => {
    selectItemSound()
    selectedItem = index
    sellerMessage.innerHTML = hero.inventory[index].name + " - Price: " + hero.inventory[index].sellingPrice
}

const equipItem = () => {
    if(hero.inventory[selectedItem].type == "weapon") {
        equipItemSound()
        hero.inventory.push(hero.equippedWeapon)
        hero.equippedWeapon = hero.inventory[selectedItem]
        hero.inventory.splice(selectedItem, 1)
    } else if (hero.inventory[selectedItem].type == "armor") {
        equipItemSound()
        hero.inventory.push(hero.equippedArmor)
        hero.equippedArmor = hero.inventory[selectedItem]
        hero.inventory.splice(selectedItem, 1)
    }
    setInventoryStats()
}

const sellItem = () => {
    coinSound()
    const cost = hero.inventory[selectedItem].sellingPrice
    hero.inventory.splice(selectedItem, 1)
    hero.gold += cost
    setSellerStats()
}

const coinSound = () => {
    soundEffect.setAttribute("src", "../assets/audio/coin-dropped.mp3")
    soundEffect.play()
}

const equipItemSound = () => {
    soundEffect.setAttribute("src", "../assets/audio/item-equip.mp3")
    soundEffect.play()
}

const selectItemSound = () => {
    soundEffect.setAttribute("src", "../assets/audio/metal-clang.mp3")
    soundEffect.play()
}

const startGame = () => {
    if(nameInput.value.length > 2 && nameInput.value.length < 11) {
        setVillage()
    } else {
        startStats.innerHTML = "Your name must be between 3 and 10 characters."
    }
}

const setVictoryScreen = () => {
    villageScreen.setAttribute("style", "display: none")
    victoryScreen.setAttribute("style", "display: flex")
}
