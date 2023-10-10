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
    event.preventDefault();
    console.log("click");
    // variable btnSave is equal to the value input in the textarea
    var btnSave = $("textarea").val();

    //stores btnSave which is the text in local storage under "info" key
    localStorage.setItem("info", btnSave);

    //grabs the info key local storage and put it in a string
    JSON.stringify(localStorage.getItem("info"));
    console.log(localStorage.getItem("info"));
  });

  //when page refreshes it pulls local storage
  //   window.addEventListener(, function () {
  //     var toDoitems = localStorage.getItem("info");
  //     toDoitems.value = toDoitems;
  //   })
  // });

  // top of page day and month
  var today = dayjs();
  var dayWeek = today.format('[Today is] dddd, MMM DD [!] -- HH:mm:ss');
  $('#currentDay').text(dayWeek);

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //setting var hour to military time
  var currentHourState = today.format('HH:mm:ss');
  var timeInMinutes = 60;

  //calling an array of times of day
  const timeOfDayCalendar = [
    {
      time: '09:00:00',
    },
    {
      time: '10:00:00',
    },
    {
      time: '11:00:00',
    },
    {
      time: '12:00:00',
    },
    {
      time: '13:00:00',
    },
    {
      time: '14:00:00',
    },
    {
      time: '15:00:00',
    },
    {
      time: '16:00:00',
    },
    {
      time: '17:00:00',
    }
  ];

  var setHour = ("");

  //selects all div tags to determine color based on hour
  const divTag = document.getElementById('#color');

  //when blocks color correctly when page loads then it is good
  function timeOfDay() {
    //finds current hour in military time
    console.log("It is currently " + currentHourState + " time.");
    var hourTime = currentHourState;

    for (var x = 0; x < timeOfDayCalendar.length; x++) {
      var setHour = timeOfDayCalendar[x];
      console.log(setHour);
    }

    //comparing the time of day to color of calendar
    if (hourTime > setHour) {
      console.log("past");
    } else if (hourTime < setHour); {
      console.log("future");
    } else {
      console.log("present")
    };

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  }

  timeOfDay();
