
// Desestructuración

const nombres = ['Juan','Ignacio','Pedro'];

const [ , ,n3 ] = nombres;
console.log(n3);

const retornaArreglo = () => {
    return ['abc',123]
};

const [ letra, numero ] = retornaArreglo();
console.log(letra ,numero);


const useState = (valor) => {
    return [valor, () => { console.log("Hola Mundo");}]
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre , setNombre ] = useState( "Ignacio ");
console.log(nombre);
setNombre();
