function ejecutarFuncion1() {
    console.log(111);
    console.log(222);
}

function nadarMar() {
    console.log("nadar en el mar");
}

function jugarPerro() {
    console.log("jugar con el perro");
}

function nombrarPerro(nombrePerro) {
    console.log('Nombre: ' + nombrePerro);
}

function nombrarGato(nombreGato) {
    console.log('Nombre: ' + nombreGato);
}

function sumarEdades() {
    const edadPepito = 20;
    const edadJuanito = 30;
    
    const resultado = edadPepito + edadJuanito;
    console.log(resultado);
}

function sumarCosto() {
    const costoPerro = 120;
    const costoGato = 80;
    
    const resultado = costoPerro + costoGato;
    console.log(resultado);
}

function calcularGanancia() {
    const valorVenta = 300;
    const costoInsumo = 150;
    
    const resultado = valorVenta - costoInsumo;
    console.log(resultado);
}

function costoTotalPollo() {
    const precioPollo = 8;
    const cantidadPollo = 50;
    
    const resultado = precioPollo * cantidadPollo;
    console.log(resultado);
}

function calcularNombreCompleto() {
    const nombrePersona = 'Pepito';
    const primerApellido = 'Gonzales';
    const segundoApellido = 'Camacho';

    const resultado1 = nombrePersona + ' ' + primerApellido + ' ' + segundoApellido; // concatenacion
    const resultado2 = `${nombrePersona} ${primerApellido} ${segundoApellido}`; // string templates
    const resultado3 = ''.concat(nombrePersona, ' ', primerApellido, ' ', segundoApellido); // operador concat

    console.log('operador +:', resultado1);
    console.log('string templates:', resultado2);
    console.log('operador concat:', resultado3);

}

function calcularDireccion() {
    const nombreAvenida ='Calcuchimac'
    const nombreDistrito ='Ate'
    const nombreProvincia ='Lima'

    const resultado3 = `${nombreAvenida} ${nombreDistrito} ${nombreProvincia}`; 
    console.log(resultado3);

}

function calcularLongitudNombre() {
    const nombreCompleto = 'Pepito Gonzales Camacho';
    const resultado = nombreCompleto.length;
    console.log(resultado);
}

function calcularLongitudDireccion () {
    const nombreDireccion = 'Jose Rufino Echenique';
    const resultado = nombreDireccion.length;

    console.log(resultado);
}

// Mayuscula y Minuscula
function convertirNombreMayusculaMinuscula() {
    const nombreCompleto = 'Pepito Gonzales Camacho';
    const resultado1 = nombreCompleto.toUpperCase();
    const resultado2 = nombreCompleto.toLowerCase();
    console.log(resultado1);
    console.log(resultado2);
}
// convertir a M/m la direccion

function convertirDireccionMayusculaMinuscula() {
    const direccionCompleto = 'Jose Rufino Echenique';
    const resultado1 = direccionCompleto.toUpperCase();
    const resultado2 = direccionCompleto.toLowerCase();
    console.log(resultado1);
    console.log(resultado2);
}

// Validar comienzo o fin de string
function validarInicioFinNombre() {
    const nombreCompleto = 'Pepito Gonzales Camacho';
    const resultado1 = nombreCompleto.startsWith('Pepito');
    const resultado2 = nombreCompleto.endsWith('Camacho1');
    console.log(resultado1, resultado2);
}

function validarInicioFinDireccion() {
    const direccionCompleto = 'Jose Rufino Echenique';
    const resultado1 = direccionCompleto.startsWith('Jose');
    const resultado2 = direccionCompleto.endsWith('que');
    console.log(resultado1, resultado2);
}

// Validar la direccion si empieza con '' o termina con ''
function mostrarNombreCorrecto() {
    const nombreCompleto = 'OTRO:Pepito Gonzales CamachoOTRO:';
    const resultado = nombreCompleto.replaceAll('OTRO:', '');
    console.log(resultado);
}
// mostrar la direccion correcta

function mostrarDireccionCorrecto () {
    const direccionCompleto = 'surco Jose Rufino surco Echeniquesurco';
    const resultado = direccionCompleto.replaceAll('surco', '');
    console.log(resultado);
}

function obtenerApellidos() {
    const nombreCompleto = 'Pepito Gonzales Camacho';
    const resultado = nombreCompleto.substring(7);
    console.log(resultado);
}
// mostrar una parte de la direccion

function obtenerDireccion() {
    const direccionCompleto = 'Jose Rufino Echenique';
    const resultado = direccionCompleto.substring(12,21);
    console.log(resultado);
}

function mostrarNombrePrimeraLetraMayuscula() {
    const nombreCompleto = 'pepito Gonzales Camacho';
    const resultado = nombreCompleto.charAt(0).toUpperCase() + nombreCompleto.substring(1);
    console.log(resultado);
}

function mostrarDireccionPrimeraLetraMayuscula() {
    const direccionCompleto = 'jose Rufino Echenique';
    const resultado = direccionCompleto.charAt(0).toUpperCase() + direccionCompleto.substring(1);
    console.log(resultado);
}

// Booleanos
function validarSalirDireccion() {
    const esPeligroso = false;

    const esDia = true;

    const voyDireccion = !esPeligroso && esDia;

    console.log(voyDireccion);
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

function comprarCarro() {
    const tengoDinero = true;
    const tengoCochera = false;
    const tengoLicencia = false;
    const comproCarro = tengoDinero && tengoCochera &&  !tengoLicencia;
    console.log(comproCarro);
}

function obtenerAlumno() {
    // clase Alumno
    const alumno1 = {
        nombre: 'ric',
        primerApellido: 'ros',
        segundoApellido: 'mald',
        edad: 35,
        fechaNacimiento: '01/11/1989',
        gastaCine: true,
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

function comprarCarro() {
    const carro1 = {
        marca: 'hyundai',
        modelo: 'elantra',
        placa: 'asi430',
        anyo: 2016,
        precio: 40000,
        mecanico: false,
    };
    const carro2 = {
        marca: 'toyota',
        modelo: 'yaris',
        placa: 'bdq568',
        anyo: 2018,
        precio: 30000,
        mecanico: true,
    };
    console.log(carro1);
    console.log(carro2);

    console.log(carro1.marca); 
    console.log(carro2['marca']);
    const datosCompleto1 = `${carro1.marca} ${carro1.modelo} ${carro1.placa}`;
    console.log(datosCompleto1);

    carro1.marca = 'lamborguini';
    console.log(carro1);

    delete carro1.precio;
    console.log(carro1);

    const carro3 = {
        marca: 'hyundai',
        modelo: 'elantra',
        categoria: 'seddan',
        añoFabricacion: 2016,
        fechaCompra: '28/09/2022',
        esNuevo: false,
        direccionDuenio: {
            calle: 'jr jose rufino',
            numero: '599',
            distrito: 'San juan de miraflores',
            provincia: 'Lima',
            departamento: 'Lima',
        },
        }
    console.log(carro3);
}

function obtenerObjeto () {
    const zapatilla1 = {
        color: 'verde',
        marca: 'nike',
        precio: '200 soles',
        procedencia: 'china',
        material: 'caucho',
        hacesudar: false,
    };

    const zapatilla2 = {
        color: 'blanco',
        marca: 'puma',
        precio: '150 soles',
        procedencia: 'EE.UU',
        material: 'lona',
        hacesudar: true,
     };
     console.log (zapatilla1, zapatilla2)

     const futbolista1 = {
        persona: {
            nombre: 'Cristiano',
            edad: 38,
            direccion: 'jose rufino',
        },
        equipo: 'Real Madrid',
        pais: 'España',
        sueldo: '2 soles',
        ganoBalon: true,
    };

    const futbolista2 = {
        persona: {
            nombre: 'Messi',
            edad: 40,
            direccion: 'san juan',
        },
        equipo: 'barcelona',
        pais: 'España',
        sueldo: '10 soles',
        ganoBalon: false,
       
     };
     console.log (futbolista1, futbolista2);

     const equipo1 = {
        nombre: 'Barcelona',
        pais: 'España',
        futbolista: futbolista1,
     };

     const equipo2 = {
        nombre: 'Real Madrid',
        pais: 'España',
        futbolista: {...futbolista2},
     };

     console.log (equipo1, equipo2);

     futbolista1.persona.nombre = 'roberto';

     futbolista2.persona.nombre = 'antonio';

     console.log (equipo1, equipo2);

     const futbolista3 = {
        edad: 34,
        signo: 'virgo',
     };
     
     const futbolista4 = {
        nombre: 'roberto',
        apellido: 'rosales',
     };

     const futbolista5 = {
        ...futbolista3,
        ...futbolista4
     };

     console.log(futbolista5);
}

// Arrays (listado o conjunto de cosas)
function obtenerArreglos() {
    const vacio = [];
    console.log(vacio);

    // Arrays de tipos primitivos
    const nombreAlumnos = ['Ricardo', 'Roberto', 'Vanessa']; // array de strings
    console.log(nombreAlumnos);

    const edadAlumnos = [11, 9, 15]; // array de numbers
    console.log(edadAlumnos);

    const gustaCineList = [true, false, true, true]; // array de booleanos
    console.log(gustaCineList);

     // operacion: agregar elementos al array
     nombreAlumnos.push('Pepito');
     edadAlumnos.push(12);
     gustaCineList.push(false);

     console.log(nombreAlumnos, edadAlumnos, gustaCineList);

     nombreAlumnos.unshift('Pepita');
     edadAlumnos.push(10);
     gustaCineList.push(true);

     console.log(nombreAlumnos, edadAlumnos, gustaCineList);

    //ejercicios

    const modelosAutos = ['123Mazda', '123Lamborgini', '123Nissan']; 
    console.log(modelosAutos);

    const anioFabricacion = [2018, 2024, 2023]; 
    console.log(anioFabricacion);
    
    const esAutomatico = [true, false, false, ]; 
    console.log(esAutomatico);

    //insertar

    modelosAutos.push('123hammer');
    anioFabricacion.push(2026);
    esAutomatico.push(true);

    console.log(nombreAlumnos, edadAlumnos, gustaCineList);

    modelosAutos.unshift('123elantra');
    anioFabricacion.unshift(2016);
    esAutomatico.unshift(false);

    
    console.log(modelosAutos, anioFabricacion, esAutomatico);

    // posicion de un elemento de un array
    console.log(nombreAlumnos[1]); // forma estatica
    console.log(nombreAlumnos[3]); // forma estatica
    console.log(nombreAlumnos[nombreAlumnos.length - 1]);  // ultima posicion  forma dinamica
    // array.length - 18

    console.log(modelosAutos[2]); 
    console.log(modelosAutos[1]); 
    console.log(modelosAutos[modelosAutos.length - 1]);  

    
    // modificacion
    nombreAlumnos[1] = 'Ric';
    nombreAlumnos[nombreAlumnos.length - 1] = 'Pep';
    console.log(nombreAlumnos);

    modelosAutos[1] = '123Fortuner';
    modelosAutos[modelosAutos.length - 1] = '123Escarabajo';
    console.log(modelosAutos);

    
    // eliminar
    nombreAlumnos.splice(1, 1);
    console.log(nombreAlumnos);

    modelosAutos.splice(3, 1);
    console.log(modelosAutos);

    
    const nombresFiltrados = nombreAlumnos.filter((nombre) => {
        return nombre !== 'Pepita';
    });
    console.log(nombresFiltrados);

    
    const autosFiltrados = modelosAutos.filter((auto) => {
        return auto !== 'Lamborgini';
    });
    console.log(autosFiltrados);

    const autosFiltrados2 = modelosAutos.filter((modelo) => {
        return modelo !== 'elantra';
    });
    console.log(autosFiltrados2);

    const autosFiltrados3 = modelosAutos.filter((modelo, index) => {
        return (index >2);
    });
    console.log(autosFiltrados3);

    
    // una funcion puede ejecutar internamente a otra funcion
    // la funcion puede devolver un valor usando el return
    // la funcion flecha reemplaza a la funcion tradicional en el filtrer, map
    // el filter necesita ejecutar una funcion, la funcion debe devolver con el return un valor boleano

    const nombresMapeados1 = nombreAlumnos.map((nombre) => {
        return nombre.replaceAll('OTRO:', '');
    });
    console.log(nombresMapeados1);

    const autosMapeados= modelosAutos.map((nombre) => {
        return nombre.replace('123', '');
    });
    console.log(autosMapeados);

    const nombreAlumnos2 = ['Ricardo', 'Roberto', 'Vanessa']; // array 
    const nombresMapeados2 = nombreAlumnos2.map((nombre) => {
        return nombre.toLowerCase();
    });
    console.log(nombreAlumnos2, nombresMapeados2);
    // identico
    // similar
    // diferente

    const modelosAutos1 = ['123Mazda', '123Lamborgini', '123Nissan']; 
    const autosMapeados1 = modelosAutos1.map((nombre) => {
        return nombre.replace('123', '');
    });
    console.log(modelosAutos1, autosMapeados1);

    const nombreAlumnos3 = ['Pepito', 'Carloncho', 'Jacinta'];
    // union (concatenación) de arrays
    const nombreAlumnosTotal = [
        ...nombreAlumnos2,
        ...nombreAlumnos3
    ];
    console.log(nombreAlumnosTotal);

    const modelosAutos3 = ['escarabajo', 'ferrari', 'honda'];

    const modelosAutosTotal = [
        ...modelosAutos1,
        ...modelosAutos3
    ];
    console.log(modelosAutosTotal);

    const edadAlumnos2 = [11, 9, 15, 20, 25, 18, 23, 30]; // array de numbers
    let sumaEdadesTotal = 0;
    edadAlumnos2.forEach((edad) => {
        sumaEdadesTotal = sumaEdadesTotal + edad;
    });
    console.log(sumaEdadesTotal);

    //ejercicio
 
    const costoAuto = [14000, 3000, 5500, 7000]; // array de numbers
    let sumaCostoTotal = 0;
    costoAuto.forEach((costo) => {
        sumaCostoTotal = sumaCostoTotal + costo;
    });
    console.log(sumaCostoTotal);
    
    const unioncostos = edadAlumnos2.join('-');
    console.log(unioncostos);

    const unionAutos = modelosAutos3.join(', ');
    console.log(unionAutos);

    
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

    //ejercicios

    const sonCarosAutos = costoAuto.every((costo) => {
        return costo >= 3000;
    });
    console.log(sonCarosAutos);

    const elCostoesSuperior = costoAuto.some((costo) => {
        return costo >= 5500;
    });
    console.log(elCostoesSuperior);

}

function obtenerArrayObjetos() {
    const vacio = [];
    console.log(vacio);
    const alumnos = [
        {nombre: 'Ric', apellidoPaterno: 'Ros', apellidoMaterno: 'Mal'},
        {nombre: 'Van', apellidoPaterno: 'Chi', apellidoMaterno: 'Isi'},
        {nombre: 'Rob', apellidoPaterno: 'Ros', apellidoMaterno: 'Mal'}
    ];
    console.log(alumnos);

    //EJERCICIO
    const jugadoresFutbol = [
        {nombre: '12-Messi12-', apellidoPaterno: 'Quispe', apellidoMaterno: 'Mamani', equipo: 'Barcelona'},
        {nombre: '12-Ronaldo12-', apellidoPaterno: 'Anacleto', apellidoMaterno: 'Anastacio', equipo: 'Alianza'},
        {nombre: '12-Claudio12-', apellidoPaterno: 'Pizarro', apellidoMaterno: 'Bayili', equipo: 'Cienciano'}
    ];
    console.log(jugadoresFutbol);

    jugadoresFutbol.push({nombre: '12-Pepe12-', apellidoPaterno: 'Pizarro', apellidoMaterno: 'Bayili', equipo: 'Portugal'});
    jugadoresFutbol.unshift({nombre: '12-Maradona12-', apellidoPaterno: 'Huaman', apellidoMaterno: 'Bayili', equipo: 'Argrntina'});

    // console.log(jugadoresFutbol);

    // console.log(jugadoresFutbol.length);

    // console.log(jugadoresFutbol.length);
    // console.log(jugadoresFutbol[0]);
    // console.log(jugadoresFutbol[1]);
    // console.log(jugadoresFutbol[jugadoresFutbol.length - 1]);

    // jugadoresFutbol[0].nombre= 'Chiquito Flores';
    // console.log(jugadoresFutbol);

    // jugadoresFutbol[4].nombre= {nombre: 'David', apellidoPaterno: 'Rosales', apellidoMaterno: 'Molina', equipo: 'Monte'};
    // console.log(jugadoresFutbol);

    // jugadoresFutbol.splice(jugadoresFutbol.length - 1, 1);
    // console.log(jugadoresFutbol);
    // const jugadoresFutbolFinal = jugadoresFutbol.filter((jugadores) => {
    //     return jugadores.nombre !== 'Ronaldo';
    // });
    // console.log(jugadoresFutbolFinal);

    const nombreJugadores = jugadoresFutbol.filter( (jugadores)=> {
        return jugadores.apellidoPaterno !== 'Pizarro';
    });

    console.log(nombreJugadores);

    // const alumnosCorregidos = alumnos.map((alumno) => {
    //     return {
    //         nombre: alumno.nombre.replace('OTRO:', ''),
    //         apellidoPaterno: alumno.apellidoPaterno,
    //         apellidoMaterno: alumno.apellidoMaterno,
    //         edad: alumno.edad,
    //     };
    // });
    // console.log(alumnosCorregidos);
    // const alumnosEdades = alumnos.map((alumno) => {
    //     return alumno.edad;
    // });
    // console.log(alumnosEdades);

    //Ejercicio

     const nombreJugadoresNuevo = nombreJugadores.map((jugador) => {
        return {
            nombre: jugador.nombre.replaceAll('12-', ''),
            apellidoPaterno: jugador.apellidoPaterno,
            apellidoMaterno: jugador.apellidoMaterno,
            equipo: jugador.equipo,
        };
    });
    console.log(nombreJugadoresNuevo);

    const jugadoresEquipo = nombreJugadores.map((jugador) => {
        return jugador.equipo;
    });
    console.log(jugadoresEquipo);

    const costoAuto = [8198, 9289, 2899,2989];

    const costoAuto5 = [
        {precio: 9289},
        {precio: 1234},
        {precio: 4321},
        {precio: 1349}
    ];

    let sumaCostoTotal = 0;
    costoAuto.forEach((costo) => {
        sumaCostoTotal = sumaCostoTotal + costo;
    });
    console.log(sumaCostoTotal);

    //ejercicios

      const sonTodosMenores = costoAuto5.every((costo) => {
        return costo.precio <= 1234;
    });
    console.log(sonTodosMenores);
    
    const hayalgunequipo = jugadoresFutbol.some((jugador) => {
        return jugador.equipo.toLowerCase() === 'alianza';
    });
    console.log(hayalgunequipo);

    
    const persona6 = jugadoresFutbol.find((jugadores) => {
        return jugadores.apellidoPaterno.includes('Pizarro');
    });
    console.log(persona6);

    // Array de objetos anidados
    const alumnos2 = [
        {
            nombre: 'OTRO:Ric',
            apellidoPaterno: 'Ros',
            apellidoMaterno: 'Mal',
            edad: 25,
            ubicacion: {
                direccion: 'Av. Tomas Valle 123',
                distrito: 'Olivos',
                provincia: 'Lima',
                departamento: 'Lima',
                pais: 'Peru'
            }
        },
        {nombre: 'OTRO:Van', apellidoPaterno: 'Chi', apellidoMaterno: 'Isi', edad: 20},
        {nombre: 'OTRO:Rob', apellidoPaterno: 'Ros', apellidoMaterno: 'Mal', edad: 26}
    ];    
    console.log(alumnos2);

    // Array de arrays
    const alumnosTodoPaises = [
        [
            {nombre: 'OTRO:Ric', apellidoPaterno: 'Ros', apellidoMaterno: 'Mal', edad: 25},
            {nombre: 'OTRO:Van', apellidoPaterno: 'Chi', apellidoMaterno: 'Isi', edad: 20},
            {nombre: 'OTRO:Rob', apellidoPaterno: 'Ros', apellidoMaterno: 'Mal', edad: 26}
        ],
        [            
            {nombre: 'OTRO:Ric2', apellidoPaterno: 'Ros', apellidoMaterno: 'Mal', edad: 25},
            {nombre: 'OTRO:Van2', apellidoPaterno: 'Chi', apellidoMaterno: 'Isi', edad: 20},
            {nombre: 'OTRO:Rob2', apellidoPaterno: 'Ros', apellidoMaterno: 'Mal', edad: 26}
        ],
        [            
            {nombre: 'OTRO:Ric3', apellidoPaterno: 'Ros', apellidoMaterno: 'Mal', edad: 25},
            {nombre: 'OTRO:Van3', apellidoPaterno: 'Chi', apellidoMaterno: 'Isi', edad: 20},
            {nombre: 'OTRO:Rob3', apellidoPaterno: 'Ros', apellidoMaterno: 'Mal', edad: 26}
        ]
    ];
}

function ejecutarCondicionIf() {
    const estaLloviendo = false ;
    if (estaLloviendo === true) {
        console.log('Si está lloviendo');
    }

//practica
   
    const tengoAuto = false;
    if (tengoAuto === true) {
        console.log('Si tengo auto');
    }
//practica2

    const serePolicia = false;
    if (serePolicia === true) {
        console.log('Si sere policia');
    } else {
        console.log('sere serenazgo');
    }

    const tengoPlay = false;
    const tengoNintendo = false;
    if (tengoPlay === true) {
        console.log('Voy a jugar play');
    } else if (tengoNintendo === true) {
        console.log('Voy a jugar nintendo');
    } else {
        console.log('Voy a jugar con la pelota');
    }

//ejercicios3

   const tengoFrio = true;
    const tengoCalor = true;
    if (tengoFrio === false) {
        console.log('Me pongo chompa');
    } else if (tengoCalor === false) {
        console.log('Voy a la playa');
    } else {
        console.log('salgo a la calle');
    }

    const tengoDinero2 = false;
    const estaAbiertoPolleria = false;
    if (tengoDinero2 === true && estaAbiertoPolleria === true) {
        console.log('Compro pollito a la brasa');
    } else {
        console.log('Preparo mi cena');
    }

    //ejercicio

    const voyDisparar = true;
    const siTengoBalas = false;
    if (voyDisparar === true && siTengoBalas === true) {
        console.log('al delincuente');
    } else {
        console.log('me voy a mi casa');
    }
// ejercicio 2
    const ireEntaxi = true;
    const ireEnMicro = false;
    if (ireEntaxi === true || ireEnMicro === true) {
        console.log('al Hospital');
    } else {
        console.log('me quedo en casa');
    }

      const tengoPelota = false;
    const voyParque = false;
    const tengoScuter = false;
    // if ((voyParque === true && tengoPelota === true) || (voyParque === true && tengoScuter === true)) {
    if (voyParque && (tengoPelota || tengoScuter)) { 
        console.log('juego en el parque');
    } else {
        console.log('me quedo en casa');
    }

    //ejercicio

    const sereDoctor = true;
    const voyUniversidad = false;
    const serePediatra = true;
    if (voyUniversidad && (sereDoctor || serePediatra)) { 
        console.log('ganare dinero');
    } else {
        console.log('estare misio');
    }

    
    var tengoTiempo = false;
    if (tengoTiempo) {
        console.log('Veo pelicula');
    } else {
        console.log('Realizar tarea');
    }
    // Operador ternario
    tengoTiempo ? console.log('Veo pelicula') : console.log('Realizar tarea');

}

function ejecutarCondicionSwitch() {
    const codigoPais = 'COL';
    
    switch (codigoPais) {
        case 'PE':
            console.log('Es de Peru');
            break;
        case 'COL':
            console.log('Es de Colombia');
            break;
        
        case 'AR':
            console.log('Es de Argentina');
            break;
        case 'ESP':
            console.log('Es de España');
            break;
        default:
            console.log('Es de un pais desconocido');
    }

    //practica

    const numeroCelular = 3333;
    
    switch (numeroCelular) {
        case 2468:
            console.log('Es de richar');
            break;
        case 8642:
            console.log('Es de rober');
            break;
        
        case 1111:
            console.log('Es de dani');
            break;

        default:
            console.log('Es de persona desconocido');
    }

}