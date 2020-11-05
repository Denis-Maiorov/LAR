function deleteRow(){
    let param = new URLSearchParams(document.location.search);
    let thId = param.get("valueId");

    if(localStorage.getItem("trId" + thId) == undefined){
        alert('Ошибка, уже было удалено');
    }else{
        localStorage.removeItem("trId" + thId);
        localStorage.removeItem("valueId" + thId);
        localStorage.removeItem("valueName" + thId);
        localStorage.removeItem("valueDate" + thId);
        localStorage.removeItem("checkBoxId" + thId);
        localStorage.removeItem("valuetrId" + thId);
        alert('успешно удалено');
    } 
}