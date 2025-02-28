document.getElementById("add-money").style.display= "block"
document.getElementById("cash-out").style.display= "none"
document.getElementById("transection-history").style.display= "none"

document.getElementById("add-money-box").addEventListener("click", 
    function(){
        handleToggle("add-money","block");
        handleToggle("cash-out", "none");
        handleToggle("transection-history","none");
    }
)

document.getElementById("cash-out-box").addEventListener("click", 
    function(){
        handleToggle("add-money","none");
        handleToggle("cash-out","block");
        handleToggle("transection-history","none");
    }
)

document.getElementById("transection-box").addEventListener("click", 
    function(){
        handleToggle("add-money","none");
        handleToggle("cash-out","none");
        handleToggle("transection-history","block");
    }
)