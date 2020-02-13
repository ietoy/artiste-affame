const Roll = require('roll');

roll = new Roll();

var rollP1 = roll.roll('5d6');
var rollP2 = roll.roll('5d6');
var rollP3 = roll.roll('5d6');

var p1hand = rollP1.rolled;
var p2hand = rollP2.rolled;
var p3hand = rollP3.rolled;

console.log("Hello there...");

console.log("Player 1 rolled:");
console.log(p1hand);


console.log("Player 2 rolled:");
console.log(p2hand);


console.log("Player 3 rolled:");
console.log(p3hand);

console.log("=====================");
console.log("Here is an array of all dice rolled:");

var allDice = p1hand.concat(p2hand).concat(p3hand);

console.log(allDice);

var onesUp;
var twosUp;
var threesUp;
var foursUp;
var fivesUp;
var sixesUp;


// FIND TOTAL DICE UP FX
    // LOOK AT TOTAL DICE ROLLED ARRAY
    // SET COUNTER FOR EACH DIE FACE
    // INCREMENT EACH COUNTER PER VALUE SHOWN


// CHECK BID FX
    // LOOK AT CURRENT BID VAR
    // LOOK AT VALUES SHOWN ARR/OBJ
    // SAVE CALLER AS NEW VAR CALLER
        // OR SET PLAYER CALLING CALLER BOOL TO TRUE?
        // REVISIT TO FIND THE CLEAREST, MOST EFFICIENT WAY TO TRACK WHOS CALLING
    // RUN THIS FX WHEN SOMEONE CALLS
    // CHECK SWITCH CASES
        // IF BID > SHOWN
            // BIDDER -1 DIE POOL SIZE
        // IF BID < SHOWN
            // CALLER -1 DIE POOL SIZE
        // IF BID === SHOWN
            // ALL NOT BIDDER -1 DIE POOL SIZE
