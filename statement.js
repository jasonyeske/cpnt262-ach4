const choose = document.querySelector('#list');

choose.addEventListener('change', select);

function select() {
    //Event.preventDefault();
    const chosen = choose.value;
if (chosen === "hockey"){

document.getElementById('print').innerHTML = "Hockey is my favourite sport too!";

}
else if (chosen === "football"){

    document.getElementById('print').innerHTML = "Football is an awesome sport!";
    
    }
else if (chosen === "soccer"){

    document.getElementById('print').innerHTML = "Soccer is very fun to participate in!";
    
    }
else if (chosen === "basketball") {
    document.getElementById('print').innerHTML = "Basketball is tough to master!";

}
else{

    document.getElementById('print').innerHTML = "Please select one!";
}

}