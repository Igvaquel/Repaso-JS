
//Objetos en js

const persona = {
    nombre: 'Ignacio',
    apellido: 'Vaquel',
    edad: 22,
    direccion: {
        ciudad: 'Cordoba',
        zip: 5003,
        lat: -31.4135000,
        lng: -64.1810500,
    }
};

// console.table( persona );
console.log( persona );

// const persona2 = persona; *Puede dar falsos positivos porque hace una copia del valor por referencia
// persona2.nombre = 'Juan';

const persona2 = {...persona};
persona2.nombre = 'Juan';
console.log(persona2);