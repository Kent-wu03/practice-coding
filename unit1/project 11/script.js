const circles = document.querySelectorAll(".circle");
circles.forEach(circle => {
    circle.addEventListener("click", ({target}) => {
        const {backgroundColor} = getComputedStyle(target)
        document.body.style.backgroundColor = backgroundColor
        if (backgroundColor == "rgb(51, 51, 51)") {
            document.body.style.color = "white";
        }else {
            document.body.style.color = "black";
        }
    })
});


function reset() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
// tugas 1 : buat tombol reset ubah background jadi putih (done)
// tugas 2 : buat warna text title diubah utk warna hitam sisanya warna putih (done)