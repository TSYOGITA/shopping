var amt = document.getElementById('amt');
var ship_amt = document.getElementById('ship_amt');
var total_cart_amt = document.getElementById('total_cart_amt');
var code = document.getElementById('discount_code1');
const decreaseNumber = (incdec,item) =>{
    var itemval = document.getElementById(incdec);
    var item = document.getElementById(item);
    if(itemval.value <= 0){
        itemval.value = 0;
    }else{
        itemval.value = parseInt(itemval.value) - 1;
        item.innerHTML = parseInt(item.innerHTML) - 15;
        amt.innerHTML = parseInt(amt.innerHTML) - 15;
        total_cart_amt.innerHTML = parseInt(amt.innerHTML) + parseInt(ship_amt.innerHTML);
    }
}
const increaseNumber = (incdec,item) =>{
    var itemval = document.getElementById(incdec);
    var item = document.getElementById(item);
    if(itemval.value >= 5){
        itemval.value = 5;
        alert('Max 5 items are only allowed');
    }else{
        itemval.value = parseInt(itemval.value) + 1;
        item.innerHTML = parseInt(item.innerHTML) + 15;
        amt.innerHTML = parseInt(amt.innerHTML) + 15;
        total_cart_amt.innerHTML = parseInt(amt.innerHTML) + parseInt(ship_amt.innerHTML);
       
    }
}
const discount_code = () =>{
    let totalamt = parseInt(total_cart_amt.innerHTML);
    let error_trw = document.getElementById('error_trw');
    if(code.value === 'Shopping'){
        let newtotal = totalamt - 15;
        total_cart_amt.innerHTML = newtotal;
        error_trw.innerHTML = 'Hurray! Valid Code'
    }else{
        error_trw.innerHTML = 'Try Again! Invalid Code'
    }
}