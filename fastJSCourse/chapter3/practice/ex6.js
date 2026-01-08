const shopping_cart = {
    milk: {
        quantity: 4,
        price: 2.5
    },
    bread: {
        quantity: 3,
        price: 1.3
    },
    eggs: {
        quantity: 2,
        price: 4.5
    }
}

function totalPrice(shopping_cart_object) {
    let total_price = 0;
    Object.entries(shopping_cart_object).forEach(([key, value]) => {
        let current_object = shopping_cart_object[key];
        for (j = 0; j < current_object.quantity; j++) {
            total_price += current_object.price;
        }
    });
    console.log(total_price);
}

function totalPrice2(shopping_cart_object) {
    let object_keys = Object.keys(shopping_cart_object);
    let sum = 0;

    for (let i = 0; i < object_keys.length; i++) {
        let current_key = object_keys[i];
        const key_data = shopping_cart[current_key]
        sum = sum + (key_data.price * key_data.quantity);
    }
}

totalPrice(shopping_cart)
totalPrice2(shopping_cart)