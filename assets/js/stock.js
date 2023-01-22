const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 1
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 1
    },
    {
      id: 3,
      name: 'Sweats',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 1
    },
    
   
   

  ]


   const ContenedorProductosG= document.getElementById("Productos-del-Carrito")
   const CosumirCarrito = document.getElementById("Consumir")
   const vaciarCarro = document.getElementById("Vaciar-carrito")
   const ContadordeProductos = document.getElementById("Counter")
   const precioTotal = document.getElementById("Monto-Precio")
   const contenedorCarritoComprado = document.getElementById("carrito-comprado")
   
   
   let carrito = []


   document.addEventListener("DOMContentLoaded" ,() =>{
        if(localStorage.getItem(`carrito`)){
             carrito = JSON.parse(localStorage.getItem(`carrito`))
             ActualizarCarrito()
        }
   })



vaciarCarro.addEventListener("click",()=>{
       carrito.length=0
       ActualizarCarrito()
})
        

        items.forEach(producto => {
        const DivContenedor = document.createElement("div")
        DivContenedor.classList.add("Productos-Carrito")
        DivContenedor.innerHTML= `
        
        <img class="img-Product" src=" ${producto.image} " alt="" />
        <div class="Productos-Detalles">
          <h4>$${producto.price}.00 <br> ${producto.name}  </h4>
          <p class="Barrita">|</p>
          <h4> Stock </h4>
          <button class="Buton" id="agregar${producto.id}" >  <i class='bx bx-plus'></i> </button>
        </div>
        
        
        `
        ContenedorProductosG.appendChild(DivContenedor)
        
        const botonS = document.getElementById(`agregar${producto.id}`)

        botonS.addEventListener("click", ()=>{
           agregarAlCarrito(producto.id)
        })

        
     })
  

 


   function agregarAlCarrito(produid){
     
           const exite = carrito.some (prod => prod.id === produid)
            if(exite){
                     const produ =carrito.map(prods => {
                      if(prods.id=== produid){
                          prods.quantity++
                      }
                })
            }else{


              const products = items.find(product => product.id=== produid)
              carrito.push(products)
              console.log(carrito)
            }

        
           ActualizarCarrito();
         
   }

    function eliminarDelCarrito(prodts){
        const item = carrito.find(produs => produs.id === prodts)
        const indice = carrito.indexOf(item)
        carrito.splice(indice,1)
        ActualizarCarrito()
        console.log(eliminarDelCarrito)
   }



   function ActualizarCarrito(){
            
           
              CosumirCarrito.innerHTML = ""
     
              carrito.forEach(produs =>{
              const Conteiner = document.createElement("div")
              Conteiner.classList.add("ProductosCarrito")
              Conteiner.innerHTML= `
              
              <img class="imgPrimero"  src=${produs.image} alt= ""> 
              <div class = "texto"> 
              <p class ="title">${produs.name} </p>
              <h5>Precio: $${produs.price}.00 </h5>
              <h5>Cantidad : <span id="Cantidad">${produs.quantity} </span></h5>
              <button onclick="eliminarDelCarrito(${produs.id})"  class="Boton-eliminar" ><i class='bx bx-trash'></i></button>
              </div>
       
              
              `
              CosumirCarrito.appendChild(Conteiner)

              localStorage.setItem(`carrito` ,JSON.stringify(carrito))
       
            })
            
            ContadordeProductos.innerHTML=carrito.length
            precioTotal.innerHTML= carrito.reduce((acc,prod) => acc+  (prod.price * prod.quantity) ,0)

   }



  

  

