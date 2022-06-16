const menu = document.querySelector(".menu")
const closeMenu = document.querySelector(".close-menu")
const leftNavbar = document.querySelector(".left-navbar")

const slides = document.querySelectorAll(".carousel-item")
const previous = document.getElementById("previous")
const next = document.getElementById("next")

// Navbar
menu.addEventListener("click", () => {
  leftNavbar.classList.add("show")
})

closeMenu.addEventListener("click", () => {
  leftNavbar.classList.remove("show")
})

// Carousel
function removeSlides() {
  slides.forEach((slide) => {
    slide.style.display = "none"
  })
}

let startPostion = 0
let slide = slides.length

function slideMoveNext() {
  removeSlides()
  if (startPostion === slide - 1) {
    startPostion = 0
  } else {
    startPostion = startPostion + 1
  }
  slides[startPostion].style.display = "block"
}

function slideMovePrev() {
  removeSlides()
  if (startPostion === 0) {
    startPostion = 3
  } else {
    startPostion = startPostion - 1
  }
  slides[startPostion].style.display = "block"
}

next.addEventListener("click", slideMoveNext)
previous.addEventListener("click", slideMovePrev)

// cart update

const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const updateCount = document.querySelector(".total-count")
const plusMius = document.querySelector(".count-plus-minus")
const addToCart = document.querySelector(".cart-btn")
const cartUpdated = document.querySelector(".cart-updated")
const cartUpdate = document.querySelector(".cart-update")
const cart = document.querySelector(".cart")

let count = 0

function addItem() {
  count = count + 1
  update()
}

function reduceItem() {
  if (count === 0) return 0
  count = count - 1
  update()
}

function update() {
  plusMius.textContent = count
  // calculation()
}

function calculation() {
  updateCount.textContent = count
}

function removeItem() {
  count = 0
  cartUpdated.innerHTML = `
  <p class="empty">Your cart is empty.</p> `
  update()
  calculation()
}

function updateCart() {
  calculation()
  if (count === 0) return
  cartUpdated.innerHTML = `
                <div class="top-cart">
                  <img class="thumbnail" src="./images/image-product-1-thumbnail.jpg" alt="">
                  <div class="product-amount-update">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$125.00 x ${count} 
                    <span class="highlight">$${125.0 * count}.00</span> 
                  </div>
                  <div id="remove"> <i class="bi bi-trash"></i>  </div>
                </div>
                <button class="checkout">Checkout</button>
  
                
  `
  const removeCart = document.getElementById("remove")
  removeCart.addEventListener("click", removeItem)
}

plus.addEventListener("click", addItem)
minus.addEventListener("click", reduceItem)

cart.addEventListener("click", () => {
  cartUpdate.style.display = "block"
})

addToCart.addEventListener("click", updateCart)
