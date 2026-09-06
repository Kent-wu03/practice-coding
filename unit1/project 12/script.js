function cekusia() {
    const birthdayinput =document.getElementById('ultah')
    const birthday = birthdayinput.value
    const hasil = document.getElementById('hasil')
    const now = new Date().getFullYear()
    const output = now - birthday
    hasil.textContent = `Usia anda sekarang adalah ${output}`
}