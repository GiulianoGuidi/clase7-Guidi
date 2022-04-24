class producto{
    constructor(nombre, categoria, precio){
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
    }
    
}


const producto1 = new producto('pan de campo', 'salado', 410)
const producto2 = new producto('pan multicereal', 'salado', 450)
const producto3 = new producto('pan de centeno', 'salado', 500)
const producto4 = new producto('chipa', 'salado', 550)
const producto5 = new producto('medialuna', 'dulce', 110)
const producto6 = new producto('croissant', 'dulce', 200)
const producto7 = new producto('alfajor de maicena', 'dulce', 280)
const producto8 = new producto('porción de torta', 'dulce', 650)
const producto9 = new producto('pizza mozzarella', 'pizza', 950)
const producto10 = new producto('pizza  4 quesos', 'pizza', 1200)
const producto11 = new producto('pizza fugaza', 'pizza', 1100)
const producto12 = new producto('pizza margarita', 'pizza', 1100)


let menu = []

menu.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12)

let ingreso =prompt('Hola!, ingresá la categoría de productos que querés ver').toLowerCase()

if(ingreso == 'salado'){
console.log(menu.filter((producto) =>producto.categoria == 'salado' ))
}else if(ingreso == 'dulce'){
    console.log(menu.filter((producto) =>producto.categoria == 'dulce' ))
}else if(ingreso == 'pizza'){
    console.log(menu.filter((producto) => producto.categoria == 'pizza'))
}else{
    alert('No existe esa categoría en Bruto')
}


let eleccion = prompt('¿Querés seleccionar algún producto?').toLowerCase()

if(eleccion == 'si'){
detalle = prompt('Escriba el producto que quiere ver detallado').toLowerCase()
console.log(menu.find((producto) => producto.nombre == detalle))
}else{
    alert('Gracias por su visita')

}



