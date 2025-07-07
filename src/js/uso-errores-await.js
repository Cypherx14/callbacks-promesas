import { obtenerHeroesArr, obtenerHeroesArrOptimizado, obtenerHeroeAwait} from './js/await';


console.time('await');


// obtenerHeroesArrOptimizado()
//     .then(heroes => {
//         console.table(heroes)
//         console.timeEnd('Obteniendo heroes await');
// });

obtenerHeroeAwait('capi2').then(heroe => {
    console.log(heroe);

    console.timeEnd('await');
}).catch(
    console.warn
);




