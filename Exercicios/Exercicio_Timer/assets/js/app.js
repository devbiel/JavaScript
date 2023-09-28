function meuTimer() {
    let cronometro;
    let tempoAtual = 0;
    let relogio = document.querySelector('.relogio');
    const botaoIniciar = document.querySelector('.botao-iniciar');
    const botaoPausar = document.querySelector('.botao-pausar');
    const BotaoZerar = document.querySelector('.botao-zerar');
    
    function AtualizarTempo() {
        const segundos = Math.floor(tempoAtual / 1000);
        const minutos = Math.floor(tempoAtual / 60000);
        const horas = Math.floor(tempoAtual / 3600000);

        segundosFormatados = String(segundos % 60).padStart(2,'0');
        minutosFormatados = String(minutos % 60).padStart(2,'0');
        horasFormatadas = String(horas % 60).padStart(2,'0');

        relogio.innerHTML = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
    }
    document,addEventListener("click", function (e){ 
        const el = e.target;

        if (el.classList.contains('botao-zerar')) {
            clearInterval(cronometro);
            tempoAtual = 0;
            AtualizarTempo();
            relogio.classList.remove('pausado');
        }

        if (el.classList.contains('botao-iniciar')) {
            clearInterval(cronometro);
            cronometro = setInterval(function () {
            tempoAtual += 1000;
            AtualizarTempo();
        }, 1000)
        relogio.classList.remove('pausado');
        }

        if (el.classList.contains('botao-pausar')) {
            clearInterval(cronometro);
        relogio.innerHTML = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
        relogio.classList.add('pausado');
        }
    })
}

meuTimer();