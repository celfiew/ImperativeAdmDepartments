// Consignas
// Como primer paso necesitarás requerir él módulo lecturaEscritura y asignarlo a una variable para poder utilizar sus 
// funcionalidades, además de hacer la lectura del archivo departamentos.json, en detalle:
// Requerir módulo lecturaEscritura y asignarlo a una variable llamada por ejemplo archivos, esta contendrá los métodos 
// del módulo requerido de ahora en más
// Leer él archivo departamentos.json utilizando la variable archivos creada anteriormente con él método adecuado y 
// asignar a una variable llamada arrayDepartamentos
// Comprobar los pasos anteriores imprimiendo la variable arrayDepartamentos. ejemplo : console.log(arrayDepartamentos)


// console.log(arrayDepartamentos);

// Crear un objeto literal, que podemos llamar inmobiliaria, será nuestra representación de la inmobiliaria 
// (valga la redundancia) con su datos (propiedades) y sus funcionalidades (métodos).

let archivos = require("./lecturaEscritura");

let arrayDepartamentos = archivos.leerJson("departamentos");

let inmobiliaria = {
    departamentos: arrayDepartamentos,

    listarDepartamentos:function (array) {
        array.forEach(
             elemento => { 
                 let disponible = elemento.disponible ? "Disponible" : "Alquilado"
                 console.log(`id: ${elemento.id}, precio $ ${elemento.precioAlquiler}, ${disponible}, ${elemento.ambientes} ambientes`) } )
    },

    buscarPorId:function (id) {
        let departamentoBuscado = this.departamentos.find((elemento) => elemento.id === id )
        return departamentoBuscado
    },

    departamentosNoDisponibles: function(array){
        let depNoDisponibles = array.filter(elemento => elemento.disponible === false)
        return depNoDisponibles
    },
    departamentosDisponibles: function(array){
        let depNoDisponibles = array.filter(elemento => elemento.disponible === true)
        return depNoDisponibles
    },

    filtrarPorAmbientes: function(cantidadAmbientes){
        let ambientes = this.departamentos.filter(elemento => elemento.ambientes >= cantidadAmbientes)
        return depNoDisponibles
    },

    filtrarPorPrecio: function(precio){
        let precios = this.departamentos.filter(elemento => elemento.precios <= precio)
        return depNoDisponibles
    },

};

// B
inmobiliaria.listarDepartamentos(arrayDepartamentos);

//C 
console.log(inmobiliaria.buscarPorId(1));

//D

console.table(inmobiliaria.departamentosNoDisponibles(arrayDepartamentos));

//E 
console.table(inmobiliaria.departamentosDisponibles(arrayDepartamentos));


//F

// Agregar un método filtrarPorAmbientes que permite filtrar departamentos, siempre y cuando su propiedad ambientes sea 
// mayor o igual a una cantidad enviada como argumento.
// Este método recibirá por parámetro un number que represente la cantidad de  ambientes mínimo.
// Este método devolverá un array con todos los departamentos que cumplan con la condición mencionada.
// En caso de no encontrar ningún departamento que cumpla con la condición, devolverá un array vacío.



// Agregar un método departamentosDisponibles que permite filtrar departamentos cuando su propiedad disponible sea igual a 
// true.
// Este método devolverá un array con todos los departamentos que cumplan la condición mencionada
// en caso de no encontrar ningún	 que cumpla con la condición, devolverá un array vacío