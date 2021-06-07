// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
        }
        else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }

    }
    battleCry() {
        return `Odin Owns You All!`
    }

}



// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        this.health -= theDamage
    }
    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        }
        else if (this.health <= 0) {
            return `A Saxon has died in combat`
        }

    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        //choose random viking from the array, take its damage value and reset it with the value of a random choosen viking
        let chosenSaxon = saxonArmy[Math.floor(Math.random() * saxonArmy.length)]
        let chosenViking = vikingArmy[Math.floor(Math.random() * vikingArmy.length)]
        chosenSaxon.receiveDamage(chosenViking.strength)
        //remove dead Saxons from the army

        /* 
        //edit later: removing the random position of dead soldier (with indexOf):
             
             if (this.health <= 0) {
             saxonArmy.pop(chosenSaxon)
             }
             */

        return chosenSaxon.receiveDamage

    }
}
/*  saxonAttack(){
      //choose random viking from the array, take its damage value and reset it with the value of a random choosen viking
      class chosenViking (vikingArmy[Math.floor(Math.random()*vikingArmy.length)]){
          this.receiveDamage = saxonArmy[Math.floor(Math.random()*saxonArmy.length)].strength
              //remove dead Saxons from the army
              if (this.health <= 0) {
                  vikingArray.pop(this)
                  }
              return this.receiveDamage
          }

  }
  */
/*
//or, easier version:
saxonAttack extends vikingAttack {
    constructor()

}


showStatus(){

}
*/
