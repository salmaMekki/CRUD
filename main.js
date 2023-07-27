var ProductNameInput = document.getElementById('ProductNameInput'); //input kolo
var ProductPriceInput = document.getElementById('ProductPriceInput');
var ProductCategoryInput = document.getElementById('ProductCategoryInput');
var ProductDescInput = document.getElementById('ProductDescInput');
var deleteBtn = document.getElementById('add');
var updateBtn = document.getElementById('update');
var salma = document.getElementById('salma');
// var mood = 'add';
// console.log(input);

var productContainer;
if (localStorage.getItem('myproducts') != null) {

  productContainer = JSON.parse(localStorage.getItem('myproducts'));
  displayProduct(productContainer);

} else {
  productContainer = [];

}
function addProdut() {
  if (validation() == true) {
    var product = {
      name: ProductNameInput.value,
      price: ProductPriceInput.value,
      category: ProductCategoryInput.value,
      desc: ProductDescInput.value,
    }
    productContainer.push(product);
    localStorage.setItem('myproducts', JSON.stringify(productContainer));
    console.log(productContainer);
    clear();
    displayProduct(productContainer);
  } else {
    alert('invalid');
  }

  if (mood === 'add') {
    productContainer.push(product);
    localStorage.setItem('myproducts', JSON.stringify(productContainer));
    console.log(productContainer);
    clear();
    displayProduct(productContainer);
  }
  else {
    productContainer[i] = product;
    // var x = [1, 2, 3];
    // x[1] = 5
  }


}
function clear() {
  ProductNameInput.value = '';
  ProductPriceInput.value = '';
  ProductCategoryInput.value = '';
  ProductDescInput.value = '';
}

function displayProduct(productList) {
  var cartona = ``;
  for (var i = 0; i < productList.length; i++) {
    cartona += `   <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].desc}</td>
        <td>
          <button onclick="updateProduct(${i})" class="btn btn-warning">update</button>
        </td>
        <td>
          <button  onclick="deleteProduct(${i})" class="btn btn-danger">dalete</button>
        </td>
      </tr>`
  }

  document.getElementById('demo').innerHTML = cartona;
}
function searchProduct(searchTerm) {
  var searchResult = [];

  for (var i = 0; i < productContainer.length; i++) {

    if (productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
      // console.log(productContainer[i].name);
      searchResult.push(productContainer[i]);
    }
  }
  // console.log(searchResult)
  displayProduct(searchResult);
}

function deleteProduct(deletedItem) {
  productContainer.splice(deletedItem, 1);
  localStorage.setItem('myproducts', JSON.stringify(productContainer));
  displayProduct(productContainer);

}

function updateProduct(updatedItem) {
  ProductNameInput.value = productContainer[updatedItem].name;
  ProductPriceInput.value = productContainer[updatedItem].price;
  ProductCategoryInput.value = productContainer[updatedItem].category;
  ProductDescInput.value = productContainer[updatedItem].desc;

  updateBtn.classList.replace('d-none', 'd-block');
  deleteBtn.classList.add('d-none');


  // mood = "update";
  // deleteBtn.style.display = "d-none";

}

function update(id) {
  var product = {
    name: ProductNameInput.value,
    price: ProductPriceInput.value,
    category: ProductCategoryInput.value,
    desc: ProductDescInput.value,
  }
  productContainer[id] = product;
}


// var x = "web design and develop dddd ".replace(/d/gi, "R");
// console.log(x);

// function validation() {

//   var regex = /^[A-Z][a-z]{3,8}$/;
//   if (regex.test(ProductNameInput.value) == true) {
//     ProductNameInput.classList.replace('is-invalid', 'is-valid');
//     return true;
//   } else {
//     ProductNameInput.classList.add('is-invalid');
//     return false;
//   }
// }

// var element = document.querySelector('h2');

// element.addEventListener('click', function () {
//   element.style.cssText = "color:blue !important";
//   // console.log('ddddddd')
// })
// document.addEventListener('click', function (e) {
//   console.log(e.clientY);

// })
// for (var i = 0; i < element.length; i++) {
//   element[i].addEventListener('keyup', function () {
//     console.log('hiii');
//   })
// }

// var image = document.querySelector('#demo');

// document.addEventListener('click', function (e) {
//   console.log(e);
//   image.style.left = e.clientX;
//   image.style.top = e.clientY;
// })

// var element = document.getElementById('demo');
// document.addEventListener('click', function (event) {
//   console.log(event)
//   element.style.left = event.clientX;
//   element.style.top = event.clientY;
// })

// var element = document.getElementById('demo');
// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
// })

// var element = document.getElementById('demo');
// document.addEventListener('keydown', function (e) {
//   if (e.key == 'F12') {
//     e.preventDefault();

//   }

//   // e.preventDefault();

// })