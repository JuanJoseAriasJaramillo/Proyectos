const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button")
buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerText="";
        }else if(item.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText=string.substr(0, string.length-1)
        }else if(display.innerText !=""&& item.id=="equal"){ //esto es un error?? equal???
            display.innerText=eval(display.innerText)
        }else if(display.innerText=="" && item.id=="equal"){
            display.innerText="Null",
            setTimeout(()=>(display.innerText=""), 2000)//esto es un error? deberoa decor display???
        }else{
            display.innerText+=item.id//aqui lo que hace es coger el display y dependiendo de lo que se introduzca y su id se "suma" al texto en pantalla 8+8+9+8, y asi
            
        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler")
const calculator = document.querySelector(".calculator")
const toggleIcon = document.querySelector("toggler-icon")
let isDark=true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark") //que afecte a todas las clases en toggle
    themeToggleBtn.classList.toggle("active")
    isDark=!isDark
} 