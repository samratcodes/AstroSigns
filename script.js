const Submit=document.querySelector('button');
const date = document.querySelector('input');
const classtext = document.querySelector(".card");
Submit.addEventListener('click',function(e){
    e.preventDefault()
    date.value=''
classtext.scrollIntoView({behavior:'smooth'});
})