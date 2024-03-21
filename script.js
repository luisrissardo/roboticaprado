let icons = document.getElementById('icons-header')
let curso1 = document.getElementById( 'curso1' )
let curso2 = document.getElementById( 'curso2' )
let curso3 = document.getElementById( 'curso3' ) 
let cursoopener3 = document.getElementById('cursoopener3') 
let cursoopener2 = document.getElementById('cursoopener2')
let cursoopener1 = document.getElementById('cursoopener1')

window.addEventListener('scroll', ()=>{
    icons.classList.toggle("scroll", window.scrollY > 50)
})
function cursoopen1(){
        curso1.classList.toggle('open')
}
function cursoopen2(){
    curso2.classList.toggle('open')
}
function cursoopen3(){
    curso3.classList.toggle('open')
}