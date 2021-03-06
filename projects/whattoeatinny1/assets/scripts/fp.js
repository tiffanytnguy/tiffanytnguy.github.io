/* ANIMATE: Make hover items pop up when hovering over (name) pin */

/* For tongpin */ 

function hoverTongPin() {
    document.getElementById('tonghover').classList.remove('hidden');
}

function hoverTongPinOut() {
    document.getElementById('tonghover').classList.add('hidden');
}

document.getElementById('tong').onmouseover = hoverTongPin;

document.getElementById('tong').onmouseout = hoverTongPinOut;

/* For rakupin */

function hoverRakuPin() {
    document.getElementById('rakuhover').classList.remove('hidden');
}

function hoverRakuPinOut() {
    document.getElementById('rakuhover').classList.add('hidden');
}

document.getElementById('raku').onmouseover = hoverRakuPin;

document.getElementById('raku').onmouseout = hoverRakuPinOut;

/* For kurapin */

function hoverKuraPin() {
    document.getElementById('kurahover').classList.remove('hidden');
}

function hoverKuraPinOut() {
    document.getElementById('kurahover').classList.add('hidden');
}

document.getElementById('kura').onmouseover = hoverKuraPin;

document.getElementById('kura').onmouseout = hoverKuraPinOut;

/* For smorgspin */

function hoverSmorgsPin() {
    document.getElementById('smorgshover').classList.remove('hidden');
}

function hoverSmorgsPinOut() {
    document.getElementById('smorgshover').classList.add('hidden');
}

document.getElementById('smorgs').onmouseover = hoverSmorgsPin;

document.getElementById('smorgs').onmouseout = hoverSmorgsPinOut;

/* For barnpin */

function hoverBarnPin() {
    document.getElementById('barnhover').classList.remove('hidden');
}

function hoverBarnPinOut() {
    document.getElementById('barnhover').classList.add('hidden');
}

document.getElementById('barnjoo').onmouseover = hoverBarnPin;

document.getElementById('barnjoo').onmouseout = hoverBarnPinOut;

