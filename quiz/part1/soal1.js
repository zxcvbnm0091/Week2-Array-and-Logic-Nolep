// =====================================================
// Handling Data Array agar menghasilkan output yg baik | Part 1
// =====================================================

// ==========================
// Soal 1
// ==========================

/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. 
Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data dari argumen seperti di bawah ini:

output yang diharapkan:

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function dataHandling(data) {
  for (item of data) {
    let [id, nama, tempat, tanggal, hobi] = item;
    console.log(`
        Nomor ID : ${id}
        Nama Lengkap ${nama}
        TTL : ${tempat}, ${tanggal}
        Hobi : ${hobi}`);
  }
}

dataHandling(input);

// ------------------------------------
console.log("");
// -----------------------------------

// ==========================
// Soal 2
// ==========================

/*
Pada soal yg kedua, kalian harus belajar method splice, slice, join, split, dan lainnya.

Keluaran yang diharapkan (pada console):

["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
Mei
["1989", "21", "05"]
21-05-1989
Roman Alamsyah // batasi hanya 15 karakter saja pada array elemen ke 2
*/

let input2 = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];
let months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
function dataHandling2(input) {
  // isi jawaban kamu di sini
  input.splice(1, 1, `${input[1]}Elsharawy`); // add last name
  input.splice(2, 1, `Provinsi ${input[2]}`); // add provinsi
  input.splice(-1, 1, "Pria", "SMA International Metro");
  console.log(input);

  let tgl = input[3].split("/");
  let bulan = months[tgl[1].slice(-1) - 1];
  console.log(bulan);

  let newTgl = [tgl[tgl.length - 1], tgl[0], tgl[1]];
  console.log(newTgl);

  let formattedTgl = tgl.join("-");
  console.log(formattedTgl);

  const nama = input[1].split("").slice(0, 15).join("");
  console.log(nama);
}

dataHandling2(input2);
