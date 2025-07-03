const heroes = {
    capi : { 
        nombre: 'Capitán América',
        poder : 'Super fuerza',
    },
    iron : { 
        nombre: 'IronMan',
        poder : 'Millonario',
    },
    spider : { 
        nombre: 'SpiderMan',
        poder : 'telaraña',
    }
}


// funcion para buscar un heroe por id
export const buscarHeroe = (id) => {
    const heroe = heroes[id];
    
    // Retorna una promesa
    return new Promise((resolve, reject) => {
        if (heroe) {
            // Si el heroe existe, se resuelve la promesa
            resolve(heroe);
        } else {
            // Si el heroe no existe, se rechaza la promesa
            reject(`No existe un héroe con el id ${id}`);
        }
    });
}