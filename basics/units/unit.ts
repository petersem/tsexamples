import { Faction } from "./faction";
import { iUnit } from "./iUnit";
import { UnitCategory } from "./unitCategory";
import { Guid } from "../utility/guid";

export class Unit implements iUnit {
    name: string = "Unit";
    unitCategory: UnitCategory = UnitCategory.land;
    health: number = 1;
    strength: number = 1;
    speed: number = 1;
    alive: boolean = true;
    faction: Faction;
    id: string;
    kills: number = 0;

    constructor(unitName: string, faction: Faction){
        this.faction = faction;
        this.id = Guid.generateGUID();
        console.log('Recruited: ' + unitName, '- ID: ' + this.id, ' (' + Faction[this.faction] + ')');
    }

    move(){
        console.log(this.name + ' has moved ' + this.speed + ' spaces');
    }

    attack(unit: iUnit){
        if (unit.alive == false){
            console.log(this.name + ' (' + Faction[this.faction] + ') is attacking a dead ' + unit.name + ' (' + Faction[unit.faction] + ')');
        }
        else if(unit.faction == this.faction){
            console.log(this.name + ' tried to attack ' + unit.name + ' who is is a friendly (' + Faction[this.faction] + ')');
        }
        else {
            unit.health -= this.strength;

            if(unit.health <= 0){
                unit.health = 0;
                console.log(unit.name + ' (' + Faction[unit.faction] + ') takes a hit, and is killed by ' + this.name + ' (' + Faction[this.faction] + ')');
                unit.alive = false;
                this.kills += 1;
            }
            else {
                console.log(unit.name + ' (' + Faction[unit.faction] + ' - health: ' + unit.health + ') takes a hit from ' + this.name + ' (' + Faction[this.faction] + ')');
            }
        }
    }
}
