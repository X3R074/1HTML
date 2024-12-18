console.log("le script est là")


const modeSombre = document.querySelector('#mode-sombre'); 
const derriere = document.querySelector('body');
const tete = document.querySelector('header');
const pied = document.querySelector('footer')
const tableau = document.querySelector('table')
const body = document.body;



let main = 'white';
let dark = 'black';


derriere.style.backgroundColor=main;
body.classList.add ('dark-theme');

function styles() {

    if (body.classList.contains ('dark-theme')){
        derriere.style.backgroundColor = main;
        derriere.style.color = dark;
        modeSombre.style.backgroundColor = dark;
        modeSombre.style.color = main;
        tete.style.backgroundColor = main;
        tete.style.color = dark;
        pied.style.backgroundColor=main;
        pied.style.color=dark;
        modeSombre.textContent= "Mode sombre"
}
    else { 

    derriere.style.backgroundColor = dark;
    derriere.style.color = main;
    modeSombre.style.backgroundColor = main;
    modeSombre.style.color = dark;
    tete.style.backgroundColor = dark;
    tete.style.color = main;
    pied.style.backgroundColor=dark;
    pied.style.color=main;
    modeSombre.textContent= "Mode clair"
    tableau.color='white'
    }
}

styles();



modeSombre.addEventListener('click', function(){ 
    body.classList.toggle('dark-theme')

    /*if (body.classList.contains ('dark-theme')){
        derriere.style.backgroundColor = main;
        derriere.style.color = dark;
        modeSombre.style.backgroundColor = dark;
        modeSombre.style.color = main;
        tete.style.backgroundColor = main;
        tete.style.color = dark;
        pied.style.backgroundColor=main;
        pied.style.color=dark;
        modeSombre.textContent= "Mode sombre"
}
    else { 

    derriere.style.backgroundColor = dark;
    derriere.style.color = main;
    modeSombre.style.backgroundColor = main;
    modeSombre.style.color = dark;
    tete.style.backgroundColor = dark;
    tete.style.color = main;
    pied.style.backgroundColor=dark;
    pied.style.color=main;
    modeSombre.textContent= "Mode clair"
    tableau.color='white'


      

    }*/
   styles();
});
