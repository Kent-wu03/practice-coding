let body = document.body;
let mode = document.getElementById('mode')
let home = document.getElementById('home')
let rmode = document.getElementById('redmode')
const darklimit = 5;
let darkcounter =0;

let info = document.getElementById('info')

function darkmode() {
    cekred = body.classList.contains('redmode');
    darkcounter++;
    let sisalimit = darklimit - darkcounter;

    if (cekred) {
        body.classList.toggle('redmode')
    }

    if (darkcounter < darklimit) {
        let cek = body.classList.toggle('dark');
        if (cek) {mode.textContent = "MODE LIGHT"}
        else {mode.textContent = "MODE DARK"}
    }else {
        info.textContent = `Darkmode limit`
        mode.style.display = "none";
        home.textContent = "RESTART";
        return;
    }

    // render ke info element
    info.textContent = `Darkmode dipakai ${darkcounter}x, sisa darkmode ${sisalimit}`
}

function rerender() {
    location.reload();
}

function redmode() {
    body.classList.toggle('redmode');
}
