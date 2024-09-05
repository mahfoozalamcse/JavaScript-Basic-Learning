// const marvel_heros = ["bahubali", "Ironman", "kgf"]
// const dc_heros = ["superman", "fastman", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]   // spread operator

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray("Mahfooz"))
console.log(Array.from("Mahfooz"))
console.log(Array.from({name: "Mahfooz"})) // interesting remember output  []

/* Output =>
    false
[
  'M', 'a', 'h',
  'f', 'o', 'o',
  'z'
]
[]
*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  