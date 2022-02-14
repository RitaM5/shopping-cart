function updateProductNumber(product,increasing,total,price){
    let productInput = document.getElementById(product);
    let productNumber = productInput.value ;
   if(increasing == true){
    productNumber = parseInt(productNumber) + 1;
    }
   else if(productNumber > 0){
    productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber; 
    //for total
   if(total == 'case-total' || total == 'phone-total'){
    let productTotal = document.getElementById(total);
    productTotal.innerText = productNumber * price;
    
   }
   calculateTotal(product);

}

 function calculateTotal(product){

    let subProductInput = document.getElementById(product);
    let subProductNumber = subProductInput.value;

     let phoneTotal = parseInt(subProductNumber) * 1219;
     let caseTotal = parseInt(subProductNumber) * 59;
     let subTotal = phoneTotal + caseTotal ;
     let subTax = (subTotal / 100) * 10;
     let totalPrice = subTotal + subTax
     document.getElementById('sub-total').innerText = subTotal;
     document.getElementById('tax').innerText = subTax;
     document.getElementById('total').innerText = totalPrice;

 }

//for case
document.getElementById('case-plus').addEventListener('click', function(){
   // let caseInput = document.getElementById('case-input');
    //let caseNumber = caseInput.value ;
   // caseOutput = parseInt(caseNumber) + 1;
    //caseInput.value = caseOutput; 
    updateProductNumber('case-input',true,'case-total',59);
});

//for minus
document.getElementById('case-minus').addEventListener('click', function(){
   /* let caseInput = document.getElementById('case-input');
    let caseNumber = caseInput.value;
    caseOutput = parseInt(caseNumber) - 1;
    caseInput.value = caseOutput; */
    updateProductNumber('case-input',false,'case-total',59);
    
});

// for phone
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone-input',true,'phone-total',1219);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone-input',false,'phone-total',1219);
})

  
