function addTableRow(){
    /*
    функция добавления строк
    */
    let valueIdRow = localStorage.getItem('valueIdRow');
    if(valueIdRow!=null){
      let x = localStorage.getItem('valueIdRow');
      x++;
      localStorage.setItem('valueIdRow', x);
    }else{
      localStorage.setItem('valueIdRow', '2');
      valueIdRow = 1;
    }
    
    var table = document.getElementById("tableOne").getElementsByTagName("TBODY")[0];
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(valueIdRow));
    var td2 = document.createElement("td");
    td2.appendChild (document.createTextNode(""));
    var td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(""));
    var td4 = document.createElement("td");
    td4.appendChild (document.createTextNode(""));
    var td5 = document.createElement("td");
    td5.appendChild (document.createTextNode(""));

    row.setAttribute('id', 'trId' + valueIdRow);
    td1.setAttribute('id', 'valueId' + valueIdRow);
    td2.setAttribute('id', 'valueName' + valueIdRow);
    td3.setAttribute('id', 'valueDate' + valueIdRow);
    td4.innerHTML = "<input type='checkbox' id='checkBoxId"+valueIdRow+"'>";
    td5.innerHTML = "<a href='editPage.html?valueId="+valueIdRow+"' id='href1' >[редактирование]</button>"
                  +"<a href='deletePage.html?valueId="+valueIdRow+"' id='br"+valueIdRow+"'>[удаление]</href>";

    localStorage.setItem('trId' + valueIdRow, valueIdRow);
    localStorage.setItem('valueId' + valueIdRow, valueIdRow);
    localStorage.setItem('valueName' + valueIdRow, "введите значение");
    localStorage.setItem('valueDate' + valueIdRow, "введите значение");
    localStorage.setItem('checkBoxId' + valueIdRow, 0);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    table.appendChild(row);
}