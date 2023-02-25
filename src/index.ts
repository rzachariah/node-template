const o = { foo: "bar" };
console.log( o );

const bag = {
  fruit: "apple",
  vegetable: "carrot",
  grain: "rice",
};
console.log( "bag", bag );

const letters = [ "a", "b", "c" ];
console.log( letters );

const fruitFoods = [
  "apple juice",
  "orange marmalade",
  "pear tart",
  "grape crush",
  "pinot colada",
];
console.log( "fruitFoods", fruitFoods );

function sayMyName( name: string ): void {
  if ( name === "Heisenberg" ) {
    console.log( "You're right 👍" );
  } else {
    console.log( "You're wrong 👎" );
  }
}

sayMyName( "Heisenberg" );
