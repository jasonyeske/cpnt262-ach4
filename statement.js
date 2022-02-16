const choose = document.querySelector('form');

//choose.addEventListener('change', select);

const output = (event) => {
    
    event.preventDefault();
    const chosen = choose.list.value;
    
    if (chosen === "hockey"){

        document.getElementById('print').innerHTML = `Hockey is my favourite sport too!`;

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
choose.addEventListener('submit', output);