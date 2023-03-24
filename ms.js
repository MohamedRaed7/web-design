let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mount3 = document.getElementById('mount3');
let mount4 = document.getElementById('mount4');
let river = document.getElementById('river');
let bout = document.getElementById('bout');
let mhd = document.querySelector('.mhd');
window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mount3.style.top = value * 2 + 'px';
    mount4.style.top = value * 1.5 + 'px';
    river.style.left = value * 3 + 'px';
    bout.style.top = value + 'px';
    bout.style.left = value * 3 + 'px';
    mhd.style.fontSize = value + 'px';
    if (scrollY >= 70) {
        mhd.style.fontSize = 70 + 'px';
        mhd.style.position = 'fixed';
        if (scrollY >= 454) {
            mhd.style.display = 'none';
        } else {
            mhd.style.display = 'block';
        }
        if (scrollY >= 100) {
            document.querySelector('.main').style.background = 'linear-gradient( #376281, #10001f)'
        } else {
            document.querySelector('.main').style.background = ' linear-gradient(#200016, #10001f)'

        }
    }
}
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const digital = document.querySelector(".digital");
const f = x => x.toString().length == 1 ? "0" + x : x;


function showTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let ao = 180; // angle offset
    let secondAngle = (s / 60) * 360;
    let minuteAngle = (m / 60) * 360 + secondAngle / 60;
    let hourAngle = (h % 12 / 12) * 360 + minuteAngle / 12;
    hour.style.transform = `rotate(${hourAngle + ao}deg)`;
    minute.style.transform = `rotate(${minuteAngle + ao}deg)`;
    second.style.transform = `rotate(${secondAngle + ao}deg)`;
    digital.textContent = `${f(h)}:${f(m)}:${f(s)}`;
}

setInterval(showTime, 1000);