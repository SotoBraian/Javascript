// menu hamburguesa
document.querySelector(".menu-hamburguesa").addEventListener("click", animacionNav)
let span1 = document.querySelector(".span-1")
let span2 = document.querySelector(".span-2")
let span3 = document.querySelector(".span-3")

function animacionNav (){
     span1.classList.toggle("js-span-1")
     span2.classList.toggle("js-span-2")
     span3.classList.toggle("js-span-3")
}


// // creando un objeto
// class Bebida{
//     constructor(nombre,precio, img){
//         this.nombre = nombre.toUpperCase()
//         this.precio = precio
//         this.id = id
//         this.img = img
//     }
// }



// creando un array
 const bar = [
     {id: 1, nombre: "Whisky Sour", precio: 800,img: `img/whisky-sour.avif`},
     {id: 2, nombre: "Mojito", precio: 850, img: `img/mojito.jpg`},
     {id: 3, nombre: "Manhattan", precio: 900, img:`img/manhattan.jpg`},
     {id: 4, nombre: "Espresso Martini", precio: 950, img:`img/espresso-Martini.jpg`},
     {id: 5, nombre: "Aperol Spritz", precio: 950, img:`img/aperol-Spritz.jpg`},
     {id: 6, nombre: "Daiquiri", precio: 800, img:`img/daiquiri.jpg`},
     {id: 7, nombre: "Margarita", precio: 870, img:`img/margarita.jpg`},
    {id: 8, nombre: "Dry Martini", precio: 1000, img:`img/dry-martini.jpg`},
     {id: 9, nombre: "Old Fashioned", precio: 1050, img:`img/old-Fashioned.jpg`},
]

// accedo al dom

let contenedorTragos = document.getElementById(`contenedor-tragos`)
let contenedorTragitos = document.getElementById(`carrito`)

// funcion de orden superior


function productos(){
     bar.forEach(elemento =>{
          // creo un elemento
          let el = document.createElement(`div`)
          el.className = `contenedor-imagenes-tragos`
          el.innerHTML = `<div class="contenedor-tragos">
                              <p class="nombre-trago">${elemento.nombre}</p>
                              <img src=${elemento.img} alt="" class="tragos">
                              <button class="boton-trago" id="boton ${elemento.id}">agregar al carrito</button>
                         </div>`
          contenedorTragos.appendChild(el)
          
          // Toastify
          let botonComprar = document.getElementById(`boton ${elemento.id}`)
          botonComprar.onclick = ()=>{
               funcionCarrito(elemento.id)
               Toastify({
               text: `Agregaste ${elemento.nombre} al carrito`,
               position: 'center',
               backgroundColor: "peru",
               }).showToast()
          } 
     })
}

productos()

const carrito = JSON.parse(localStorage.getItem("seleccionDeTrago")) ||[]

function funcionCarrito(id){
    
     let seleccionDeTrago = bar.find(producto => producto.id == id)
     carrito.push(seleccionDeTrago)
     console.log(carrito)
     mostrar()
}
const mostrar = () =>{
     contenedorTragitos.innerHTML = ""
     
     carrito.forEach((prod) => {
          const div = document.createElement(`div`)
          div.className = (`carrito`)
          div.innerHTML = `<p>${prod.nombre}</p>
          <p>$ ${prod.precio}</p>
          <button id="eliminar" onclick=eliminarDelCarrito(${prod.id})> eliminar </button>`
          contenedorTragitos.appendChild(div)
          localStorage.setItem("productos", JSON.stringify(carrito))
     })
}
const eliminarDelCarrito = (id) =>{
     const item = carrito.find((prod) => prod.id == id)
     const indice = carrito.indexOf(item)
     carrito.splice(indice,1)
     mostrar()
}

// precio total
/*function calcularTotal() {
     let carrito = JSON.parse(localStorage.getItem("seleccionDeTrago")) || []
     const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
     alert(`el precio total es ${total}`)
     console.log(total)
}
*/


// metodo fetch
// const botonN2 = document.querySelector(`#metodo-fetch`)
// const contenedor = document.querySelector(`#algo`)

// const obtenerDatos = ()=>{
//      fetch("./js/data.json")
//           .then(response => response.json())
//           .then(result => {
//                datos = result
//                datos.forEach( descripcion =>{
//                     contenedor.innerHTML += `<h3>${descripcion.nombre}</h3>
//                                               <p>${descripcion.descripcion}</p>`
//                })
//           console.log(obtenerDatos)
//           })
// }
// botonN2.onclick=()=>{
//      obtenerDatos()
//      console.log(datos)
// }

// const datosFetch = async() => await (await fetch(`./data.json`)).json()
// botonN2.onclick = async() =>{
//      let resultado = await datosFetch()
//      console.log(resultado)
// }




// metodo fetch intento 2

// const bar = []

// fetch("./js/data.json")
//     .then(response=> response.json())
//     .then(result => {
//         let datos = result
//         bar.push(...datos)
//      productos()
        
// })
// console.log(bar)
