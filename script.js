var get_text= document.querySelector(".get-task");
var string = "";
var task_total = 0;
get_text.onkeyup = function(){
  //save string in a variable
  string = get_text.value;
};

function disappear_task(checkedid){
  if (checkedid.checked == true){

    var new_id = ".id"+checkedid.id;
    document.querySelector(new_id).remove();
    checkedid.remove();
    task_total = task_total -1;
  }
}

function show_text(){
  if(string != ""){
    task_total = task_total  + 1;
    console.log(string);
    //append new task to list
    var list = document.querySelector(".task-list");
    var list_item = document.createElement("li");
    var new_task = document.createElement("input");
    var task_name = document.createElement("label");
    task_name.innerHTML = string;
    task_name.classList.add("task-name");
    var counter = "" + task_total +"";
    task_name.setAttribute("for", counter);
    var counter_id = "id" + counter;
    task_name.classList.add(counter_id);
    new_task.setAttribute("id", counter);
    new_task.setAttribute("type", "checkbox");
    new_task.setAttribute("onclick", "disappear_task(this)");
    new_task.classList.add("check");

    list_item.append(new_task);
    list_item.append(task_name);
    list.append(list_item);
    string ="";
    get_text.value = ""
  }
}

document.querySelector(".add-button").addEventListener("click", show_text);
document.querySelector(".get-task").addEventListener("keypress", function(event){
    if(event.key=="Enter"){
      show_text();
    }
});
// next task is to get the text to show up in the list
//create a new li element and set the inner html to whatever is typed
