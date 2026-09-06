class hewan {
    warna
    keahlian
    constructor(nama) {
        this.nama = nama
    }

    set newcolor(color) {
        this.warna = color
    }

    set newskill(skill) {
        this.keahlian = skill
    }

    get detail() {
        return `hi saya ${this.nama}, saya berwarna ${this.warna}, keahlian saaya ${this.keahlian}`
    }
}

const kucing = new hewan("rocky");
kucing.newcolor = "red";
kucing.newskill = "meong";
console.log(kucing.detail)