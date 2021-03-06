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
        { display: "6PM", value: 18 }
    ]

    //compare the hour in each time block to the current hour, then set a class accordingly
    function classSetter() {
        //get the current hour (in 24-hr format), convert to integer
        var currentHour = parseInt(moment().format("k"));
        //get the hour of each time block, convert to integer
        var hourBlock = parseInt(textArea.attr("id"));
        //log both values to make sure the numbers make sense
        // console.log(hourBlock, currentHour);
        // console.log(typeof hourBlock, typeof currentHour);
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
        var textArea = $("<textarea>").addClass("time-block description").attr("name", "todo-text").attr("id", times[i].value).attr("cols", "50").attr("rows", "4");
        //create a button with a class and the save icon inside
        var saveBtn = $("<button>").addClass("saveBtn").html('<i class="far fa-save fa-2x"></i>');
        //create a timeBlock div with classes 
        var timeBlock = $("<div>").addClass("row row-col time-block");
        //append the hour, textarea, and save button to the timeBlock row
        timeBlock.append(hourSpan).append(textArea).append(saveBtn);
        //append the row to the container
        $(".container").append(timeBlock);
        //run the function to compare check each time slot against the current time and apply the correct style
        classSetter()
    }
    // console.log(textArea);


    // when saveBtn is clicked, save textArea's data-value and content are added to the array and saved to local storage
    $(document).on("click", ".saveBtn", function (event) {
        event.preventDefault();
        var dataVal = $(this).siblings(".description").attr("id")
        var userInput = $(this).siblings(".description").val()
        localStorage.setItem(dataVal, userInput)
    });

    //retrieve the saved values from local storage
    // console.log(localStorage.getItem("8"))
    $("#8").val(localStorage.getItem("8"))
    $("#9").val(localStorage.getItem("9"))
    $("#10").val(localStorage.getItem("10"))
    $("#11").val(localStorage.getItem("11"))
    $("#12").val(localStorage.getItem("12"))
    $("#13").val(localStorage.getItem("13"))
    $("#14").val(localStorage.getItem("14"))
    $("#15").val(localStorage.getItem("15"))
    $("#16").val(localStorage.getItem("16"))
    $("#17").val(localStorage.getItem("17"))
    $("#18").val(localStorage.getItem("18"))






});//close document.ready

