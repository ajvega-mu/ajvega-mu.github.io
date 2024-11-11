let main = document.getElementById('main');
let content = document.getElementById('content');

let artGal = document.getElementById('artGal');

function itworks() {
    console.log('it works.');
}

document.onload = itworks();


// ART GALLERY //
if (document.getElementById('artGal')) {
    let artGal = document.getElementById('artGal');
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'imgDiv');
    
    artGal.insertAdjacentElement('beforeend', newDiv);
    let imgDiv = document.getElementById('imgDiv');
}