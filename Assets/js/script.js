// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//code taken from module 05 video - renders page in html before beginning
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $("#clickBtn").click(function (event) {
    console.log("click");
    var btnSave = $("textarea").val();
    console.log("btnSave");
    //select the div of the hour with the btn
    var toDo = $("#hour-9").btnSave.val();
    // $("textarea").append("<li>" + btnSave + "<li>");
    //stores btnSave which is the text in local storage
    localStorage.setItem("btnSave", toDo);
    //grabs the btnSave local storage and puts it in a variable
    var itemList = JSON.stringify(localStorage.getItem("btnSave"));
    console.log(itemList);
    var listDos = JSON.parse(localStorage.getItem("btnSave"));
    // localStorage.setItem("btnSave", JSON.parse(itemList));
    console.log(listDos);
    $("textarea [name = toDo]").val("");
  });
});

// top of page day and month
var today = dayjs();
var dayWeek = today.format('[Today is] dddd, MMM DD [!]');
$('#currentDay').text(dayWeek);

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

//setting var hour to military time
var hourTime = dayjs();
hourTime.format('00:00:00');
var timeInMinutes = 60;


var hours = [
  {
    hour: "00:09:00",
  },
  {
    hour: "00:10:00",
  }
]

function timeOfDay() {
  if (hourTime === hours[0]) {
    console.log("hi");
  } if else (hourTime === hours[1]){
    console.log("yo");
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
}
