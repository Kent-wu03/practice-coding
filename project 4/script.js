const checkbox = document.getElementById("cek")
const lampu = document.getElementById("lampu1")

checkbox.addEventListener('change', (event)=> {
    if (event.target.checked) { lampu.src ='images/on.gif'}
    else {lampu.src = 'images/off.gif'}
})

// bikin tombol yg bs on off dgn checkbox

/*
function saklar(params) {
    console.log(params);
    
    if (params == "on") {
        lampu.src = 'images/on.gif'
    }
    else if (params == "off") {
        lampu.src = 'images/off.gif'
    }
    return lampu;
}*/