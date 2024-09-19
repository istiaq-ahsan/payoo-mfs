//show the cash out 
document.getElementById("btn-show-cash-out").addEventListener("click", function () {
    document.getElementById("cash-form-out").classList.remove('hidden');

    document.getElementById("add-form-out").classList.add('hidden');
})


document.getElementById("btn-show-add-money").addEventListener("click", function () {
    document.getElementById("add-form-out").classList.remove('hidden');

    document.getElementById("cash-form-out").classList.add('hidden');
})

