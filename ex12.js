function mango(quantity, price){
    result = Math.floor(quantity/3)
    quantity -= result
    return price * quantity
}


mango(9,5)