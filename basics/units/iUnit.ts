import { UnitCategory } from './unitCategory';
import { Faction } from './faction';

export interface iUnit {
    name: string;
    unitCategory: UnitCategory;
    health: number;
    strength: number;
    speed: number;
    alive: boolean;
    faction: Faction;
    id: string;
    kills: number;
}