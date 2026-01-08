const array_of_objects = [
    { price: 3.4, name: 'John' },
    { price: 6.2, name: 'January' },
    { price: 4.2, name: 'February' },
]

array_of_objects.sort(function (a, b) {
    return a.price - b.price
})

console.log(array_of_objects)