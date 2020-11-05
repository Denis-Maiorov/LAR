function shadow(){
    /*скрывает отмеченные чекбоксы
      в случае снятия отметки показывает строки 
    */
    let quantity = localStorage.getItem('valueIdRow'); //кол-во строк
    let checkBox = document.getElementById('one');
    if(checkBox.checked) {
        for(let i = 1; i < quantity; i++){
            let s = 'checkBoxId' + i;
            let s1 = 'trId' + i;
            let checkBoxInTable = document.getElementById(s);
            let line = document.getElementById(s1);
            if(checkBoxInTable.checked){
                line.style.display = "none";
            }
        }
    }else{
        for(let i = 1; i < quantity; i++){
            let s = 'checkBoxId' + i;
            let s1 = 'trId' + i;
            let checkBoxInTable = document.getElementById(s);
            let line = document.getElementById(s1);
            if(checkBoxInTable.checked){
                line.style.display = "table-row";
            }
        }
    }
}