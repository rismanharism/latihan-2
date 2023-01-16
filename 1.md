# Number 1 Livecode 1

## **MESIN NON-TUNAI JALAN TOL**

<br>

## Restrictions
- Build-in function yang dibolehkan mengikuti aturan umum saat briefing.

## Objectives
- Mampu menyelesaikan masalah yang diberikan.
- Mengerti konsep dan cara penggunaan `conditional` dan `data primitive`.

## Directions

Buatlah program mesin non-tunai sederhana untuk mensimulasikan transaksi sebuah kendaraan yang masuk dari gerbang IC Madiun di ruas jalan tol Ngawi - Kertosono.

Berikut adalah daftar tarif untuk kendaraan yang masuk dari gerbang IC Madiun.

|	Gerbang Masuk	|	Gerbang Keluar	|	Golongan Kendaraan	|	Tarif	|
|:-----------------:|:-----------------:|:---------------------:|----------:|
|	IC Madiun 		|	IC Caruban 		|	I					|	8.500	|
| 					| 					|	II 					|	12.500	|
|					|					|	III					|	12.500 	|
|					|	IC Nganjuk		|	I					|	43.500	|
|					|					|	II					|	65.500	|
|					|					|	III					|	65.500 	|

Penjelasan tabel tarif:
- Sebagai contoh, jika kendaraan keluar melalui **`'IC Caruban'`** dan golongan kendaraan **`'II'`** maka tarifnya **`12500`**.
- Semua yang tidak ada di dalam tabel dianggap tidak sesuai.

<br>

Output yang diinginkan terlihat di console adalah sebagai berikut:

1. Jika gerbang keluar dan golongan kendaraan sesuai dan saldo cukup.
**`"Sisa saldo anda adalah RP <sisa_saldo>,00. Semoga selamat sampai tujuan."`**
2. Jika gerbang keluar dan golongan kendaraan sesuai dan saldo tidak cukup.
**`"Saldo anda kurang RP <selisih_saldo_dan_tarif>,00. Tidak cukup untuk transaksi."`**
3. Jika gerbang keluar atau golongan kendaraan tidak sesuai.
**`"Tarif tidak ditemukan!"`**

<br>

## Notes

- Diasumsikan kendaraan selalu masuk dari gerbang **`"IC Madiun"`**.
- Jangan mengubah penaman variabel yang telah diberikan (**`gerbangKeluar`**, **`golonganKendaraan`**, **`saldo`**, **`tarif`**).
- Dipersilahkan mengganti nilai dari variabel **`gerbangKeluar`**, **`golonganKendaraan`**, **`saldo`** secara manual.
- Untuk variabel **`tarif`** nilainya jangan di-isi (*assign*) langsung. Gunakan program untuk mengisi ini!

<br>

## Examples

```js
// CONTOH 1
Input:
let gerbangKeluar = "IC Caruban"
let golonganKendaraan = "I"
let saldo = 18000
let tarif

Output:
"Sisa saldo anda adalah RP 9500,00. Semoga selamat sampai tujuan."

// CONTOH 2
Input:
let gerbangKeluar = "IC Caruban"
let golonganKendaraan = "I"
let saldo = 8000
let tarif

Output:
"Saldo anda kurang RP 500,00. Tidak cukup untuk transaksi."

// CONTOH 3
Input:
let gerbangKeluar = "IC Caruban"
let golonganKendaraan = "IX"
let saldo = 800000
let tarif

Output:
"Tarif tidak ditemukan!"

// CONTOH 4
Input:
let gerbangKeluar = "Sragen"
let golonganKendaraan = "I"
let saldo = 800000
let tarif

Output:
"Tarif tidak ditemukan!"
```

<br>