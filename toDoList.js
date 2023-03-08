
let tasksCompleted = localStorage.getItem("tasksCompleted") || 0;
const tasksCompletedText = document.getElementById("tasks-completed");
const comeback = document.getElementById("comeBackTmr");

function completedTask(checkbox) {
  if (checkbox.checked) {
    tasksCompleted++;
    
    var listItem = checkbox.parentNode;
    listItem.className = "complete";
    setTimeout(function() {
        localStorage.setItem("lotusGrown", lotusGrown);
        listItem.parentNode.removeChild(listItem);
        if (tasksCompleted >= 13) {
            comeback.textContent = "Come Back Tomorrow!";
            //changeTasks();
        }
    }, 1000);
    completeTask();
  }
}

function changeTasks() {
  var taskList = document.getElementById("task-list");
  taskList.innerHTML = "<li><input type=\"checkbox\" onclick=\"completedTask(this)\">Eaten 3 meals a day</li><li><input type=\"checkbox\" onclick=\"completedTask(this)\">Each meal is a balanced diet consisting of all 5 of the food groups (Vegetables & beans (legumes), Fruit, Grains and cereals, Meat, poultry, fish, eggs, beans/legumes, tofu, nuts, seeds, Milk, cheese, yogurt)</li><li><input type=\"checkbox\" onclick=\"completedTask(this)\">Exercise for at least 40 minutes and less than 2 hours per day</li><li><input type=\"checkbox\" onclick=\"completedTask(this)\">Sleep for more or less 8 hours per day</li><li><input type=\"checkbox\" onclick=\"completedTask(this)\">Has someone available to give emotional support and be understanding</li><li><input type=\"checkbox\" onclick=\"completedTask(this)\">Has someone who can respect and openly communicate with you</li><li><input type=\"checkbox\" onclick=\"completedTask(this)\">Has someone who you can trust and care for you</li><li><input type=\"checkbox\" onclick=\"completedTask(this)\">Have set boundaries between self-care and work activities</li><li><input type=\"checkbox\" onclick=\"completedTask(this)\">Has good time management</li><li><input type=\"checkbox\" onclick=\"completedTask(this)\">Focus on personal health over all</li><li><input type=\"checkbox\" onclick=\"completedTask(this)\">Have addressed stressful events and how you’re reacting, and come up with relaxation techniques to manage stress. (slow breathing, muscle relaxation, mindfulness, meditation, yoga, exercise)</li><li><input type=\"checkbox\" onclick=\"completedTask(this)\">Has someone you can share interests with</li><li><input type=\"checkbox\" onclick=\"completedTask(this)\">Have set time for relaxation to prevent stress</li>";
  tasksCompleted = 0;
}