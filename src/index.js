import { obtenerHeroesArr, obtenerHeroesArrOptimizado } from './js/await';


console.time('Obteniendo heroes await');


obtenerHeroesArrOptimizado()
    .then(heroes => {
        console.table(heroes)
        console.timeEnd('Obteniendo heroes await');
});



