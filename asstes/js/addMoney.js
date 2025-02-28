document.getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const ammount = getInputValueByID("ammount");
    const pin = getInputValueByID("pin");
    const account = document.getElementById("account-number").value;
    const mainBalance = getInnerTextByID("main-balance");
    const selectedBank = document.getElementById("allBank").value;
    


    if (ammount < 0) {
      alert("bai eta kono kotha...positive number dite hobe")
      return;
      
    }
    
    if(account.length === 11){
      if(pin === 1234){
        const sum = mainBalance + ammount;
        setInnerTextByIDandValue("main-balance", sum)

        const conteiner = document.getElementById("transection-container")
        
        const div = document.createElement("div");
        div.classList.add("bg-red-400")
        div.innerHTML = `
        <h1 class="text-yellow-300"> Added Money from ${selectedBank}</h1>
        <h3>${ammount}</h3>
        <p>account number:${account}</p>

        `
        conteiner.appendChild(div)

        
        
      }
      else{
        alert("pin thik nai ");
        
      }
    }
    else{
      alert("account number tik nai ");
      
    }

    
  });
