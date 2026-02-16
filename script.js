//Show Date Time automatically
function updateTime(){
    let now = new Date();
    let options={
        day:'numeric',
        month:'short',
        year:'numeric'
    };
    let date = now.toLocaleDateString("en-IN", options);
    let time = now.toLocaleTimeString("en-IN");

    document.getElementById("dateTime").innerText =
        date + " | " + time;
}
updateTime();
setInterval(updateTime,1000);

//Add name
function startApp(){

    let name = document.getElementById("nameInput").value;

    if(name==""){
        name="Student";
    }

    alert("Welcome " + name+ "👋" );

    
}


//show timer start & end

function createTasks(){

    let count = document.getElementById("taskCount").value;
    let container = document.getElementById("tasksContainer");

    container.innerHTML = "";

    for(let i=1; i<=count; i++){

        let row = document.createElement("div");

        row.innerHTML =
            "<b>Task " + i +" </b>" +
            ' <input class="taskName" placeholder="Enter task"><br>' +
            ' Start time: <input type="time" class="startTime">' +
            ' End time: <input type="time" class="endTime">'+

            '<button onclick="addToList(this)">Done</button><br><br>';

        container.appendChild(row);
    }

}
// time set karne k liye aur message show karne k liye

function watchTime(){

    let now = new Date();
    let current =
        now.getHours().toString().padStart(2,'0')
        + ":" +
        now.getMinutes().toString().padStart(2,'0');

    let starts = document.querySelectorAll(".startTime");
    let ends = document.querySelectorAll(".endTime");

    starts.forEach((input,index)=>{

        if(input.value === current && !input.dataset.started){

            alert("Task " + (index+1) + " time started!");
            input.dataset.started = "yes";
        }
    });

    ends.forEach((input,index)=>{

        if(input.value === current && !input.dataset.ended){

            alert("Task " + (index+1) + " time ended!");
            input.dataset.ended = "yes";
        }
    });
}

setInterval(watchTime, 1000);

function addToList(btn){

    // jis task box se button click hua usko pakadna
    let parent = btn.parentElement;

    // task ka naam lena
    let task = parent.querySelector(".taskName").value;

    // start & end time lena
    let start = parent.querySelector(".startTime").value;
    let end = parent.querySelector(".endTime").value;

    // agar task empty hai to kuch na kare
    if(task === "") return;

    // list ko visible karna
    document.getElementById("listSection").style.display="block";

    // list me item add karna
    let li = document.createElement("li");
    li.innerText = task + " (" + start + " - " + end + ")";

    document.getElementById("taskList").appendChild(li);
}

               
