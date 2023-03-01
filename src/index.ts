/* eslint-disable no-console */
import { isOdd } from "./util";

if( isOdd( 7 ) ) {
  console.log( "It's odd!" );
}

const o = { foo: "bar" };
console.log( o );

const bag = {
  fruit: "apple",
  vegetable: "carrot",
  grain: "rice",
};
console.log( "bag", bag );

const letters = [ "a", "b", "c" ];
if( letters ) {
  console.log( letters );
}

for( let i = 0; i < 5; i += 1 );

switch ( letters[0] ) {
  case "a":
    console.log( "a" );
    break;
  default:
    console.log( "default" );
}

const fruitFoods = [
  "apple juice",
  "orange marmalade",
  "pear tart",
  "grape crush",
  "pinot colada",
];
console.log( "fruitFoods", fruitFoods );

function sayMyName( name: string ): void {
  if( name === "Heisenberg" ) {
    console.log( "You're right 👍" );
  } else {
    console.log( "You're wrong 👎" );
  }
}

sayMyName( "Heisenberg" );
