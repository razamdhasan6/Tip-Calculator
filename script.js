const billInputEle = document.querySelector('.bill-input');
const selectTipBtnEle = document.querySelectorAll('.per-btn');
const customTipInputEle = document.querySelector('.custom-tip');
const noOfPeopleInputEle = document.querySelector('.people');
const generateBillEle = document.querySelector('.bill-btn');
const tipAmountEle=document.querySelector('.tip-amount')
const totalAmount=document.querySelector('.total-amount')
const eachPersonAmountEle=document.querySelector('.each-person')
const resetBtnEle = document.querySelector('.reset-btn');

billInputEle.addEventListener('keyup', () => {
    if (billInputEle.value > 0) {
        selectTipBtnEle.forEach(btn => btn.disabled = false);
        customTipInputEle.disabled = false;
    }
    else {
        selectTipBtnEle.forEach(btn => btn.disabled = true);
        customTipInputEle.disabled = true;
        noOfPeopleInputEle.disabled = true;
        generateBillEle.disabled = true;
        resetBtnEle.disabled = true
        customTipInputEle.value=''
        noOfPeopleInputEle.value = ''
        tipAmountEle.textContent='₹0.00'
        totalAmount.textContent ='₹0.00'
        eachPersonAmountEle.textContent = '₹0.00'
        selectTipBtnEle.forEach(btn => {
            btn.style.border='none'
        })
    }
})
selectTipBtnEle.forEach(btn => {
    btn.addEventListener('click', () => {
        noOfPeopleInputEle.disabled = false;
        selectTipBtnEle.forEach(button => button.style.border = 'none');
        btn.style.border = '2px solid red';
        customTipInputEle.value=""
    })
     
})
customTipInputEle.addEventListener('keyup', () => {
    if (customTipInputEle.value > 0) {
        selectTipBtnEle.forEach(btn => {
            btn.style.border = "none";
            noOfPeopleInputEle.disabled = false;
        })
    }
    
})
noOfPeopleInputEle.addEventListener('keyup', () => {
    if (noOfPeopleInputEle.value > 0) {
        generateBillEle.disabled = false;
    }
    else {
        generateBillEle.disabled = true;
    }
})

generateBillEle.addEventListener('click', () => {
    let billValue = parseInt(billInputEle.value);
    let tipValue = 0;

    selectTipBtnEle.forEach(btn => {
        if (btn.style.border === '2px solid red') {
            tipValue = billValue * parseInt(btn.textContent) / 100;
        }
    })
    if (customTipInputEle.value) {
        tipValue=parseInt(customTipInputEle.value)
    }
    const totalBill = billValue + tipValue;
    const numberOfPeople = parseInt(noOfPeopleInputEle.value);
    const onePersonBill = totalBill / numberOfPeople;
    
    tipAmountEle.textContent = `₹${tipValue.toFixed(2)}`
    totalAmount.textContent = `₹${totalBill.toFixed(2)}`
    eachPersonAmountEle.textContent = `₹${onePersonBill.toFixed(2)}`
    resetBtnEle.disabled = false;

    resetBtnEle.addEventListener('click', () => {
        tipAmountEle.textContent='₹0.00'
        totalAmount.textContent ='₹0.00'
        eachPersonAmountEle.textContent = '₹0.00'
        selectTipBtnEle.forEach(btn => btn.disabled = true);
        customTipInputEle.disabled = true;
        noOfPeopleInputEle.disabled = true;
        generateBillEle.disabled = true;
        resetBtnEle.disabled = true
        customTipInputEle.value=''
        noOfPeopleInputEle.value = ''
        selectTipBtnEle.forEach(btn => {
            btn.style.border='none'
        })
    })
    
})


