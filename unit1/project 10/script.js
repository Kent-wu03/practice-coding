const myname = "rocky"
let myaddress = "jl.krakatau"
let i =0;

//standar function
function getdetailhuman() {
    i++;
    if (i > 5) {
        console.log("lebih dari 5x di klik")
    }else {
        console.log("jatah klik masi ada")
    }
}

// arrow function
const getdetailhuman2 = () =>  {
    i++;
    i > 5 ? console.log('lebih dari 5x bro human2') : console.log('jatah klik masi ada')
}

const mahasiswa =[
    {
        nama:  "rocky bandel",
        alamat : "medan",
        usia : 20,
        semester: 3,
    },
    {
        nama:  "rocky black",
        alamat : "medan",
        usia : 25,
        semeste: 2,
    }
] 

function getdetaildata() {
    // mahasiswa.map(function(result,i) {
    //     console.table(result)
    // })
    mahasiswa.forEach(result => {
        console.log(result)
    })
    // console.log(`data yang anda cari: ${datas.nama}`)
}
