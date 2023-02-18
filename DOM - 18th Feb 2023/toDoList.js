let allTasks = [];

function addTask() {
  let task = document.getElementById("userTask").value;
  allTasks.push(task);
  document.getElementById("allTasks").innerHTML = displayTasks(allTasks);
  document.getElementById("userTask").value = "";
  document.getElementById("userTask").focus();
}

function displayTasks(tasks) {
  let output = "";
  tasks.forEach((task) => {
    let temp = `<li><p>${task}</p><button>Delete</button></li>`;
    output += temp;
  });
  return output;
}
