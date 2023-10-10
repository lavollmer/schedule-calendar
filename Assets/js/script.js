// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//code taken from module 05 video - renders page in html before beginning
$(document).ready(function () {

  $(".saveBtn").click(function (event) {
    event.preventDefault();
    console.log("click");
    // variable btnSave is equal to the value input in the textarea
    var btnSave = $(this).siblings(".description").val();

    var time = $(this).parent().attr("id");
    //stores btnSave which is the text in local storage under "info" key
    localStorage.setItem(time, btnSave);

  })

  for (var i = 9; i < 18; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
  }

  // top of page day and month
  var today = dayjs();
  var dayWeek = today.format('[Today is] dddd, MMM DD [!]');
  $('#currentDay').text(dayWeek);

  // var currentHourState = today.format('HH:mm:ss');

  // var setHour = ("");


  function timeOfDay() {
    $(".time-block").each(function () {
      var setHour = dayjs().hour();
      var hourTime = parseInt($(this).attr("id").split("-")[1]);

      if (hourTime > setHour) {
        $(this).addClass("future");
      } else if (hourTime < setHour) {
        $(this).addClass("past");
      } else {
        $(this).addClass("present");
      };
    });
  }

  timeOfDay();

})

