function getTimeSecond(second) {  //criar os segundos e retornar-los
    const data = new Date(second * 1000); //JS recebe me mileseimos de segundos, * 1000, retorna o segundo
    
    return data.toLocaleString('pt-BR', {
        hour12: false,
        timeZone: 'UTC' //deixou a hora zerada, pode ser GMT ou UTC, pode olhar na wike sobre
    })
}


const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let second = 0;
let minute = 0;
let hour = 0;

function startTimer() {  //função para iniciar o timer

}

iniciar.addEventListener('click', function(event){


    timer.innerHTML = ''
    timer.style.color = 'white'
})

pausar.addEventListener('click', function(event){
    

    timer.style.color = 'red'
})

zerar.addEventListener('click', function(event){
    

    timer.style.color = 'white'
})
