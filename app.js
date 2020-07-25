var list = document.getElementById('list');

function addTodo(){
    var todoItem = document.getElementById('todo_item');

    var li = document.createElement('li');
    var liText = document.createTextNode(todoItem.value);
    li.setAttribute("class","item");
    li.appendChild(liText);

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

    list.appendChild(li);
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
