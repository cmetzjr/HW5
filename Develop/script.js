//array of times
var times = ["8AM", "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"];

//compare the hour in each time block to the current hour, then set a class accordingly
function classSetter() {
    //get the current hour
    var currentHour = moment().format("HH");
    if (currentHour > timeBlock.attr("data-value")) {
        timeBlock.addClass("past");
    } else if (currentHour < timeBlock.attr("data-value")) {
        timeBlock.addclass("future");
    } else {
        timeBlock.addClass("present");
    }
}

//create a timeBlock for each hour in the array
for (i = 0; i < times.length; i++) {
    //create <span> with class of "hour" pulling the hour from the array
    const hourSpan = $("<span>").addClass("hour").text(times[i]);
    //create <textarea> with some classes and attributes
    const textArea = $("<textarea>").addClass("time-block description").attr("name", "todo-text").attr("id", "todo-text").attr("cols", "50").attr("rows", "4");
    //create a button with a class and the save icon inside
    const saveBtn = $("<button>").addClass("saveBtn").html('<i class="far fa-save fa-2x"></i>');
    //create a timeBlock div with classes and a data-value equal to the hour
    const timeBlock = $("<div>").addClass("row row-col time-block").attr("data-value", times[i]);
    //append the hour, textarea, and save button to the row
    timeBlock.append(hourSpan);
    timeBlock.append(textArea);
    timeBlock.append(saveBtn);
    //append the row to the container
    $(".container").append(timeBlock);

    // classSetter();

};






//for each timeBlock, compare the data-value to the current hour

console.log(hourBlock);


// if (currentHour > timeBlock.attr("data-value") {

// }

//assign a class of past, present, or future based on time of day









//when you type in the box, it saves the text to local storage