const tempo = document.querySelector("div.cronometro div.cronometro-tempo span")
const btnIniciar = document.querySelector("#iniciar")
const btnPausar = document.querySelector("#pausar")
const btnParar = document.querySelector("#parar")

let segundos = 0, minutos = 0, horas = 0
let intervalo

window.onload = ()=>{
    btnPausar.setAttribute("disabled", "true")
    btnParar.setAttribute("disabled", "true")
}

const renderizar = ()=>{
    
    segundos++
    while(segundos === 60){
        segundos = 0
        minutos++
        while(minutos === 60){
            minutos = 0
            horas++
            while(horas === 24){
                alert("Já se passaram 24 horas")
                horas = 0, minutos = 0, segundos = 0 
            }
        }
    }

    tempo.textContent = ("0" + horas).slice(-2) + ":" + ("0" + minutos).slice(-2) + ":" + ("0" + segundos).slice(-2)

}

const iniciar = ()=>{
    intervalo = setInterval(() => {
        renderizar()
    }, 1000)
}

const pausar = ()=>{
    clearInterval(intervalo)
}

btnIniciar.onclick = ()=>{
    iniciar()
    btnIniciar.setAttribute("disabled", "true")
    btnPausar.removeAttribute("disabled")
    btnParar.removeAttribute("disabled")
}

btnPausar.onclick = ()=>{
    pausar()
    btnPausar.setAttribute("disabled", "true")
    btnIniciar.removeAttribute("disabled")
    btnParar.removeAttribute("disabled")
    btnIniciar.textContent = "Continuar"
}

btnParar.onclick = ()=>{
    segundos = -1, minutos = 0, horas = 0
    pausar()
    btnParar.setAttribute("disabled", "true")
    btnPausar.setAttribute("disabled", "true")
    btnIniciar.removeAttribute("disabled")
    btnIniciar.textContent = "Reiniciar"
}