import { UnitCategory } from "../unitCategory";
import { Unit } from "../unit";
import { Faction } from "../faction";

export class Sergeant extends Unit {
    name: string = "Sergeant";
    health: number = 5;
    strength: number = 5;
    speed: number = 2;
    unitCategory: UnitCategory = UnitCategory.land;
    alive: boolean = true;
    faction: Faction;
    id: string;
    kills: number;
}
