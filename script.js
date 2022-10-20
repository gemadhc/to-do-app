var get_text= document.querySelector(".get-task");
var string = "";

get_text.onkeyup = function(){
  //save string in a variable
  string = get_text.value;
}


function show_text(){
  console.log(string);

  //append new task to list
  var list = document.querySelector(".task-list");
  var list_item = document.createElement("li");
  var new_task = document.createElement("input");
  var task_name = document.createElement("h4");
  task_name.innerHTML = string;
  task_name.classList.add("task-name");
  new_task.setAttribute("type", "checkbox");
  new_task.classList.add("check");

  list_item.append(new_task);
  list_item.append(task_name);
  list.append(list_item);
  string ="";
  get_text.value = ""
}

document.querySelector(".add-button").addEventListener("click", show_text);

// next task is to get the text to show up in the list
//create a new li element and set the inner html to whatever is typed
