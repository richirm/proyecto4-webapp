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

}