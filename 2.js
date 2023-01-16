let applicant = "Rashford";
let code = "aBdfmjn";
let experience = 2;
let scoreTest = 95;

// write your code here
let codeBf = 'BF'
let codeCheck = ''

// cek kode B or F
for (let i = 0; i < code.length; i++) {
    for (j = 0; j < codeBf.length; j++) {
        if (code[i] === codeBf[j]) {
            codeCheck += code[i]
        }
    }
}
// console.log(codeCheck);

// menentukan posisi dan gaji
let gaji = 0
let pos = ''
if (codeCheck === 'B') {
    pos += 'Backend Defeloper'
    gaji += 10000000
} else {
    pos += 'Frontend Developer'
    gaji += 110000000
}

// cek score dan tambahan bonus
if (pos === 'Backend Defeloper' && scoreTest >85 ) {
    gaji += 1000000
} 
if (pos === 'Frontend Developer' && scoreTest >90) {
    gaji += 1000000

}
let jab = ""
if (experience > 4) {
    jab += 'Sr.'
    gaji += 1000000
} else {
    jab += 'Jr.'
}
console.log(`Selamat ${applicant} kamu diterima menjadi ${jab} ${pos} dengan gaji pokok sebesar ${gaji}.`);
