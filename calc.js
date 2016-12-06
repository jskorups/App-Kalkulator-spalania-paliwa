




function show() {

    //zadeklarowanie pol input

    var fuelAmount = document.getElementById("fuel").value;

    var kmAmount = document.getElementById("km").value;

    var kmPrice = document.getElementById("price").value;



    //pozbycie sie NaN i infinity

    var fuelPrice = fuelAmount * kmPrice;
    fuelPrice = isFinite(fuelPrice) && fuelPrice || 0;

    var km1Price = ((fuelAmount * kmPrice)/kmAmount).toFixed(3);
    km1Price = isFinite(km1Price) && km1Price || 0;

    var km100Price =  ((fuelAmount * kmPrice * 100)/kmAmount).toFixed(3);
    km100Price = isFinite(km100Price) && km100Price || 0;

    var km1Cons = (fuelAmount/kmAmount).toFixed(3);
    km1Cons = isFinite(km1Cons) && km1Cons || 0;

    var km100Cons = ((fuelAmount*100)/kmAmount).toFixed(3);
    km100Cons = isFinite(km100Cons) && km100Cons || 0;


    // wyswietlenie w elementach html

    var el1 = document.getElementById("data1");
    el1.textContent ="Koszt zuzytego paliwa to: "  + fuelPrice + " PLN";
    var el2 = document.getElementById("data2");
    el2.textContent ="Koszt zuzytego paliwa na 1 km to: "  + km1Price + " PLN";
    var el3 = document.getElementById("data3");
     el3.textContent ="Koszt zuzytego paliwa na 100 km to: "  + km100Price + " PLN";
    var el4 = document.getElementById("data4");
     el4.textContent ="Srednie spalanie paliwa na 1 km to: "  + km1Cons  + " l";
    var el5 = document.getElementById("data5");
     el5.textContent ="Srednie spalanie paliwa na 100 km to: "  + km100Cons  +" l" ;


}

