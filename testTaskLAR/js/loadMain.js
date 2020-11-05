function loadMain(){
    /*
    загрузка всех объектов из localStorage
    */
    let valueIdRow = localStorage.getItem('valueIdRow');

    for(let i = 1; i < valueIdRow; i++){
        if((localStorage.getItem('valueId' + i)) != null){
            var table = document.getElementById("tableOne").getElementsByTagName("TBODY")[0];
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.appendChild(document.createTextNode(i));
            var td2 = document.createElement("td");
            td2.appendChild (document.createTextNode(""));
            var td3 = document.createElement("td");
            td3.appendChild(document.createTextNode(""));
            var td4 = document.createElement("td");
            td4.appendChild (document.createTextNode(""));
            var td5 = document.createElement("td");
            td5.appendChild (document.createTextNode(""));

            row.setAttribute('id', 'trId' + i);
            td1.setAttribute('id', 'valueId' + i);
            td2.setAttribute('id', 'valueName' + i);
            td3.setAttribute('id', 'valueDate' + i);
            td4.innerHTML = "<input type='checkbox' id='checkBoxId"+i+"'>";
            td5.innerHTML = "<a href='editPage.html?valueId="+i+"' id='href1' >[редактирование]</button>"
                          +"<a href='deletePage.html?valueId="+i+"'>[удаление]</href>";

            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);
            table.appendChild(row);
        
            document.querySelector('#valueId' + i).innerText = localStorage.getItem('valueId' + i);
            document.querySelector('#valueName' + i).innerText = localStorage.getItem('valueName' + i);
            document.querySelector('#valueDate' + i).innerText = localStorage.getItem('valueDate' + i);
        
            if(localStorage.getItem('checkBoxId' + i) == 1){
                document.getElementById('checkBoxId' + i).checked = true;
            }else document.getElementById('checkBoxId' + i).checked = false;
            }
    }
}