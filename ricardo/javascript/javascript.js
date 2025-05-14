
// para poder ejecutarla usando su nombre desde eventos
// organizar o agrupar el codigo que queremos ejecutar
// para poder diferenciarla de otras funciones
function executarFuncion1() {
    console.log(1111);
    console.log(2222);
}

// Crear una funcion que haga log de la palabra "nadar en el mar"
function nadarEnMar() {
    console.log('nadar en el mar');
}

// Crear una funcion que haga log de la palabra "jugar con el perro"
function jugarPerro() {
    console.log('Jugar con el perro');
}

function nombrarPerro(nombrePerro, apellidoPerro, edadPerro) {
    console.log('Nombre: ' + nombrePerro, apellidoPerro, edadPerro);
}

// Crear una funcion que haga log del nombre deel gato y que reciba el nombre en el parametro

function sumarEdades() {
    const edadPepito = 20;
    const edadJuanito = 30;
    
    const resultado = edadPepito + edadJuanito;
    console.log(resultado);
}

// Suma de las costo de un perro y un gato
// Calcular la ganancia (valor venta - costo insumos)
// Calcular el costo total de pollo a la brasa ( precio pollo * cantidad pollos)
// Calcular el pago por dia (pago mensual / numero dias trabajados)

function calcularPagoDia() {
    const pagoMensual = 500;
    const numDiasTrabajados = 20;

    const resultado = pagoMensual / numDiasTrabajados;
    console.log(resultado);
}

// Concatenacion
function calcularNombreCompleto() {
    const nombrePersona = 'Pepito';
    const primerApellido = 'Gonzales';
    const segundoApellido = 'Camacho';

    const resultado1 = nombrePersona + ' ' + primerApellido + ' ' + segundoApellido; // operador +
    const resultado2 = `${nombrePersona} ${primerApellido} ${segundoApellido}`; // string templates
    const resultado3 = ''.concat(nombrePersona, ' ', primerApellido, ' ', segundoApellido); // operador concat

    console.log('operador +:', resultado1);
    console.log('string templates:', resultado2);
    console.log('operador concat:', resultado3);
}

// Calcular la direccion completa: nombre avenida, distrito, provincia

// Longitud
function calcularLongitudNombre() {
    const nombreCompleto = 'Pepito Gonzales Camacho';

    const resultado = nombreCompleto.length;

    console.log(resultado);
}

// Calcular la longitud de la direccion

// Mayuscula y Minuscula
function convertirNombreMayusculaMinuscula() {
    const nombreCompleto = 'Pepito Gonzales Camacho';

    const resultado1 = nombreCompleto.toUpperCase();
    const resultado2 = nombreCompleto.toLowerCase();

    console.log(resultado1);
    console.log(resultado2);
}

// convertir a M/m la direccion

// Validar comienzo o fin de string
function validarInicioFinNombre() {
    const nombreCompleto = 'Pepito Gonzales Camacho';

    const resultado1 = nombreCompleto.startsWith('Pepito');
    const resultado2 = nombreCompleto.endsWith('Camacho1');
    console.log(resultado1, resultado2);
}

// Validar la direccion si empieza con '' o termina con ''

function mostrarNombreCorrecto() {
    const nombreCompleto = 'OTRO:Pepito Gonzales CamachoOTRO:';

    const resultado = nombreCompleto.replaceAll('OTRO:', '');

    console.log(resultado);
}

// mostrar la direccion correcta

function obtenerApellidos() {
    const nombreCompleto = 'Pepito Gonzales Camacho';

    const resultado = nombreCompleto.substring(7);

    console.log(resultado);
}

// mostrar una parte de la direccion

function mostrarNombrePrimeraLetraMayuscula() {
    const nombreCompleto = 'pepito Gonzales Camacho';

    const resultado = nombreCompleto.charAt(0).toUpperCase() + nombreCompleto.substring(1);

    console.log(resultado);
}

// mostrar la dirección capitalizada

// Booleanos

function validarSalirCalle() {
    const estaLloviendo = false;
    const tengoDinero = true;
    const llamoMama = true;

    const salgoCalle = !estaLloviendo && tengoDinero && !llamoMama;

    console.log(salgoCalle);

    // true && true => true
    // false && true => false
    // true && false => false
    // false && false => false
}

function comprarSalchipapa() {
    const daniPropina = true;
    const alePropina = false;
    const saleMagaly = true;

    const comproSalchipapa = (daniPropina || alePropina) && saleMagaly;

    console.log(comproSalchipapa);

    // true || true => true
    // true || false => true
    // false || true => true
    // false || false => false
}

// datos primitivos (datos simples)
    // number = 2
    // string = ''
    // booleano = false

// datos complejos
    // Objetos
    // Arrays
    // Dates

function obtenerAlumno() {
    // clase Alumno
    const alumno1 = {
        nombre: 'ric',
        primerApellido: 'ros',
        segundoApellido: 'mald',
        edad: 35,
        fechaNacimiento: '01/11/1989',
        gastaCine: true,
        otro: 'hola'
    };

    const alumno2 = {
        nombre: 'emmir',
        primerApellido: 'ros',
        segundoApellido: 'chip',
        edad: 0,
        fechaNacimiento: '06/08/2024',
        gastaCine: false,
    };

    console.log(alumno1);
    console.log(alumno2);

    // Acceder a un atributo
    console.log(alumno1.edad); // acceso estatico al atributo
    console.log(alumno1['edad']); // acceso dinamico al atributo

    // Usar un atributo
    const nombreCompleto1 = `${alumno1.nombre} ${alumno1.primerApellido} ${alumno1.segundoApellido}`;
    console.log(nombreCompleto1);

    // Modificar atributo
    alumno1.primerApellido = 'rosales';
    console.log(alumno1);

    // Eliminar atributo
    delete alumno1.otro;
    console.log(alumno1);

    // Copiar un objeto (dependiente)
    const alumno3 = alumno1;
    console.log(alumno3);

    alumno1.segundoApellido = 'maldonado';
    console.log(alumno3);

    // Copiar un objeto (independiente)
    const alumno4 = {...alumno1}; // spread operator
    console.log(alumno4);

    alumno1.nombre = 'ricardo';
    console.log(alumno4);
    console.log(alumno3);

}