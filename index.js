var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
var tasks = JSON.parse(localStorage.getItem("tasks")) || {}

$("#currentDay").text(currentDay);

function showTasks(){
    for (const property in tasks) {
        $(`#${property}`).val(tasks[property])
      }
}

showTasks();

function colorCode(){
    var times = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
    var currentHour = moment().format("H")
    for(var i = 0; i < times.length; i++){
        var timeState= "row timeBlock "

    if(parseInt(times[i]) < parseInt(currentHour)){
        timeState += 'past'
    }else if(parseInt(times[i]) > parseInt(currentHour)){
        timeState += 'future'
    }else{
        timeState += "present"
    }

    $(`#${times[i]}`).parent().parent().attr('class', timeState )
    //this line is how we dynamically choose the parent element and get it to update its class
   }   
}

colorCode()

$(".btn").on("click", function (event) {
    var userInput = $(this).parent().prev().children("textarea").val();
    var time = $(this).parent().prev().children("textarea").attr("id")

    tasks[time] = userInput

    localStorage.setItem("tasks", JSON.stringify(tasks))
})