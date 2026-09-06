let usia = prompt("masukkan usia anda")
let biodata = document.getElementById('biodata');

function g_biodata() {
    let generasi;
    if (usia > 10 && usia < 18) {generasi = "generasi remaja";}
    else if (usia >18 && usia < 30) {generasi = "generasi dewasa"}
    else if (usia >= 30) {generasi = "generasi tua";}
    else if (usia > 2 && usia < 10) { generasi = "generasi anak anak";}
    else {generasi = "generasi bayi";}
    return biodata.innerHTML = generasi
}
g_biodata()