const body = document.querySelector('body');
modes = body.querySelector('.modes');

toggle = body.querySelector('.toggle-swith');

sun = body.querySelector('.fa-sun');
moon = body.querySelector('.fa-moon');
modetext = body.querySelector('.mode-text');

const navicon = document.querySelector('.close');
const sidenav = document.querySelector('.sidenav');
const home = document.querySelector('.home')




modes.addEventListener("click", () => {
        body.classList.toggle("dark");
       if(body.classList.contains("dark")){
        modetext.innerText = "Light mode"
}else{
        modetext.innerText = "Dark mode"
}
})


navicon.addEventListener("click", () =>{
     body.classList.toggle("activ");
     
        
})
