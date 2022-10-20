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
  var new_task = document.createElement("li");
  new_task.innerHTML = string;
  list.append(new_task);
  string ="";
  get_text.value = ""
}

document.querySelector(".add-button").addEventListener("click", show_text);

// next task is to get the text to show up in the list
//create a new li element and set the inner html to whatever is typed
