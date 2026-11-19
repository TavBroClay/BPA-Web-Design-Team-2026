const subButton1 = document.getElementById("subscribeButton1");
const subButton2 = document.getElementById("subscribeButton2");
const subButton3 = document.getElementById("subscribeButton3");

var chosenSub = ""

subButton1.addEventListener("click", function chooseSub(){
    chosenSub = "subscription1";
    localStorage.setItem("Subscription", chosenSub);
});

subButton2.addEventListener("click", function chooseSub(){
    chosenSub = "subscription2"
    localStorage.setItem("Subscription", chosenSub)
});

subButton3.addEventListener("click", function chooseSub(){
    chosenSub = "subscription3"
    localStorage.setItem("Subscription", chosenSub)
});

