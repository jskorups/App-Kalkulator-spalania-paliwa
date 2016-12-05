




function show() {

    var fuelAmount = document.getElementById("fuel").value;
    var kmAmount = document.getElementById("km").value;
    var kmPrice = document.getElementById("price").value;


    var el1 = document.getElementById("data1");
    el1.textContent ="Koszt zuzytego paliwa to: "  + (fuelAmount * kmPrice) + " PLN";
    var el2 = document.getElementById("data2");
    el2.textContent ="Koszt zuzytego paliwa na 1 km to: "  + ((fuelAmount * kmPrice)/kmAmount).toFixed(3) + " PLN";
    var el3 = document.getElementById("data3");
    el3.textContent ="Koszt zuzytego paliwa na 100 km to: "  + ((fuelAmount * kmPrice * 100)/kmAmount).toFixed(3) + " PLN";
    var el4 = document.getElementById("data4");
    el4.textContent ="Srednie spalanie paliwa na 1 km to: "  + (fuelAmount/kmAmount).toFixed(3) + " l";
    var el5 = document.getElementById("data5");
    el5.textContent ="Srednie spalanie paliwa na 100 km to: "  + (fuelAmount*100)/kmAmount +" l" ;




}

