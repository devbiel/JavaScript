function calculoIMC() {
    const form = document.querySelector('.form');

    function criaP() {
        const p = document.createElement('p');
        return p;
    }

    function resultadoMostrar(msg, isValid) { // Função mostrar resultado
        const resultadoMostrar = document.querySelector('.resultado');
        resultadoMostrar.innerHTML = '';
        const p = criaP()

        if (isValid) {
            p.classList.add('.bad');
        } else {
            p.classList.add('.paragrafo-resultado');
        }

        p.innerHTML = msg;
        resultadoMostrar.appendChild(p);
    }

    const nivelIMC = ['(Abaixo do peso)', '(Peso normal)', '(Sobrepeso)', '(Obesidade grau 1)', '(Obesidade grau 2)', '(Obesidade grau 3)'];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const inputPeso = form.querySelector('.peso');
        const inputAltura = form.querySelector('.altura');

        const pesoValor = Number(inputPeso.value);
        const alturaValor = Number(inputAltura.value);

        if (!pesoValor) {
            resultadoMostrar(`Peso inválido`, false);
            return;
        }

        if (!alturaValor) {
            resultadoMostrar(`Altura inválido`, false);
            return;
        }

        const resultado = pesoValor / (alturaValor * alturaValor);

        if (resultado < 18.5) {
            imcNivel = nivelIMC[0];
        } else if (resultado > 18.5 && resultado <= 24.9) {
            imcNivel = nivelIMC[1];
        } else if (resultado >= 25 && resultado <= 29.9) {
            imcNivel = nivelIMC[2];
        } else if (resultado >= 30 && resultado <= 34.9) {
            imcNivel = nivelIMC[3];
        } else if (resultado >= 35 && resultado <= 39.9) {
            imcNivel = nivelIMC[4];
        } else {
            imcNivel = nivelIMC[5];
        }
        resultadoMostrar(`<p>Seu IMC é ${resultado.toFixed(2)} ${imcNivel}</p>`);

    }
    form.addEventListener('submit', recebeEventoForm);

}
calculoIMC();