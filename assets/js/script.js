const button=document.querySelector('#nav .i');
const ul=document.querySelector('header .ul');
const form=document.querySelector('form')
button.addEventListener('click',() => {
    if(button.innerHTML==='<i class="fa-solid fa-bars"></i>'){
        form.style.top='118%';
        ul.style.display="block";
        button.innerHTML=`<i class="fa-regular fa-x"></i>`;
        button.style.border='none';
        button.style.fontSize='18px';
        }else{
        button.innerHTML='<i class="fa-solid fa-bars"></i>';
        form.style.top='75%';
        ul.style.display="none";
    }
})