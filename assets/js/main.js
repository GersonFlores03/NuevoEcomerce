const btnTheme = document.getElementById("theme-sun")
const body = document.body
const CartOpen = document.getElementById("menu")
const CartClose = document.getElementById("Cart-Close")
const CartContenedor = document.getElementById("Cart-conteiner")
const ProductsOpen = document.getElementById("Card-btn")
const ProductsClose = document.getElementById("Products-Close")
const ProductsContenedor = document.getElementById("Products-conteiner")



const cambiarDeColor = () =>{
      if(btnTheme.classList.contains("bx-sun")){
          btnTheme.classList.replace("bx-sun" , "bx-moon")
      }else{
           btnTheme.classList.replace("bx-moon" , "bx-sun")
      }
      body.classList.toggle("dark")
}

btnTheme.addEventListener("click" , () => cambiarDeColor())
CartOpen.addEventListener("click", () => CartContenedor.classList.remove("hide"))
CartClose.addEventListener("click",()=> CartContenedor.classList.add("hide"))


ProductsOpen.addEventListener("click", () => ProductsContenedor.classList.remove("white"))
ProductsClose.addEventListener("click", () => ProductsContenedor.classList.add("white"))


const loadComponente = () => {
    const loading = document.getElementById("loader")





    setTimeout(() => {
        console.log("hola")
        loading.classList.add("clean")
    }, 3000)
}


document.addEventListener("DOMContentLoaded", ( )=> {
      loadComponente()
})

