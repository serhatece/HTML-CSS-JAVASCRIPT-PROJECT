let valueDisplays = document.querySelectorAll(".num");  // Bu, .num sınıfına sahip tüm öğeleri seçer.

let interval = 500; // Animasyon süresini belirler.

valueDisplays.forEach((valueDisplays)=>{
    
    let startValue = 0;

    let endValue = parseInt(valueDisplays.getAttribute("data-val"));

    let duration = Math.floor(interval/endValue);

    let counter = setInterval(function(){

        startValue += 1;

        valueDisplays.textContent = startValue;

        if(startValue==endValue){

            clearInterval(counter);

        }

    }, duration);

});