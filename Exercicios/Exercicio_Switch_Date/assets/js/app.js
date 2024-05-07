function exercicioData() {
    const tituloData = document.querySelector('.titulo-data');
    
        const data = new Date();
        const day = data.getUTCDay();
        const month = data.getMonth();
        const year = data.getFullYear();
        const hour = zeroAEsquerda(data.getHours());
        const minute = zeroAEsquerda(data.getMinutes());

        const diaDaSemanaTexto = getFullDate(day);
        const mesTraduzido = getFullMonth(month);

    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function getFullMonth(month) {
        let monthText;
        switch (month) {
            case 0:
                monthText = 'janeiro';
                return monthText;
            case 1:
                monthText = 'feveriro';
                return monthText;
            case 2:
                monthText = 'março';
                return monthText;
            case 3:
                monthText = 'abril';
                return monthText;
            case 4:
                monthText = 'maio';
                return monthText;
            case 5:
                monthText = 'junho';
                return monthText;
            case 6:
                monthText = 'julho';
                return monthText;
            case 7:
                monthText = 'agosto';
                return monthText;
            case 8:
                monthText = 'setembro';
                return monthText;
            case 9:
                monthText = 'outbro';
                return monthText;
            case 1:
                monthText = 'novembro';
                return monthText;
            case 11:
                monthText = 'dezembro';
                return monthText;
        }
    }

    function getFullDate(day){
        let dayWeekText;
        switch (day) {
            case 0:
                dayWeekText = 'domingo';
                return dayWeekText;
            case 1:
                dayWeekText = 'segunda-feira';
                return dayWeekText;
            case 2:
                dayWeekText = 'terça-feira';
                return dayWeekText;
            case 3:
                dayWeekText = 'quarta-feira';
                return dayWeekText;
            case 4:
                dayWeekText = 'quinta-feira';
                return dayWeekText;
            case 5:
                dayWeekText = 'sexta-feira';
                return dayWeekText;
            case 6:
                dayWeekText = 'sábado';
                return dayWeekText;
        }
    }
    tituloData.innerHTML = `${diaDaSemanaTexto}, ${day} de ${mesTraduzido} de ${year}</br>`;
    tituloData.innerHTML += `${hour}:${minute}`;
}

exercicioData();