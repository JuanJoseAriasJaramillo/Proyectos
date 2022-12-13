const menuToggle=document.querySelector('.menuToggle')
const navigation=document.querySelector('.navigation');
menuToggle.onclick=function () {
    navigation.classList.toggle('open')
}
const list = document.querySelectorAll('.list')
function activarLink(){
    list.forEach((item)=>item.classList.remove('active'))// pasa por todas las etiquetas con la clase active y la remueve para poder activarla solo en donde la encesitemos despues
    this.classList.add('active')
}
list.forEach((item)=>item.addEventListener('click', activarLink))