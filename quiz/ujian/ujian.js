// ==========================
// Soal 1
// ==========================
/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let closest = Infinity;
  let idX = -1;
  let idO = -1;
  if (!arr.includes("x") || !arr.includes("o")) return 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      idX = i;
    } else if (arr[i] === "o") {
      idO = i;
    }
    if (idX !== -1 && idO !== -1) {
      closest = Math.min(closest, Math.abs(idX - idO));
    }
  }
  return closest;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1

// ------------------------------------
console.log("");
// ------------------------------------

// ==========================
// Soal 2
// ==========================
/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. 
Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3

Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {
  // you can only write your code here!
  let result = [[], [], []];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 3 === 0
      ? result[2].push(arr[i])
      : arr[i] % 2 === 0
      ? result[0].push(arr[i])
      : result[1].push(arr[i]);
  }

  return result;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

// ------------------------------------
console.log("");
// ------------------------------------

// ==========================
// Soal 3
// ==========================
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let sortedAnimals = [];
  for (let i = 0; i < animals.length - 1; i++) {
    for (let j = 0; j < animals.length - 1 - i; j++) {
      if (animals[j].charAt(0) > animals[j + 1].charAt(0)) {
        [animals[j], animals[j + 1]] = [animals[j + 1], animals[j]];
      }
    }
  }
  animals.forEach((animal) => {
    let subSortedAnimals = sortedAnimals.find(
      (subArr) => subArr[0].charAt(0) == animal.charAt(0)
    );

    if (subSortedAnimals) {
      subSortedAnimals.push(animal);
    } else {
      sortedAnimals.push([animal]);
    }
  });

  return sortedAnimals;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [["ayam", "anoa"], ["cacing"], ["kuda", "kancil"]];

console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [["ayam", "anoa"], ["cacing", "cicak"], ["kuda", "kancil"], ["unta"]];

// ------------------------------------
console.log("");
// ------------------------------------
