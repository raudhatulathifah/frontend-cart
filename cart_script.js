
// Script untuk cart
document.addEventListener("DOMContentLoaded", () => {
    const btnDecrease = document.querySelector(".btn-decrease");
    const btnIncrease = document.querySelector(".btn-increase");
    const quantityElem = document.querySelector(".kuantitas");
    const totalProdukElem = document.getElementById("total-produk");
    const totalHargaElem = document.getElementById("total-harga");
    const itemCheckbox = document.querySelector(".item-checkbox");
    const hargaSatuan = 20000;
    let quantity = parseInt(quantityElem.innerText);
    
    // Function to update total price
    function updateTotal() {
        let totalHarga = hargaSatuan * quantity;
        
        // Check if the item is selected
        if (!itemCheckbox.checked) {
            totalHarga = 0;
            totalProdukElem.innerText = 0;
        } else {
            totalProdukElem.innerText = quantity;
        }
        
        totalHargaElem.innerText = `Rp ${totalHarga.toLocaleString("id-ID")}`;
    }

    // Event for decrease button
    btnDecrease.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantityElem.innerText = quantity;
            updateTotal();
        }
    });

    // Event for increase button
    btnIncrease.addEventListener("click", () => {
        quantity++;
        quantityElem.innerText = quantity;
        updateTotal();
    });

    // Event for checkbox to include/exclude item
    itemCheckbox.addEventListener("change", () => {
        updateTotal();
    });

    // Initialize total price on page load
    updateTotal();
});
