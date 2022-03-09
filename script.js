function compute() {
    //p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * (rate / 100);
    var year = new Date().getFullYear()+parseInt(years);
    
  console.log(years, year, year > 1900, year < 2200);
    //principal validation
    if(year < 1900 || year > 2200){
        alert("Invalid Date");
        document.getElementById("years").focus();
    }

    //principal validation
    if(principal < 1){
        alert("Invalid Principal, Enter a Positive Number");
        document.getElementById("principal").focus();
        return;
    }

    var result = document.getElementById("result");
    result.innerHTML = "If you deposit " + "<mark>" + principal + "</mark>" +
                        ",\<br\>at an intereset rate of  " + "<mark>" + rate + "</mark>" +
                        "%\<br\>You will receive an amount of  " + "<mark>" +
                        parseInt(interest) + "</mark>" +
                        ",\<br\>in the year  " + "<mark>" + year + "</mark>\<br\>";
}

function updateRate() {
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rate + "%";
}