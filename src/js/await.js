import { buscarHeroeAsync, buscarHeroe} from "./promesas";

const heroesIds = ['capi', 'spider', 'iron'];

const obtenerHeroesArr = async () => {
    const heroesArr = [];

    for (const id of heroesIds) {
        const heroeActual = await buscarHeroeAsync(id);
        // const heroeActual = await buscarHeroe(id);
        heroesArr.push(heroeActual);
    }

    //poco realista, pero para el ejemplo
    //en un caso real, se esperaria a que todas las promesas se resuelvan usando await
    // setTimeout(() => {
    //     console.log('Obteniendo heroes...');
    //     console.table(heroesArr);
    // }, 3000);
    return heroesArr;
}

//optimizando la funcion buscarHeroesArr, no es recomendable usar un for of con await
const obtenerHeroesArrOptimizado = async () => {
    // const heroesArr = [];
    // for (const id of heroesIds) {
    //     heroesArr.push(buscarHeroe(id));
    // }
    // return await Promise.all(heroesArr);

    //mas optimizado 
    return await Promise.all(heroesIds.map(buscarHeroe));
}


export {
    obtenerHeroesArr,
    obtenerHeroesArrOptimizado
}