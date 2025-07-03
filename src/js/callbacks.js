
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
export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    
    if (heroe) {
        callback(null, heroe);
    }else{
        //si el heroe no existe 
        callback('No existe un héroe con ese id');
    }
}