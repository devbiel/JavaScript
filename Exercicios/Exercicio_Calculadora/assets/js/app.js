function Calculadora() {
    this.container = document.querySelector('.container')
    this.display = document.querySelector('.display');

    this.inicia = function () {
        this.clickBotoes();
        this.enviarEnter();
        this.botoesTeclado();
    };

    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    };

    this.botaoClear = function () {
        this.display.value = '';
    };

    this.botaoApagar = function () {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.botaoIgual = function () {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert('Conta invalida');
            this.display.value = '';
            return;
        }

    };

    this.botoesTeclado = function () {
        document.addEventListener('keyup', e => {
            if (e.key === '1') this.display.value += '1';

            if (e.key === '2') this.display.value += '2';

            if (e.key === '3') this.display.value += '3';

            if (e.key === '4') this.display.value += '4';

            if (e.key === '5') this.display.value += '5';

            if (e.key === '6') this.display.value += '6';

            if (e.key === '7') this.display.value += '7';

            if (e.key === '8') this.display.value += '8';

            if (e.key === '9') this.display.value += '9';

            if (e.key === '0') this.display.value += '0';

            if (e.key === '+') this.display.value += '+';

            if (e.key === '-') this.display.value += '-';

            if (e.key === '*') this.display.value += '*';

            if (e.key === '/') this.display.value += '/';

            if (e.key === ',') this.display.value += ',';

            if (e.key === 'Backspace') this.botaoApagar();

            if (e.key === 'Enter') this.botaoIgual();
        })

    };

    this.enviarEnter = function () {
        document.addEventListener('keyup', e => { if (e.key === 13) this.botaoIgual(); })
    };

    this.clickBotoes = function () {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);

            if (el.classList.contains('btn-clear')) this.botaoClear();

            if (el.classList.contains('btn-del')) this.botaoApagar();

            if (el.classList.contains('btn-eq')) this.botaoIgual();

        });
    }

}

const c1 = new Calculadora();
c1.inicia();

/*
function criaCalculadora() {
    return {
        display : document.querySelector('.display'),
        
        inicia() {
            this.clickBotoes();
            this.pressionaEnter();
        },
 
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.equal();
                }
            });
        },
 
        equal() {
            let conta = this.display.value;
 
            try {
                conta = eval(conta);
 
                if (!conta) {
                    alert('Conta invalida');
                    return;
                }
 
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta invalida');
                this.clearDisplay();
                return;
            }
        },
 
        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
 
        clearDisplay() {
            this.display.value = '';
        },
 
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
 
        clickBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
 
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
 
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
 
                if (el.classList.contains('btn-del')) {
                    this.deleteOne();
                }
 
                if (el.classList.contains('btn-eq')) {
                    this.equal();
                }
 
            });
        },
 
    };
}
 
const calculadora = criaCalculadora();
calculadora.inicia();
 
*/