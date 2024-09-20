document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const inputPin = document.getElementById('input-pin-number').value;
    const inputAmount = document.getElementById('input-add-amount').value;
    if(inputPin === '5555'){
        const balance = document.getElementById('account-balance').innerText;
        const amountNumber = parseFloat(inputAmount)
        const balanceNumber = parseFloat(balance);
        const total = balanceNumber + amountNumber;
        document.getElementById('account-balance').innerText = total;
    }else{
        alert('Incorrect Phone number or pin');
    }
})