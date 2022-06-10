"use strict";

window.onload = function(){
  const form = document.getElementById('addProductForm');
  form.addEventListener("submit", showAddProductModal);

  function showAddProductModal(event){
    event.preventDefault();

    const productNumber = document.getElementById('inputProductNumber').value;
    const stockQuantity = document.getElementById('inputStockQuantity').value;
    const name = document.getElementById('inputName').value;
    const supplier = document.getElementById('inputSupplier').value;
    const productName = document.getElementById('inputProductName').value;
    const dateSupplied = document.getElementById('inputDateSupplied').value;
    
    const modal = new bootstrap.Modal(document.getElementById('productModal'), {keyboard: false})
    
    document.getElementById('productModalLabel').innerHTML = 'Product &quot;' + name + '&quot; added successfully ✓'
    document.getElementById('productBody').innerHTML = 
        '<h5>Product Information:</h5>'+
        'Product Number: ' + productNumber +
        '<br>Stock Quantity: ' + stockQuantity +
        '<br>Name: ' + name +
        '<br>Supplier: ' + supplier +
        '<br>Product Name: ' + productName +
        '<br>Date Supplied: ' + dateSupplied;

    modal.show();
  }
}