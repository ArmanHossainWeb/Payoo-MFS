document.getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const ammount = getInputValueByID("cashout-ammount");
    const pin = getInputValueByID("cashout-pin");
    const mainBalance = getInnerTextByID("main-balance");

    if (ammount > mainBalance) {
        alert("invalid amount")
        return;
      }

    if (accountNumber.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance - ammount;
        setInnerTextByIDandValue("main-balance", sum);

        const conteiner = document.getElementById("transection-container");

        const div = document.createElement("div");
        div.classList.add("bg-red-400")
        div.innerHTML = `
        <h3>cashout${ammount}</h3>
        <p>account number:${accountNumber}</p>

        `
        conteiner.appendChild(div)


      } else {
        alert("pin not valid");
      }
    } else {
      alert("account number not valid");
    }
  });
