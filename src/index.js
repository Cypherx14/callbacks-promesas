
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

// Usando promesas pero sale lo mismo que callbacks hell
// buscarHeroePromesa(heroeId).then(heroe => {
//     // console.log(`Enviando a ${heroe.nombre} a la mision`);
//     buscarHeroePromesa(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision`);
//     });
// });

// para no tener ese problema se hace asi 

Promise.all([buscarHeroePromesa(heroeId),buscarHeroePromesa(heroeId2)])
    .then(([heroe1, heroe2]) => {
    
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);

});


// buscarHeroePromesa(heroeId)
//     .then(heroe1 => {
//         return buscarHeroePromesa(heroeId2).then(heroe2 => {
//             return {heroe1, heroe2};
//         });
//     })
//     .then(({heroe1, heroe2}) => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     })
//     .catch(err => {
//         console.error(err);
//     });
                       



console.log('fin de la app');
