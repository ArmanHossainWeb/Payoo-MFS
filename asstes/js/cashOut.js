document.getElementById("cash-out-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        const ammmout = document.getElementById("cashout-ammount").value;
        const convertedAmmout = parseFloat(ammmout);
        const pin = document.getElementById("cashout-pin").value;
        const convertedPin = parseInt(pin);
        const mainBalance = document.getElementById("main-balance").innerText;
        const convartedMainBalance = parseFloat(mainBalance);
        
        if (ammount && pin) {
            if (convertedPin === 1234) {
                const sum = convartedMainBalance - convertedAmmout;
                document.getElementById("main-balance").innerText = sum;
                
              } else {
                alert("enter Valid Pin");
              }
        }
        else{
            alert("enter amout")
        }

    }
)