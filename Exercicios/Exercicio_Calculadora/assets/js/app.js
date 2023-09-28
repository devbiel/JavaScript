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