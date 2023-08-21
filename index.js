let startEl = document.getElementById("start");
let stopEl = document.getElementById("stop");
let resetEl = document.getElementById("reset1");
let para = document.getElementById("para");
let count=0;
let timer;


startEl.onclick = function () {
    startEl.disabled = true
    timer = setInterval(function () {
    count = count + 1;
    para.textContent = count;
}, 1000)}

resetEl.onclick = function () {
                clearInterval(timer);
        startEl.disabled = false

    count = 0;

    para.textContent = count;

}

stopEl.onclick = function () {
        startEl.disabled = false

        clearInterval(timer);
    
}
