function cal() {
    let opr1 = document.getElementById("first").value;
    let opr2 = document.getElementById("second").value;
    let ope = document.getElementById("operator").value;
    
    if (ope == '+'){
        var res =parseInt (opr1) + parseInt(opr2);
    }
    if (ope == '-'){
        var res =parseInt (opr1) - parseInt(opr2);
    }
    if (ope == '*'){
        var res =parseInt (opr1) * parseInt(opr2);
    }
    if (ope == '/'){
        var res =parseInt (opr1) / parseInt(opr2);
    }
    
    document.getElementById("result").innerText = `Result =` + res;

}
