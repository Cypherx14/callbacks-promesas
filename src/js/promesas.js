const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Super fuerza',
    },
    iron: {
        nombre: 'IronMan',
        poder: 'Millonario',
    },
    spider: {
        nombre: 'SpiderMan',
        poder: 'telaraña',
    }
}


// funcion para buscar un heroe por id
export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    // Retorna una promesa
    return new Promise((resolve, reject) => {
        if (heroe) {
            setTimeout(() => {      
                resolve(heroe);
            }, 1000); // Simula un retardo de 1 segundo
            // Si el heroe existe, se resuelve la promesa
        } else {
            // Si el heroe no existe, se rechaza la promesa
            reject(`No existe un héroe con el id ${id}`);
        }
    });
}
//with async/await
const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];
    // Retorna una promesa con async/await
    if (heroe) {
        // Si el heroe existe, se resuelve la promesa
        return heroe;  //como llamar el resolve
    } else {
        // Si el heroe no existe, se rechaza la promesa
        throw `No existe un héroe con el id ${id}`; //como llamar el reject
    }
}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa lenta');
    }, 2000);
});
const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa media');
    }, 1500);
});
const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa rapida');
    }, 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida,
    buscarHeroeAsync
}