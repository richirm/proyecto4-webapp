
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
        otro: 'hola',
        
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

    // objetos anidados
    const alumno5 = {
        nombre: 'ric',
        primerApellido: 'ros',
        segundoApellido: 'mald',
        edad: 35,
        fechaNacimiento: '01/11/1989',
        gastaCine: true,
        otro: 'hola',
        direccion: {
            calle: 'Jr. Pacaritambo',
            numero: '193',
            distrito: 'Independencia',
            provincia: 'Lima',
            departamento: 'Lima'
        },
        padre: {
            nombre: 'David',
            primerApellido: 'Rosales',
            segundoApellido: 'Molina',
            direccion: {
                calle: 'Jr. Las Dalias',
                numero: '123',
                distrito: 'Villa Maria',
                provincia: 'Lima',
                departamento: 'Lima'
            },
            fechaNacimiento: '15-01-1968'
        }
    };

    console.log(alumno5);
}

function obtenerObjeto() {
    const andamio1 = {
        color: 'caramelo',
        fechaCreacion: '2024-05-15',
        altura: '2m',
        ancho: '1.5m',
        grosor: '40cm',
        numCompartimientos: 10,
        material: 'Melamine'
    };
    const andamio2 = {
        color: 'caramelo',
        fechaCreacion: '2024-12-25',
        altura: '1m',
        ancho: '2m',
        grosor: '40cm',
        numCompartimientos: 8,
        material: 'Melamine'
    };
    console.log(andamio1, andamio2);

    // bien tabulado y formateado
    // nombrar correctamente las variables (camelCase, no caracteres especiales)
    // el nombre de las variables de objetos tienen que ser genericas y especifica que represente a la clase a la que pertenece

    const libro1 = {
        titulo: 'Mátematica',
        fechaCreacion: '2020-01-01',
        autor: {
            nombre: 'Pepito Gonzales',
            edad: 60,
            direccion: 'Av. algo 123',
        },
        numPaginas: 120,
        material: 'Fibra de pino',
    };

    const libro2 = {
        titulo: 'Física',
        fechaCreacion: '2022-01-01',
        autor: {
            nombre: 'Albert Einstein',
            edad: 90,
            direccion: 'Av. eeuu 456',
        },
        numPaginas: 250,
        material: 'Fibra de caoba',
    };
    console.log(libro1, libro2);

    // colocar los nombre de los atributos lo mas precisos y de acuerdo al valor que va a contener
    // el tipo de dato del valor del atributo depende del valor que va a contener y debe ser coherente con la realidad

    // 
    const nombre1 = 'Pepito';
    const persona1 = {
        nombre: nombre1,
        primerApellido: 'Gonzales',
        segundoApellido: 'Suarez',
        andamio: andamio1,
        libro: libro1
    };
    const persona2 = {
        nombre: 'Lupita',
        primerApellido: 'Jacinta',
        segundoApellido: 'Moles',
        andamio: {...andamio2},
        libro: {...libro2}
    };
    console.log(persona1, persona2);

    andamio1.color = 'verde';
    console.log(persona1);

    andamio2.color = 'negro';
    console.log(persona2, andamio2);

    // concatenamos objetos
    const parsonaParte1 = {
        nombre: 'Ric',
        primerApellido: 'Ros',
    };
    const parsonaParte2 = {
        segundoApellido: 'Mal',
        fechaNacimiento: '01/11/1989'
    };

    // forma moderna (spread operator)
    const persona3 = {
        ...parsonaParte1,
        ...parsonaParte2
    };
    console.log(persona3);
}

// Arrays (listado o conjunto de cosas)
function obtenerArreglos() {
    const vacio = [];
    console.log(vacio);

    // Arrays de tipos primitivos
    const nombreAlumnos = ['OTRO:RicardoOTRO:', 'OTRO:RobertoOTRO:', 'OTRO:VanessaOTRO:']; // array de strings
    console.log(nombreAlumnos);

    const edadAlumnos = [11, 9, 15]; // array de numbers
    console.log(edadAlumnos);

    const gustaCineList = [true, false, true]; // array de booleanos
    console.log(gustaCineList);

    // operacion: cantidad de elementos
    console.log(nombreAlumnos.length);

    // operacion: agregar elementos al array
    nombreAlumnos.push('OTRO:PepitoOTRO:');
    edadAlumnos.push(12);
    gustaCineList.push(false);

    console.log(nombreAlumnos, edadAlumnos, gustaCineList);

    nombreAlumnos.unshift('OTRO:PepitaOTRO:');
    edadAlumnos.unshift(10);
    gustaCineList.unshift(true);

    console.log(nombreAlumnos, edadAlumnos, gustaCineList);

    // posicion de un elemento de un array
    console.log(nombreAlumnos[1]); // forma estatica
    console.log(nombreAlumnos[3]); // forma estatica
    console.log(nombreAlumnos[nombreAlumnos.length - 1]);  // ultima posicion  forma dinamica
    // array.length - 18

    // modificacion
    nombreAlumnos[1] = 'Ric';
    nombreAlumnos[nombreAlumnos.length - 1] = 'OTRO:Pep';
    console.log(nombreAlumnos);

    // eliminar
    nombreAlumnos.splice(1, 1);
    console.log(nombreAlumnos);

    const nombresFiltrados = nombreAlumnos.filter((nombre) => {
        return nombre !== 'OTRO:RicardoOTRO:';
    });

    console.log(nombresFiltrados);

    const nombresFiltrados2 = nombreAlumnos.filter((nombre, index) => {
        return index !== 1;
    });

    console.log(nombresFiltrados2);

    // yiyui ljji


    // una funcion puede ejecutar internamente a otra funcion
    // la funcion puede devolver un valor usando el return
    // la funcion flecha reemplaza a la funcion tradicional en el filtrer, map
    // el filter necesita ejecutar una funcion, la funcion debe devolver con el return un valor boleano

    const nombreAlumnos2 = ['Ricardo', 'Roberto', 'Vanessa']; // array 
    const nombresMapeados1 = nombreAlumnos2.map((nombre) => {
        return true;
    });
    console.log(nombreAlumnos2, nombresMapeados1);

    // identico
    // similar
    // diferente

    const nombreAlumnos3 = ['Pepito', 'Carloncho', 'Jacinta'];

    // union (concatenación) de arrays
    const nombreAlumnosTotal = [
        ...nombreAlumnos2, // spread operator
        ...nombreAlumnos3
    ];
    console.log(nombreAlumnosTotal);


    const edadAlumnos2 = [11, 9, 15, 20, 25, 18, 23, 30]; // array de numbers
    let sumaEdadesTotal = 0;

    edadAlumnos2.forEach((edad) => {
        sumaEdadesTotal = sumaEdadesTotal + edad;
    });

    console.log(sumaEdadesTotal);

    let nombresAcumulados = '';

    nombreAlumnos3.forEach((nombre) => {
        nombresAcumulados = nombresAcumulados + nombre;
    });

    console.log(nombresAcumulados);


    const unionEdades = edadAlumnos2.join(', ');
    console.log(unionEdades);

    // every : todos
    const sonTodosMayoresEdad = edadAlumnos2.every((edad) => {
        return edad >= 18;
    });
    console.log(sonTodosMayoresEdad);

    // some : alguno
    const hayMayoresEdad = edadAlumnos2.some((edad) => {
        return edad >= 18;
    });
    console.log(hayMayoresEdad);
}