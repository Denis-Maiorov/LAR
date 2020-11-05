function loadEdit(){
    /*
    получаем параметр из ссылки
    */
    let param = new URLSearchParams(document.location.search);
    let thId = param.get("valueId");

    var table = document.getElementById("tableEdit").getElementsByTagName("TBODY")[0];
    var row = document.createElement("tr");
    
    var td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(thId));
    var td2 = document.createElement("td");
    td2.appendChild (document.createTextNode(""));
    var td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(""));
    var td4 = document.createElement("td");
    td4.appendChild (document.createTextNode(""));
    var td5 = document.createElement("td");
    td5.appendChild (document.createTextNode(""));

    td1.setAttribute('id', 'valueId' + thId);
    td2.innerHTML = "<form><textarea id='valueName"+thId+"'></textarea></form>";
    td3.innerHTML = "<form><textarea id='valueDate"+thId+"'></textarea></form>";
    td4.innerHTML = "<input type='checkbox' id='checkBoxId"+thId+"'>";
    td5.innerHTML = "<button onclick='saveEdit()'>сохранить</button>";

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    table.appendChild(row);

    let valueId = 'valueId' + thId;
    let valueName = 'valueName' +thId;
    let valueDate = 'valueDate' + thId;
    let checkBoxId = 'checkBoxId' +thId;

    document.getElementById(valueId).innerText = localStorage.getItem(valueId);
    document.getElementById(valueName).innerText = localStorage.getItem(valueName);
    document.getElementById(valueDate).innerText = localStorage.getItem(valueDate);

    if(localStorage.getItem(checkBoxId) == 1){
        document.getElementById(checkBoxId).checked = true;
    }else document.getElementById(checkBoxId).checked = false;
}