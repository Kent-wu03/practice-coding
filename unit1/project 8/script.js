let passlength = document.getElementById('passlength')
let password = document.getElementById('pass')
let savebtn = document.getElementById('savebtn')

function generatepass(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()-_=+{}[]';:/?.<>,`~"
    const data = lowerAlphabet + upperAlphabet + numeric + symbol;      

    let generator = '';
    for (let i =0;i < len;i++) {
        generator += data[~~(Math.random() * data.length)];
    }

    return generator;
}

function getpass() {
    const newpass = generatepass(passlength.value)
    password.value = newpass
    alert("generated pass")
}

function savepass() {
    document.title = password.value
    savebtn.setAttribute('href', 'data:text/plain;charset=utf-8' + encodeURIComponent(`pass saya: ${document.title}`))
    savebtn.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
    alert("berhasil disimpan")
}

// besok lanjut nonton video nya dan buat savepass (skip aja baca codingannya)