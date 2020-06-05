const express = require('express');
const app = express();

let animales = [
    {
        nombre: 'Toby',
        edad: '3',
        tipo: 'perro'
    },
    {
        nombre: 'Moby',
        edad: 4,
        tipo: 'ballena'
    },
    {
        nombre: 'Moggi',
        edad: 10,
        tipo: 'gato'
    }

]

app.use(express.static('public'))

app.get('/', function (request, response) {
    let cadena = "";
    for (let i = 0; i < animales.length; i++) {
        cadena += `<p>Nombre: ${animales[i].nombre}</p>
     <p>Edad: ${animales[i].edad}</p><p>Tipo: ${animales[i].tipo}</p>`
    }
    response.send(cadena)
})

app.get('/sumar-animal', function (request, response) {
    let nombre = request.query.nombre;
    let edad = parseInt(request.query.edad);
    let tipo = request.query.tipo;
    let animalNuevo = {
        nombre: nombre,
        edad: edad,
        tipo: tipo
    }
    animales.push(animalNuevo);
    let cadena = "";
    for (let i = 0; i < animales.length; i++) {
        cadena += `<p>Nombre: ${animales[i].nombre}</p>
     <p>Edad: ${animales[i].edad}</p><p>Tipo: ${animales[i].tipo}</p>`
    }
    response.send(cadena)
})

app.get('/adoptar/:animal', function (request, response) {
    let animal = request.params.animal
    for (let i = 0; i < animales.length; i++) {
        if (animal === animales[i].nombre) {
            let animal1 = animales.slice(0, i);
            let animal2 = animales.slice(i + 1, animales.length);
            animales = animal1.concat(animal2)
            response.send(animales)
        }
    }
})

app.get('/adoptar', function (request, response) {
    let animal = request.params.animal
    for (let i = 0; i < animales.length; i++) {
        if (animal === animales[i].nombre) {
            let animal1 = animales.slice(0, i);
            let animal2 = animales.slice(i + 1, animales.length);
            animales = animal1.concat(animal2)
            response.send(animales)
        }
    }
})

app.listen(3000)