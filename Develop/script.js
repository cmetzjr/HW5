$(document).ready(function () {

    //display times are in 12 hr format with AM/PM, corresponding values in 24 hr format for comparison to current time
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
        //get the current hour (in 24-hr format), convert to integer
        var currentHour = parseInt(moment().format("k"));
        //get the hour of each time block, convert to integer
        var hourBlock = parseInt(textArea.attr("data-value"));
        //log both values to make sure the numbers make sense
        console.log(hourBlock, currentHour);
        console.log(typeof hourBlock, typeof currentHour);
        //compare the hourBlock to the current time and style appropriately
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
        var saveBtn = $("<button>").addClass("saveBtn").attr("data-value", times[i].value).html('<i class="far fa-save fa-2x"></i>');
        //create a timeBlock div with classes 
        var timeBlock = $("<div>").addClass("row row-col time-block");
        //append the hour, textarea, and save button to the timeBlock row
        timeBlock.append(hourSpan).append(textArea).append(saveBtn);
        //append the row to the container
        $(".container").append(timeBlock);
        //run the function every 30 sec to compare check each time slot against the current time and apply the correct style --> i don't think it's running it every 30 sec
        window.setInterval(classSetter(), 30000);
    }
    console.log(textArea);


    //Create an empty array to hold your inputs
    //loop over all of the input elements, create an object and push it to the array
    //Set your element in local storage to the new array (don't forget to stringify it)!

    //create an object from the textarea data-values and input texts

    var scheduleInputs = {
        time: textArea.attr("data-value"),
        input: textArea.text()
    };
    console.log(scheduleInputs);


    // when saveBtn is clicked, save textArea's data-value and content to local storage
    saveBtn.on("click", function (event) {
        event.preventDefault();
        localStorage.setItem(scheduleInputs.time, JSON.stringify(scheduleInputs.input));

    });






});//close document.ready

