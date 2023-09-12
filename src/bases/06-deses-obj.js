
// Desestructuración

const persona = {
    nombre: 'Ignacio',
    apellido: 'Vaquel',
    edad: 22,
    altura: 1.80,
};

// const {nombre , apellido, edad} = persona;
// console.log(nombre, apellido, edad);

const usarContexto = ({nombre , apellido, edad, altura = 1.80 }) => {

    //console.log(nombre, apellido, edad, altura);

    return {
        nombreSolo: nombre,
        anios: edad,
        latlng: {
            lat: -31.4135000,
            lng: -64.1810500,
        }
    }
}

const {nombreSolo, anios, latlng:{lat,lng}} = usarContexto(persona);
console.log(nombreSolo,anios, lat,lng);