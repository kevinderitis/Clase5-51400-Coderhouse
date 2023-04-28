import moment from 'moment';

let fecha1 = moment('2023-04-27')
let fecha2 = moment('1992-12-10')

console.log(`Hoy es ${fecha1.format('L')}`)
console.log(`Naci el  ${fecha2.format('L')}`)

let diferenciaDias = fecha1.diff(fecha2, 'days')
let difenciaAños = fecha1.diff(fecha2, 'years')

console.log(`Desde mi cumpleaños pasaron ${diferenciaDias} dias.`)
console.log(`Desde mi cumpleaños pasaron ${difenciaAños} años.`)