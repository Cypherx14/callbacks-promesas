import { buscarHeroeAsync, buscarHeroe} from "./promesas";

const heroesIds = ['capi', 'spider', 'iron'];

const heroesPromesas = heroesIds.map(id => buscarHeroe(id));


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

// manejo de errores con await
const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (error) {
        // Manejo de errores, puedes lanzar un error o retornar null
        console.log('CATCH');
        console.warn(error);
        return null; // o lanzar un error, dependiendo de la lógica de tu aplicación
    }
}

const heroesCiclo = async () => {
    console.time('HeroesCiclo');

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));

    for await (const heroe of heroesPromesas){
        console.log(heroe);
    }
    console.timeEnd('HeroesCiclo')
}

const heroeIfAwait = async (id) => {
    if( (await buscarHeroeAsync(id)).nombre === 'Ironman'){  //espero que se cumpla la promesa y me retorne el resultado y ahi comparo el nombre
        console.log('Es el mejor de todos');
    }else{
        console.log('Nooo');
        
    }
}

export {
    obtenerHeroesArr,
    obtenerHeroesArrOptimizado,
    obtenerHeroeAwait,
    heroesCiclo,
    heroeIfAwait
}