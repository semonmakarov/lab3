let line = 1;

function create_table() {
    if (document.getElementById('new__table') != null) {
        alert("Таблица уже существует");
    } else if (document.getElementById('row').value < 1) {
        alert("Количество строк должно быть > нуля");

    } else if (document.getElementById('col').value < 1) {
        alert("Количество столбцов должно быть > нуля");

    } else {
        let table = document.createElement('table');
        table.setAttribute('id', 'new__table');
        document.getElementById('body').appendChild(table);
        for (let i = 0; i < document.getElementById('row').value; i++) {
            line += 1;
            let row_1 = document.createElement('tr');
            for (let j = 0; j < document.getElementById('col').value; j++) {

                let heading_1 = document.createElement('td');
                if (j == 0) {
                    heading_1.innerHTML = i + 1;
                }
                row_1.appendChild(heading_1);
            }
            table.appendChild(row_1)
        }
    }

    document.querySelector('body').appendChild(table);

}

function add_line() {
    let tab = new__table.insertRow();
    tab.insertCell().append(line);
    for (let j = 0; j < document.getElementById('col').value - 1; j++) {
        tab.insertCell().append("");
    }
    line++;
}

function delete_line() {
    if (document.getElementById('num').value < 1) {
        alert("Число должно быть больше нуля");
        return null;
    }
    num = document.getElementById('num').value;
    if (num > line - 1) {
        alert("Такой строки нет");
    } else {
        new__table.deleteRow(num - 1);
        line--;
    }


}
