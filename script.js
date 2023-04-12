var items = [
  {
    name: "Apple",
    quantity: 1,
    unitPrice: 550,
    totalPrice: 550,
    like: false,
    colorIcon: "gray",
  },
  {
    name: "Orange",
    quantity: 1,
    unitPrice: 200,
    totalPrice: 200,
    like: false,
    colorIcon: "gray",
  },
  {
    name: "Milk",
    quantity: 1,
    unitPrice: 25,
    totalPrice: 25,
    like: false,
    colorIcon: "gray",
  },
  {
    name: "Water",
    quantity: 1,
    unitPrice: 35,
    totalPrice: 35,
    like: false,
    colorIcon: "gray",
  },
  {
    name: "cofee",
    quantity: 1,
    unitPrice: 700,
    totalPrice: 700,
    like: false,
    colorIcon: "gray",
  },
];

function remove(index) {
  var yes = confirm("Are you sure you want to delete this item?");
  if (!yes) return;
  items.splice(index, 1);
  renderCart();
}

function updateQuantity(index, newQuantity) {
  if (newQuantity < 0) return;
  items[index].quantity = newQuantity;
  items[index].totalPrice = newQuantity * items[index].unitPrice;
  renderCart();
}



var tableBody = document.getElementById("table-body");
var totalCell = document.querySelector("#total");


function changeColor(i, like) {
  items[i].like = !items[i].like;
 

  if (items[i].like == false) {
    items[i].colorIcon = "gray";
  } else items[i].colorIcon = "red";

  console.log(i, items[i].like, items[i].colorIcon);
  renderCart();
}

function renderCart() {
  var html = "";
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i]; 

    var template = `
    <tr>
    <td>
    <div class="name-like">
    <button class="circle" onclick="changeColor(${i},${item.like})" >
    
    <i class="fa-solid fa-heart fa-lg" style="color:${item.colorIcon}"></i>
    </button>  
    ${item.name} 
    
    </div>
    </td>
    <td>
      <div class="qnt-container">
        <button class="btn" onclick="updateQuantity(${i},${
      item.quantity - 1
    })">-</button>
        <input type="number" value="${
          item.quantity
        }" onchange="updateQuantity(${i}, this.value)" />
        <button class="btn" onclick="updateQuantity(${i},${
      item.quantity + 1
    })" >+</button>
      </div>
    </td>
    <td>
      ${item.unitPrice}
    </td>
    <td>
      ${item.totalPrice}
    </td>
    <td>
      <button class="btn remove" onclick="remove(${i})">Remove</button>
    </td>
  </tr>
  `;
    html += template;
    total += item.totalPrice;
  }
  tableBody.innerHTML = html;
  totalCell.innerHTML = total;
}

renderCart();


