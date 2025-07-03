
import './styles.css';
import {buscarHeroe} from './js/callbacks';
import {buscarHeroe as buscarHeroePromesa} from './js/promesas';

const heroeId = 'capi';
const heroeId2 = 'spider';


// buscarHeroe(heroeId, (err, heroe1) => {
//     if(err){
//         return console.error(err);
//     }

//     buscarHeroe(heroeId2, (err, heroe2) => {
//         if(err){
//             return console.error(err);
//         }

//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });  

// });

buscarHeroePromesa(heroeId).then(heroe => {
    console.log(`Enviando a ${heroe.nombre} a la mision`);

});


console.log('fin de la app');
