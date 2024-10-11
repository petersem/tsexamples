import { Faction } from "./units/faction";
import { iUnit } from "./units/iUnit";
import { Grunt } from "./units/land/grunt";
import { Sergeant } from "./units/land/sergeant";
import { Spy } from "./units/land/spy";

let allUnits: iUnit[] = [];

console.log('** Recruit and Deploy ** ');
let grunt = new Grunt('Grunt', Faction.Christians);
allUnits.push(grunt);
grunt.move();
console.log(' ');

let grunt2 = new Grunt('Grunt', Faction.Christians);
allUnits.push(grunt2);
grunt2.move();
console.log(' ');

let sergeant = new Sergeant('Sergeant', Faction.Muslims);
allUnits.push(sergeant);
sergeant.move();
console.log(' ');

let sergeant2 = new Sergeant('Sergeant', Faction.Israelis);
allUnits.push(sergeant2);
sergeant2.move();
console.log(' ');

let spy = new Spy('Spy', Faction.Atheists);
allUnits.push(spy);
spy.move();
console.log('---------------------------------------');
console.log(' ');

// gun fight
console.log('** GUN FIGHT ** ');
grunt.attack(sergeant);
grunt.attack(spy);
grunt.attack(grunt2);
sergeant.attack(grunt);
spy.attack(sergeant);
spy.attack(sergeant);
spy.attack(grunt2);
sergeant2.attack(spy);
console.log('---------------------------------------');
console.log(' ');

// final score
console.log('** FINAL SCORES ** ');
allUnits.forEach(deployedUnit => {
    console.log(deployedUnit.name + ' ' 
        + deployedUnit.id, Faction[deployedUnit.faction] + ' - Alive: ' 
        + deployedUnit.alive + ', Kills: ' + deployedUnit.kills);
});

