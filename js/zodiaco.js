const DIA = document.getElementById('dia');
const MES = document.getElementById('mes');
const SIGNO = document.getElementById('signo');
const IMGSIGNO = document.getElementById('imgsigno');

const nombresSignos = {
    'Capricornio': 'Capricornio',
    'Acuario': 'Acuario',
    'Piscis': 'Piscis',
    'Aries': 'Aries',
    'Tauro': 'Tauro',
    'Geminis': 'Géminis',
    'Cancer': 'Cáncer',
    'Leo': 'Leo',
    'Virgo': 'Virgo',
    'Libra': 'Libra',
    'Escorpion': 'Escorpión',
    'Sagitario': 'Sagitario'
};

IMGSIGNO.style.width = '10%'; // Solo mantenemos el estilo, sin asignar una imagen aquí
IMGSIGNO.style.margin = '0 auto';
IMGSIGNO.style.marginRight = '5%';


function calcular() {
    let diaNac = parseInt(DIA.value);
    let mesNac = parseInt(MES.value);
    let signoZodiacal = '';
    let imagenSigno = '';

    if (mesNac == 1) {
        signoZodiacal = (diaNac <= 19) ? 'Capricornio' : 'Acuario';
    } else if (mesNac == 2) {
        signoZodiacal = (diaNac <= 18) ? 'Acuario' : 'Piscis';
    } else if (mesNac == 3) {
        signoZodiacal = (diaNac <= 20) ? 'Piscis' : 'Aries';
    } else if (mesNac == 4) {
        signoZodiacal = (diaNac <= 19) ? 'Aries' : 'Tauro';
    } else if (mesNac == 5) {
        signoZodiacal = (diaNac <= 20) ? 'Tauro' : 'Geminis';
    } else if (mesNac == 6) {
        signoZodiacal = (diaNac <= 20) ? 'Geminis' : 'Cancer';
    } else if (mesNac == 7) {
        signoZodiacal = (diaNac <= 22) ? 'Cancer' : 'Leo';
    } else if (mesNac == 8) {
        signoZodiacal = (diaNac <= 22) ? 'Leo' : 'Virgo';
    } else if (mesNac == 9) {
        signoZodiacal = (diaNac <= 22) ? 'Virgo' : 'Libra';
    } else if (mesNac == 10) {
        signoZodiacal = (diaNac <= 22) ? 'Libra' : 'Escorpion';
    } else if (mesNac == 11) {
        signoZodiacal = (diaNac <= 21) ? 'Escorpion' : 'Sagitario';
    } else if (mesNac == 12) {
        signoZodiacal = (diaNac <= 21) ? 'Sagitario' : 'Capricornio';
    }

    console.log('Signo Zodiacal:', signoZodiacal);

    SIGNO.innerHTML = `Tu signo del zodíaco es <b>${nombresSignos[signoZodiacal]}</b>`;
    imagenSigno = `./img/img${signoZodiacal}.png`;
    console.log('Ruta imagen:', imagenSigno);
    IMGSIGNO.src = imagenSigno;
}
