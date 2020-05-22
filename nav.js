let home = document.querySelector('.one');
let about = document.querySelector('.two');
let gallery = document.querySelector('.three');
let contact = document.querySelector('.four');

//event listeners
home.addEventListener('click', addHome, true);
about.addEventListener('click', addAbout, true);
gallery.addEventListener('click', addGallery, true);
contact.addEventListener('click', addContact, true);

//functions
function addHome(){
    if(about.classList.contains('on') || gallery.classList.contains('on')  || contact.classList.contains('on') ){
        about.classList.remove('on');
        gallery.classList.remove('on');
        contact.classList.remove('on');
        home.classList.toggle('on');
    }
};

function addAbout(){
    if(home.classList.contains('on') || gallery.classList.contains('on') || contact.classList.contains('on')){
        home.classList.remove('on');
        gallery.classList.remove('on');
        contact.classList.remove('on');
        about.classList.toggle('on');
    }
};

function addGallery(){
    if(home.classList.contains('on') || about.classList.contains('on') || contact.classList.contains('on')){
        home.classList.remove('on');
        about.classList.remove('on');
        contact.classList.remove('on');
        gallery.classList.toggle('on');
    }
};

function addContact(){
    if(home.classList.contains('on')|| about.classList.contains('on')|| gallery.classList.contains('on')){
        home.classList.remove('on');
        gallery.classList.remove('on');
        about.classList.remove('on');
        contact.classList.toggle('on');
    }
};