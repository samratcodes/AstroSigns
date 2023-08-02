const Submit=document.querySelector('button');
const classtext = document.querySelector(".card");
Submit.addEventListener('click',function(e){
    e.preventDefault()
classtext.scrollIntoView({behavior:'smooth'});
})