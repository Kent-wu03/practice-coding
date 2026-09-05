const http = require('http');
const rupiah = require('rupiah-format')
const fs = require('node:fs')
const os = require('os')
const host = 'localhost'
const port = 3001

// request = data masuk dari luar
// respon = data keluar dari sistem

const server = http.createServer(function (request,response) {
    const nama = 'kent';
    let uang = 500000
    let jajan = 150000
    let sisa = uang - jajan

    fs.appendFile('sisauang.txt', String(sisa), () => {
        console.log("data uang berhasil disimpan")
    })

    const sisaram = os.freemem();
    const jmlhcpu = os.cpus();

    function cekcpu() {
        let mycpu = []
        jmlhcpu.map((cpu,i) => {
            mycpu.push(cpu.model)
        })
        return mycpu[0];
    }

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)
    const hasil =`
        saya jajan sebanyak ${jajan}, awalnya uang saya ${uang}, dan uangku sekarang sisa ${sisa} 
        sisa ram saya ${sisaram} 
        nama cpu saya adalah ${cekcpu()}
    `
    response.statusCode = 200;
    response.end(hasil)
})

server.listen(port, host, '',function() {
    console.log(`server mmenyala di : ${host}:${port}`)
})