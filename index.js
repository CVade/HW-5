var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');

$("#currentDay").text(currentDay);

$(".btn").on("click", function (event) {
    var userInput = $(this).parent().prev().children("textarea").val();

    localStorage.setItem(userInput)
})