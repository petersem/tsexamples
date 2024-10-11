import { Faction } from "../faction";
import { UnitCategory } from "../unitCategory";
import { Unit } from "../unit";

export class Grunt extends Unit {
    //static #instance: Grunt;
    name: string = "Grunt";
    unitCategory: UnitCategory = UnitCategory.land;
    health: number = 1;
    strength: number = 1;
    speed: number = 1;
    alive: boolean = true;
    faction: Faction;
    id: string;
    kills: number;
}
