function getInputValue(inputId){
    /* const depositInput = document.getElementById('deposit-input'); */
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const newDepositAmount = parseFloat(inputAmountText);
    // clear inputField 
    
    inputField.value = '';
    return newDepositAmount;
}

function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
     const totalText = totalElement.innerText;
     const previousAmount = parseFloat(totalText);
     totalElement.innerText = previousAmount+amount;
     
};

function getCurrentBalance(){
    const balanceTotal =document.getElementById('balance-total');
const balanceTotalText =balanceTotal.innerText;
const previousBalanceTotal= parseFloat(balanceTotalText);
return previousBalanceTotal;
}


function updateBalanceTotal(amount,isAdd){
     const balanceTotal =document.getElementById('balance-total');
/*const balanceTotalText =balanceTotal.innerText;
const previousBalanceTotal= parseFloat(balanceTotalText); */
/* const newBalancetotal = previousBalanceAmount+newDepositAmount; */
const previousBalanceTotal=getCurrentBalance();
if(isAdd==true){
     balanceTotal.innerText = previousBalanceTotal+amount;
}
else{
    balanceTotal.innerText=previousBalanceTotal-amount;
}

    /* if(inputId==balanceTotal){
    }
    else if(inputId!=balanceTotal){
        
     const finalBalanceTotal = finalBalanceAmount-newWithdrawAmount;
     finalBalance.innerText=finalBalanceTotal;
    } */
}





document.getElementById('deposit-button').addEventListener('click',function(){
    // deposit input 
    const depositInput = document.getElementById('deposit-input');
    /* 
    const depositInputText = depositInput.value;
    const newDepositAmount = parseFloat(depositInputText); */

    const depositAmount = getInputValue('deposit-input'); 
    
    if(depositAmount>0){

        updateTotalField('deposit-total',depositAmount);
        updateBalanceTotal(depositAmount,true);
    }
    // deposit total 


     /* const depositTotal = document.getElementById('deposit-total');
     const previousDepositAmountText = depositTotal.innerText;
     const previousDepositAmount = parseFloat(previousDepositAmountText);
     const newDepositTotal = previousDepositAmount+newDepositAmount;
     depositTotal.innerText=newDepositTotal; */

    //  balance total after deposit

    /* const balanceTotal =document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const previousBalanceAmount= parseFloat(balanceTotalText);
    const newBalancetotal = previousBalanceAmount+newDepositAmount;
    balanceTotal.innerText = newBalancetotal; */
    /* depositInput.value = ''; */

    // updateBalanceTotal(depositAmount,true);
});

document.getElementById('withdraw-button').addEventListener('click',function(){
    // withdraw input 

    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText); */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance =getCurrentBalance();
    if(withdrawAmount>0 && withdrawAmount<currentBalance){
        
        updateTotalField('withdraw-total',withdrawAmount);
        updateBalanceTotal(withdrawAmount,false);
    }
    if(withdrawAmount>currentBalance){
        window.alert("can't withdraw more money bcz you doesn't have enough money in your account!!!");
    }

    // withdraw total 
     
     /* const withdrawTotal= document.getElementById('withdraw-total');
     const prevoiusWithdrawAmountText = withdrawTotal.innerText;
     const prevoiusWithdrawAmount = parseFloat(prevoiusWithdrawAmountText);

     const newWithdrawTotal = prevoiusWithdrawAmount+newWithdrawAmount;
     withdrawTotal.innerText = newWithdrawTotal; */
     
    // balance after withdraw 

    /* const finalBalance = document.getElementById('balance-total');
    const finalBalanceText = finalBalance.innerText;
    const finalBalanceAmount =parseFloat(finalBalanceText);
    const finalBalanceTotal = finalBalanceAmount-newWithdrawAmount;
    finalBalance.innerText=finalBalanceTotal;
    withdrawInput.value=''; */
    /* updateBalanceTotal(withdrawAmount,false); */
})