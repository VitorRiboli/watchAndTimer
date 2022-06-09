function getTimeSecond(second) {  //criar os segundos e retornar-los
    const data = new Date(second * 1000); //JS recebe me mileseimos de segundos, * 1000, retorna o segundo

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' //deixou a hora zerada, pode ser GMT ou UTC, pode olhar na wike sobre
    })
}

const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let second = 0;
let watchTimer;

function startTimer() {  //função para iniciar o timer
    watchTimer = setInterval(() => {
        second++; //a cada segundo adiciona um
        timer.innerHTML = getTimeSecond(second);
    }, 1000)
    iniciar.innerHTML = 'Iniciar'
}

document.addEventListener('click', function (e) {
    const el = e.target;  //el para elementos

    if (el.classList.contains('zerar')) {
        clearInterval(watchTimer);
        timer.innerHTML = '00:00:00'
        timer.style.color = 'green'
        second = 0;
    }

    if (el.classList.contains('pausar')) {
        clearInterval(watchTimer);
        timer.style.color = 'red'
        iniciar.innerHTML = 'Continuar'
        iniciar.style.textAlign = 'center'
    }

    if (el.classList.contains('iniciar')) {
        clearInterval(watchTimer)
        startTimer();
        timer.style.color = 'white'
    }
});

/*
iniciar.addEventListener('click', function (event) {
    clearInterval(watchTimer)
    startTimer();
    timer.style.color = 'white'
})

pausar.addEventListener('click', function (event) {
    clearInterval(watchTimer);
    timer.style.color = 'red'
    iniciar.innerHTML = 'Continuar'
    iniciar.style.textAlign = 'center'
})

zerar.addEventListener('click', function (event) {
    clearInterval(watchTimer);
    timer.innerHTML = '00:00:00'
    timer.style.color = 'green'
    second = 0;
})
*/