'use strict';

class Product{
    #productId;
    #name;
    #quantityInStock;
    #unitPrice;
     
    constructor(productId, name, quantityInStock, unitPrice){
        this.#productId = productId;
        this.#name = name;
        this.#quantityInStock = quantityInStock;
        this.#unitPrice = unitPrice;
    }

    getProductId(){
        return this.#productId;
    }

    getName(){
        return this.#name;
    }

    getQuantityInStock(){
        return this.#quantityInStock;
    }

    getUnitPrice(){
        return this.#unitPrice;
    }

    set name(value){
        this.#name = value;
    }

    set quantityInStock(value){
        this.#quantityInStock = value;
    }

    set unitPrice(value){
        this.#unitPrice = value;
    }

    toString = function(){
        return `{ProductId: ${this.getProductId()}, 
        Name: ${this.getName()}, 
        Quantity In Stock: ${this.getQuantityInStock()}, 
        Unit Price: ${this.getUnitPrice()}}`;
    }
}

const banana = new Product(1001, "Banana", 12, 0.99);
const apple = new Product(1001, "Apple", 12, 0.99);
const carrot = new Product(1001, "Carrot", 12, 0.99);

const products = Array.of(banana, apple, carrot);

for(const p of products){
    console.log(p.toString());
}
