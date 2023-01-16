let gerbangKeluar = 'IC Carubn';
let golonganKendaraan = "II";
let saldo = 8000;
let tarif = '';
// Your code here
// console.log(tarif);
//jika jalur keluar & gol kendaraan maka tarif = ...


//cek gerbang keluar
if (gerbangKeluar !== 'IC Nganjuk' || gerbangKeluar !== 'IC Caruban') {
    console.log(`Tarif tidak ditemukan!`);
}
let harga = Number(tarif)

if ( gerbangKeluar === 'IC Caruban' && golonganKendaraan === 'I') { 
    harga += 8500
} else if ( gerbangKeluar === 'IC Caruban' && golonganKendaraan === 'II') {
    harga += 12500
} else if ( gerbangKeluar === 'IC Caruban' && golonganKendaraan === 'III') {
    harga += 12500
}
// console.log(harga);

// cek harga jalur keluar IC Nganjuk
if ( gerbangKeluar === 'IC Nganjuk' && golonganKendaraan === 'I') {
    harga += 43500
} else if ( gerbangKeluar === 'IC Nganjuk' && golonganKendaraan === 'II') {
    harga += 65500
} else if ( gerbangKeluar === 'IC Nganjuk' && golonganKendaraan === 'III') {
    harga += 65500
} 
// console.log(harga);
let note = ''
if (saldo >= harga) {
note += `Sisa saldo anda adalah RP ${saldo - harga},00. Semoga selamat sampai tujuan.`;
} else {
    note += `Saldo anda kurang RP ${harga - saldo},00. Tidak cukup untuk transaksi.`;
}
console.log(note);