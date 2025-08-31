console.log('This is separte js file.');
// option-1: directly set on the HTML element
// <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>

// option-2: add onclick function on the HTML element
// IMPORTANT: We will use this many times
function makeRed(){
    document.body.style.backgroundColor='red';
}

// option-3: 
const makeBlueButton=document.getElementById('make-blue');
        makeBlueButton.onclick=makeBlue;

function makeBlue(){
    document.body.style.backgroundColor='blue';
}

// option-3: another [we will use this sometime]
const PurpleButton=document.getElementById('make-purple');
PurpleButton.onclick=function makePurple(){
    document.body.style.backgroundColor='purple';
}

// option-4:
const pinkButton=document.getElementById('make-pink');
pinkButton.addEventListener('click', makepink);

function makepink(){
    document.body.style.backgroundColor='pink';
}

// option-4: another
const greenButton=document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor='green';
});
// option-4: final
// IMPORTANT: We will use this some times
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor='goldenrod';
});