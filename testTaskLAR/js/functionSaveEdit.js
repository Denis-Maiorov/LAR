function saveEdit(){
    let param = new URLSearchParams(document.location.search);
    let thId = param.get("valueId");
    let valueName = 'valueName' +thId;
    let valueDate = 'valueDate' + thId;

    localStorage.setItem(valueName, document.getElementById(valueName).value);
    localStorage.setItem(valueDate, document.getElementById(valueDate).value);
}