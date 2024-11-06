// Script untuk mengatur interaksi kuantitas
document.addEventListener('DOMContentLoaded', function () {
    const quantityElement = document.getElementById('quantity');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const quantityInput = document.getElementById('kuantitas');

    let quantity = parseInt(quantityElement.innerText);

    incrementButton.addEventListener('click', function () {
        quantity++;
        quantityElement.innerText = quantity;
        quantityInput.value = quantity;
    });

    decrementButton.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            quantityElement.innerText = quantity;
            quantityInput.value = quantity;
        }
    });
});
