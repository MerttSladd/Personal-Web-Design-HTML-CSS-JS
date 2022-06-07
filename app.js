const hamburger_icon=document.querySelector('#nav_bar .nav_bar .nav-list .hamburger')
const nav_list=document.querySelector('#nav_bar .nav_bar .nav-list');

hamburger_icon.addEventListener('click',()=>{
    nav_list.classList.toggle('open');
    hamburger_icon.classList.toggle()
})
