import './styles.css';
import {promesaLenta, promesaMedia, promesaRapida,buscarHeroe, buscarHeroeAsync } from './js/promesas';


// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)
//     .catch(console.warn);

buscarHeroe('capi2')
    .then( heroe => console.log(heroe))
    .catch(err => console.warn(err));

buscarHeroeAsync('iron2')
    .then(heroe => console.log(heroe))
    .catch(err => console.warn(err));


