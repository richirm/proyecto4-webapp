function executarFuncion1() {
  console.log(11111);
  console.log(22222);
}

function nadarEnMar() {
  console.log('Nadar en el mar');
}

function saltarGato() {
  console.log('Salta gato');
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

function sumarCostos() {
  const costoPerro = 80;
  const costoGato = 50;

  const resultado = costoPerro + costoGato;
  console.log(resultado);
}

function calcularGanancia() {
  const valorVenta = 250;
  const costoInsumos = 70;

  const resultado = valorVenta - costoInsumos;
  console.log(resultado);
}

function costoTotalPolloBrasa() {
  const cantidadPollo = 100;
  const precioPollo = 9;

  const resultado = cantidadPollo * precioPollo;
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

function calcularDireccionCompleta() {
  const nombreAvenida = 'chinchaysuyo';
  const distrito = 'Independencia';
  const provincia = 'Lima';

  const resultado1 = nombreAvenida + ' ' + distrito + ' ' + provincia; // concatenacion
  const resultado2 = `${nombreAvenida} ${distrito} ${provincia}`; // string templates
  const resultado3 = ''.concat(nombreAvenida, ' ', distrito, ' ', provincia); // operador concat

  console.log('operador +:', resultado1);
  console.log('string templates:', resultado2);
  console.log('operador concat:', resultado3);
}

// Calcular la direccion completa: nombre avenida, distrito, provincia

function calcularLongitudNombre() {
  const nombreCompleto = 'Abdón Chipana Allauca';
  const resultado = nombreCompleto.length;
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
function convertirDirreccionCompleta() {
  const nombreCompleto = 'Pacaritambo 193 tahuantisuyo';
  const resultado1 = nombreCompleto.toUpperCase();
  const resultado2 = nombreCompleto.toLowerCase();
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

// Validar comienzo o fin de string
function validarDireccion() {
  const nombreCompleto = 'jr pacaritambo 193';
  const resultado1 = nombreCompleto.startsWith('j');
  const resultado2 = nombreCompleto.endsWith('13');
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
  const salgoCalle = !estaLloviendo && tengoDinero;
  console.log(salgoCalle);
}
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
function comprarMuñecos() {
  const ventaMuñecas = true;
  const saleVentas = false;
  const comproMuñecas = (ventaMuñecas) && saleVentas;
  console.log(comproMuñecas);
  // true || true => true
  // true || false => true
  // false || true => true
  // false || false => false
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
  const alumno4 = { ...alumno1 }; // spread operator
  console.log(alumno4);
  alumno1.nombre = 'ricardo';
  console.log(alumno4);
  console.log(alumno3);
}
function obtenerMenu() {
  // menu
  const menu1 = {
    comida: 'tallarines',
    primerMenu: 'pollo',
    segundoMenu: 'carne',
    precio: 15,
    aprobado: true,
  };
  const menu2 = {
    comida: 'estofado',
    primerMenu: 'pollo',
    segundoMenu: 'carne',
    precio: 12,
    aprobado: false,
  };
  console.log(menu1);
  console.log(menu2);

  console.log(menu1.precio); // acceso estatico al atributo
  console.log(menu1['precio']); // acceso dinamico al atributo
  const menuPrecio1 = `${menu1.comida} ${menu1.primerMenu} ${menu1.segundoMenu}`;
  console.log(menuPrecio1);

  // Modificar atributo
  menu1.primerMenu = 'arroz';
  console.log(menu1);
  // Eliminar atributo
  delete menu1.otro;
  console.log(menu1);
}

function obtenerAlumno() {
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

function obtenerComida() {

  const plato1 = {
    nombre: 'escabeche',
    presa: 'pollo',
    legumbre: 'camote',
    costo: 20,
    presa: 'pescado',
    direccionRestaurante: {
      calle: 'Jr. Pacaritambo',
      numero: '193',
      distrito: 'Independencia',
      provincia: 'Lima',
      departamento: 'Lima'
    },
  }

  const plato2 = {
    nombre: 'estofado',
    presa: 'pollo',
    legumbre: 'papa',
    costo: 20,
    direccionRestaurante: {
      calle: 'Jr. inca roca',
      numero: '178',
      distrito: 'Independencia',
      provincia: 'Lima',
      departamento: 'Lima'
    },
  }
  console.log(plato2);

}

function obtenerObjetos() {
  const munieca1 = {
    nombre: 'Patatina',
    marca: 'Furga',
    fechaCreacion: '1970-02-01',
    altura: '25cm',
    pais: 'Italia',
    material: 'celuloide',
  };
  const munieca2 = {
    nombre: 'Pepito',
    marca: 'Basa',
    fechaCreacion: '1950-10-01',
    altura: '45cm',
    pais: 'Americano',
    material: 'jebe',
  };

  console.log(munieca1, munieca2);

  const casa1 = {
    estadoLegal: 'propio',
    fechaCreacion: '1980-04-05',
    numPuertas: 8,
    ubicacion: {
      ditrito: 'independencia',
      urbanizacion: 'tahuantinsuyo',
      direccion: 'paucartambo 154',
      pais: 'Perú',
      capital: 'Lima'
    },
    material: 'ladrillo',
  };

  const casa2 = {
    estadoLegal: 'litigio',
    fechaCreacion: '1960-04-05',
    numPuertas: 9,
    ubicacion: {
      ditrito: 'los olivos',
      urbanizacion: ' las palmeras',
      direccion: 'cruce 20',
      pais: 'Perú',
      capital: 'Lima',
    },
    material: 'rustico',
  };
  console.log(casa1, casa2)
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

       // posicion de un elemento de un array
    console.log(nombreAlumnos[1]); // forma estatica
    console.log(nombreAlumnos[3]); // forma estatica
    console.log(nombreAlumnos[nombreAlumnos.length - 1]);  // ultima posicion  forma dinamica
    // array.length - 18

       // modificacion
    nombreAlumnos[1] = 'Ric';
    nombreAlumnos[nombreAlumnos.length - 1] = 'Pep';
    console.log(nombreAlumnos);

    // eliminar
    nombreAlumnos.splice(1, 1);
    console.log(nombreAlumnos);

    const nombresFiltrados = nombreAlumnos.filter((nombre) => {
    return nombre !== 'Pepita';
    });
    console.log(nombresFiltrados);

    const edadAlumnos2 = [11, 9, 15, 20, 25, 18, 23, 30]; // array de numbers
    let sumaEdadesTotal = 0;
    edadAlumnos2.forEach((edad) => {
        sumaEdadesTotal = sumaEdadesTotal + edad;
    });
    console.log(sumaEdadesTotal);

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

function obtenerRegalos() {
  const vacio = [];
    console.log(vacio);
    // Arrays de tipos primitivos
    const nombreRegalos = ['pelota', 'blusa', 'libro']; // array de strings
    console.log(nombreRegalos);
    const costoRegalos = [20, 49, 35]; // array de numbers
    console.log(costoRegalos);
    const gustaRegalos = [true, false, true]; // array de booleanos
    console.log(gustaRegalos);

     // operacion: agregar elementos al array
    nombreRegalos.push('pulsera');
    costoRegalos.push(17);
    gustaRegalos.push(true);
    console.log(nombreRegalos, costoRegalos, gustaRegalos);
    nombreRegalos.unshift('peluche');
    costoRegalos.unshift(8);
    gustaRegalos.unshift(false);
    console.log(nombreRegalos, costoRegalos, gustaRegalos);

    console.log(nombreRegalos[1]);
    console.log(nombreRegalos[3]);
    console.log(nombreRegalos[nombreRegalos.length - 1]);

    nombreRegalos[1] = 'cartera';
    nombreRegalos[nombreRegalos.length - 1] = 'bufanda';
    console.log(nombreRegalos);

    // eliminar
    nombreRegalos.splice(2, 1);
    console.log(nombreRegalos);

    const nombresFiltrados = nombreRegalos.filter((nombre) => {
      return nombre !== 'pelota';
    });
    console.log(nombresFiltrados);


    const nombresFiltrados2 = nombreRegalos.filter((nombre, index) => {
        return nombre !== 0;
    });

    console.log(nombresFiltrados2);

    const nombreRegalos2 = ['pelota', 'blusa', 'libro'];
    const nombresMapeados1 = nombreRegalos2.map((nombre) => {
        return true;
    });
    console.log(nombreRegalos2, nombresMapeados1);

    //identico
    //similar
    //diferente

    const nombreRegalos3 = ['carrito', 'tren', 'celular'];

    //unión (contenación) de array
    const nombreRegalosAcumulado = [
        ...nombreRegalos2,
        ...nombreRegalos3
    ];
    console.log(nombreRegalosAcumulado);

    //reto

    const costoRegalos4 = [11, 9, 15, 20, 25, 18, 23, 30]; // array de numbers
    let costoRegalosTotal = 0;
    costoRegalos4.forEach((precio) => {
        costoRegalosTotal = costoRegalosTotal + precio;
    });
    console.log(costoRegalosTotal);

    const unionRegalos = nombreRegalos2.join(', ');
    console.log(unionRegalos);

     // every : todos
    const costoRegalosCostoso = costoRegalos.every((precio) => {
        return precio >= 20;
    });
    console.log(costoRegalosCostoso);
    // some : alguno
    const hayRegalosCostoso = costoRegalos.some((precio) => {
        return precio >= 49;
    });
    console.log(hayRegalosCostoso);

  }
