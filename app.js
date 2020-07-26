var list = document.getElementById('list');

function addTodo(){
    var todoItem = document.getElementById('todo_item');
    var liText = document.createTextNode(todoItem.value);
    var li = document.createElement('li');
    li.appendChild(liText);
    li.setAttribute("class", "item");   

    var delBtn = document.createElement('button');
    var delText = document.createTextNode('Delete');
    delBtn.setAttribute("class", "removeButton");
    delBtn.setAttribute("onclick", "deleteItem(this)");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);

    var editBtn = document.createElement('button');
    var editText = document.createTextNode('Edit');
    editBtn.setAttribute("class", "editButton");
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);

    if (todoItem.value != '') {
        list.appendChild(li);
    }

    todoItem.value = "";
}

function deleteItem(e){
    e.parentNode.remove();
}

function editItem(e){
    var value = e.parentNode.firstChild;
    var editValue = prompt("Enter edit value:", value.nodeValue);
    value.nodeValue = editValue;
}

function deleteAll(){
    list.innerHTML = "";
}
