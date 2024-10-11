import { UnitCategory } from "../unitCategory";
import { Unit } from "../unit";
import { Faction } from "../faction";

export class Spy extends Unit {
    name: string = "Spy";
    health: number = 2;
    strength: number = 5;
    speed: number = 3;
    unitCategory: UnitCategory = UnitCategory.land;
    alive: boolean = true;
    faction: Faction;
    id: string;
    kills: number;
}
