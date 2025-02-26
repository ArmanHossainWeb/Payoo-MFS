document.getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueByID("ammount");
    const pin = getInputValueByID("pin");
    const account = document.getElementById("account-number").value;
    const mainBalance = getInnerTextByID("main-balance");

    
    if(account.length === 11){
      if(pin === 1234){
        const sum = mainBalance + amount;
        setInnerTextByIDandValue("main-balance", sum)
      }
      else{
        console.log("pin thik nai ");
        
      }
    }
    else{
      console.log("account number tik nai ");
      
    }

    
    
  });
