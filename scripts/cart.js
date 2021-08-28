 let arr2 = [];
 var cartitems;

function showmenu() {
 
  localStorage.setItem("products", JSON.stringify(products));

  let data = JSON.parse(localStorage.getItem("products"));
  

  let menu = document.getElementById("menu");
  let r1 = document.getElementById("r1");
  let r2 = document.getElementById("r2");
  let r3 = document.getElementById("r3");
  let r4 = document.getElementById("r4");

}






function cartnos() {
  let itemsinCart = JSON.parse(localStorage.getItem("productsInCart"))

  if (itemsinCart != null) {
        redd.style.display = "block";
    document.querySelector("#redd").textContent = itemsinCart.length;
  }
  console.log("triggered")
}
cartnos()

function totalcost() {
 
  let cartcost = parseInt(localStorage.getItem("totalcost"));
  let itemsinCart = JSON.parse(localStorage.getItem("productsInCart"))

  if (itemsinCart == null) {
    localStorage.setItem("totalcost", 0)
  }
  else {
    let total = 0;

    for (let j = 0; j < itemsinCart.length; j++) {
      total += Number(itemsinCart[j].index*itemsinCart[j].price);
      console.log('total:', total)
    }
    localStorage.setItem("totalcost", total)
  }
  
}

totalcost()



function displaycart() {
let cartitem = localStorage.getItem("productsInCart") 
  cartitems = JSON.parse(cartitem);
arr2.push(cartitems);

 

    let productcontainer = document.querySelector(".products");
  let cartcost = localStorage.getItem("totalcost");
   
  let count = 10;
    if (cartitems && productcontainer) {
        productcontainer.innerHTML = `<div class= 'line'>
                <div><h2> My cart</h2></div> <div> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" > <label >Deliver to</label> <input  /></div> 
          </div><hr></hr>`;
        Object.values(cartitems).map(item => {
            productcontainer.innerHTML +=
                `
                <div id="tab">
      
                <div class="product">
                <div><img class="pic" src= "${item.image}" /></div>
                <div class="group">

                <div>Product:<h2> ${item.name}</h2></div>
                <div> <img class="assured" style="width: 60px; height: 20px" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" /></div>
                 <div class="price"><div>₹${item.price}</div> &nbsp  &nbsp<div>17% Off 2 offers applied</div>
                 <div style="color: gray">Seller: Retailnet</div> <div style="color: black">${count} Day Return Policy</div> <div style="color: black">Cash On Delivery Available</div>
                 <button class="dlt" onclick="removit(${item.pid})">Remove Item</button>
                 </div>
                </div><div>Delivery by Thu Jul 29 | Free</div> </div> 
              <div>
              
              
              
              <div id="abc">
                  <div style="display: flex;flex-direction: row;margin-left: -90px;">
                  <h4>Quantity:</h4>
                    <div style="width: 20px; margin-top:10px"><span>${item.index}</span></div>
                
                  </div>
       
            
            </div></div><hr>
</div>
  </div>
`
          count = count + 2;
        });
      productcontainer.innerHTML += `<div class="baskettotalcontainer">  <h2 class="baskettotal">Basket Total &nbsp ₹${cartcost}</h2>
         <div class="cont4"><button id="done" onclick="pay()">PLACE ORDER</button></div>
        </div>`
            ;

    }

}
//delete itm

function pay() {
  let done = document.getElementById("done");
  window.location.href = "checkout.html";
}

// remove itm
let amol = document.getElementById("redd");
amol.addEventListener("onclick", displaycart());


function removit(pid) {
   
  let updatedCart = [];
   let prod = JSON.parse(localStorage.getItem("productsInCart"));
    for (var k in prod) {
     
      if (prod[k].pid != pid) {
        updatedCart.push(prod[k])
      }

    }
        
    localStorage.setItem("productsInCart",JSON.stringify(updatedCart));

    totalcost();
    displaycart();
  cartnos();
  window.location.reload();
  }

function goindex() {
    window.location.href = "index.html";
  }


