document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount =parseFloat(depositAmountText);
    

    // get current deposit 

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    

     depositTotal.innerText=previousDepositTotal+depositAmount ;
    
    // update balance 
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const  previousBalanceTotal=parseFloat(balanceTotalText);
    balanceTotal.innerText= previousBalanceTotal+depositAmount;
    // clear input value
    depositInput.value ='';


})