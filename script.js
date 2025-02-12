
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let typed1 = new Typed(".auto-type", {
    strings : ["Web Developer", "Software Developer", "Programmer", "Web Designer"],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true 
});

let typed2 = new Typed(".auto-development", {
    strings : ["Web Development"],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true 
});
let typed3 = new Typed(".auto-ml-ai", {
    strings : ["ML/AI"],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true 
});
let typed4 = new Typed(".auto-dsa", {
    strings : ["Data Struct&Algo"],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true 
});

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwpamiZ57QxILKXywax_R1VducJMsDBKhxTWEj9iMA2eW3li32PBhtBaBAlEJKEHwm_/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})