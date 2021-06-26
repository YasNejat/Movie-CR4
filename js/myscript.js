// JSON file 
let moviesData = JSON.parse(movies);
console.log(moviesData);
function addMovies(genre) {
  for (let movie = 0; movie < moviesData.length; movie++) {
    if (genre === "all") {
      var output = (document.getElementById("printMovies").innerHTML += `
    
  <div class="col">
  <div class="card mt-5 p-5">

   <div class="product-title text-light">${moviesData[movie].movieName}</div>
   <img src="${moviesData[movie].image}" alt="MoviesPhoto" class="img-fluid rounded-3 product-image mt-1" style="width:220px; height:120px; object-fit: cover;  object-position: 19%;">

   <div class="bar">

  <div class="filledbar row"><div><img src="https://img.icons8.com/color/48/000000/imdb.png"/><img class='px-1' src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>${moviesData[movie].rate} </div>Description:<span class="ownFontSize"> ${moviesData[movie].description}</span> Relesedate:<span class="ownFontSize"> ${moviesData[movie].releaseDate}</span></div> 
    
  </div>
   
  <div class="ownSize product-price mt-5">Price:${moviesData[movie].price}$</div>
  <a class="product-button"><p class="basket" width='30%';>Add to Cart</p></a>
  <div class="circle"> 
   <img onclick="updateStatus('likeBtn${movie}',${movie})" src="https://img.icons8.com/material-sharp/24/ffffff/facebook-like--v1.png"/>

  <button class="btn text-left buttonLike type="button buttonLike" id="likeBtn${movie}"> ${moviesData[movie].likes}</button>
  </div>
  </div>   
  </div>   
    
 
`);  

}       else if (genre === moviesData[movie].genre) {
      var output = (document.getElementById("printMovies").innerHTML += `

      <div class="col">
      <div class="card mt-5 p-5">
    
       <div class="product-title text-light">${moviesData[movie].movieName}</div>
       <img src="${moviesData[movie].image}" alt="MoviesPhoto" class="img-fluid rounded-3 product-image mt-1" style="width:220px; height:120px; object-fit: cover;  object-position: 19%;">
    
       <div class="bar">
    
      <div class="filledbar row"><div><img src="https://img.icons8.com/color/48/000000/imdb.png"/><img class='px-1' src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>${moviesData[movie].rate} </div>Description:<span class="ownFontSize"> ${moviesData[movie].description}</span> Relesedate:<span class="ownFontSize"> ${moviesData[movie].releaseDate}</span></div> 
        
      </div>
       
      <div class="ownSize product-price mt-5">Price:${moviesData[movie].price}$</div>
      <a class="product-button" mt-3><p class="basket" width='30%';>Add to Cart</p></a>
      <div class="circle"> 
       <img onclick="updateStatus('likeBtn${movie}',${movie})" src="https://img.icons8.com/material-sharp/24/ffffff/facebook-like--v1.png"/>
    
      <button class="btn text-left buttonLike type="button buttonLike" id="likeBtn${movie}"> ${moviesData[movie].likes}</button>
      </div>
      </div>   
      </div>   
    
    
 
`);

}
       
}       
documentReady();
       
}  
addMovies("all");
 






// -------------------------------------card details dynamic html

function rowCreate(title, price, picSrc) {
  let cartItems = document.getElementById("cart-items");
  let cartItemsNames = cartItems.getElementsByClassName("cart-item-title");
  let cartItemQtt = cartItems.getElementsByClassName("cart-quantity");
 
  for (let i = 0; i < cartItemsNames.length; i++) {

      if(cartItemsNames[i].innerText == title) {
      alert("This item already exists in your cart");
      
      let qtt = Number(cartItemQtt[i].innerHTML);
      cartItemQtt[i].innerHTML = qtt + 1;
      console.log(qtt);
      updateTotal();
     return;
      
    } 
  }

  let item = `
  <div class="cart-row row d-flex ">   
      <div class="cart-item col-6 my-3 ">
          <img class="cart-item-image" src="${picSrc}" width="100" height="100">
          <span class="cart-item-title h5 ">${title}</span>
      </div>
      
      <span class="cart-price col-3 h4 my-3"> ${price} $</span>
     
      <div class="cart-qtty-action col-3 d-flex">            
          <i class="minus fa fa-minus-circle my-auto" ></i>            
          <div class="cart-quantity p-4 h4">1</div>            
          <i class="plus fa fa-plus-circle my-auto"></i>         
          <button class="del btn btn-danger rounded-circle  my-auto ms-3 fw-bold" type="button"> X </button>            
      </div>
  </div>`;
  let cart = document.getElementById("cart-items");
  cart.innerHTML += item;
  documentReady();
}

// --------------------------uptadte price
function updateTotal() {
  let cart = document.getElementById("cart-items");
  let cartRows = cart.getElementsByClassName("cart-row");
  let total = 0; // it will be calculated from zero each time it is updated

  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let price = parseFloat(
      cartRow.getElementsByClassName("cart-price")[0].innerText.replace("€", "")
    ); //we need the first one
    let qtt = Number(
      cartRow.getElementsByClassName("cart-quantity")[0].innerText
    );
    console.log(price, qtt);
    total += price * qtt;
    console.log(total);
  }
  total = total.toFixed(2); //toFixed() will help rounding the number to 2 decimals
  let totalElement = document.getElementById("total").querySelector("#price");
  // console.log(total);
  totalElement.innerHTML = "€" + total;
}

// ---------------------------function plus
function plusQtt(e) {
  let itemPlus = e.target.parentElement;
  let qtt = Number(itemPlus.querySelector(".cart-quantity").innerHTML);
  itemPlus.querySelector(".cart-quantity").innerHTML = qtt + 1;
  console.log(qtt);
  updateTotal();
}
// ---------------------------function minus
function minusQtt(e) {
  let itemMinus = e.target.parentElement.parentElement;
  let qtt = Number(itemMinus.querySelector(".cart-quantity").innerHTML);
  if (qtt == 1) {
    console.log("There shouldn't be 0 products in the cart");
    delItem(e);
  } else {
    itemMinus.querySelector(".cart-quantity").innerHTML = qtt - 1;
    console.log(qtt);
    updateTotal();
  }
}

function delItem(e) {
  let delBtnAction = e.target.parentElement.parentElement.remove();
  updateTotal();
}

function purchase() {
  alert("Thank you for buying with us.");
  let cartItems = document.getElementById("cart-items");
  console.log(cartItems);
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  // cartItems.innerHTML = "";
  updateTotal();
}

function updateStatus(likebtnid, movie) {
  let nummberoflike = (moviesData[movie].likes = ++document.getElementById(
    likebtnid
  ).textContent);
  console.log(nummberoflike);
}
// sort categories
function filterMovies(genre) {
  removeMovies();
  addMovies(genre);
}

function removeMovies() {
  document.getElementById("printMovies").innerHTML = "";
}


function delItem(e) {
  let delBtnAction = e.target.parentElement.parentElement.remove();
  updateTotal();
}

function purchase() {
  alert("Thank you for buying with us.");
  let cartItems = document.getElementById("cart-items");
  console.log(cartItems);
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  // cartItems.innerHTML = "";
  updateTotal();
}

function documentReady() {
  let insertBtns = document.getElementsByClassName("product-button");
  for (let i = 0; i < insertBtns.length; i++) {
    let insertBtn = insertBtns[i];
    insertBtn.addEventListener("click", addItem);
  }

  let plusBtns = document.getElementsByClassName("plus");
  for (let i = 0; i < plusBtns.length; i++) {
    let plusBtn = plusBtns[i];
    plusBtn.addEventListener("click", plusQtt);
  }

  let minusBtns = document.getElementsByClassName("minus");
  for (let i = 0; i < minusBtns.length; i++) {
    let minusBtn = minusBtns[i];
    minusBtn.addEventListener("click", minusQtt);
  }
  let delItemBtns = document.getElementsByClassName("del");
  for (let i = 0; i < delItemBtns.length; i++) {
    let delBtn = delItemBtns[i];
    delBtn.addEventListener("click", delItem);
  }

  let btnPurchase = document.getElementById("btn-purchase");
  btnPurchase.addEventListener("click", purchase);
}
documentReady();

function addItem(e) {
  let item = e.target.parentElement.parentElement.parentElement;
  // console.log(item);

  let title = item.querySelector(".product-title").innerText;
  let price = item
    .querySelector(".product-price")
    .innerText.replace("$", "")
    .replace("Price:", "");
    // click changing the text
    let click= item.querySelector("a").innerText='In Cart';
      // Rent button
    let changeTextNav=document.querySelector(".btnModal").innerText='Check out';
    let picSrc = item.querySelector(".product-image").src;
  // console.log(title, price, picSrc);

    rowCreate(title, price, picSrc);
  updateTotal();
}
 



