
// Funciones en JS

// const saludar = function(nombre) {
//     return `Hola, ${ nombre }`
// }

const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`
};

const saludar3 = (nombre) => `Hola, ${ nombre }`;

const saludar4 = (nombre) => `Hola Mundo`;

console.log( saludar2("Juan") );
console.log( saludar3("Ignacio") );
console.log( saludar4() );


const getUser = () => ({
    uid: 1234,
    username: 'RDLM',
}); //Return implicito de un objeto
// console.log(getUser());

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
    uid:' ABC456',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Ignacio')
console.log( usuarioActivo );
