//array of times
// var times = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];

var times = [
    { display: "8AM", value: 08 },
    { display: "9AM", value: 09 },
    { display: "10AM", value: 10 },
    { display: "11AM", value: 11 },
    { display: "12PM", value: 12 },
    { display: "1PM", value: 13 },
    { display: "2PM", value: 14 },
    { display: "3PM", value: 15 },
    { display: "4PM", value: 16 },
    { display: "5PM", value: 17 },
    { display: "6PM", value: 18 },
    { display: "7PM", value: 19 },
    { display: "8PM", value: 20 },
    { display: "9PM", value: 21 },
    { display: "10PM", value: 22 },
    { display: "11PM", value: 23 }
]


//compare the hour in each time block to the current hour, then set a class accordingly
function classSetter() {
    //get the current hour (in format matching the array)
    var currentHour = moment().format("H");
    //get the value of each time block
    var hourBlock = textArea.attr("data-value");
    //log both values to make sure the numbers make sense
    console.log(hourBlock, currentHour);
    //compare the hourBlock to the current time and style appropriately --> isn't working
    if (hourBlock > currentHour) {
        textArea.addClass("future");
    } else if (hourBlock < currentHour) {
        textArea.addClass("past");
    } else {
        textArea.addClass("present");
    }
}

//create a timeBlock for each hour in the array
for (i = 0; i < times.length; i++) {
    //create <span> with class of "hour" pulling the hour from the array
    var hourSpan = $("<span>").addClass("hour").text(times[i].display);
    //create <textarea> with classes, attributes and a data-value equal to the hour
    var textArea = $("<textarea>").addClass("time-block description").attr("name", "todo-text").attr("id", "todo-text").attr("cols", "50").attr("rows", "4").attr("data-value", times[i].value);
    //create a button with a class and the save icon inside
    var saveBtn = $("<button>").addClass("saveBtn").html('<i class="far fa-save fa-2x"></i>');
    //create a timeBlock div with classes 
    var timeBlock = $("<div>").addClass("row row-col time-block");
    //append the hour, textarea, and save button to the timeBlock row
    timeBlock.append(hourSpan).append(textArea).append(saveBtn);
    //append the row to the container
    $(".container").append(timeBlock);
    //run the function every 30 sec to compare check each time slot against the current time and apply the correct style
    window.setInterval(classSetter(), 30000);
}



//when saveBtn is clicked, text is saved to local storage

saveBtn.click(function () {


}); 