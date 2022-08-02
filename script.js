var today = moment();
$("#currentDay").text(today.format("llll"));

var currentHour = moment().format('hA')

var timeBlockEl = $('#timeBlock')

var businessHours = [
    '9AM', 
    '10AM', 
    '11AM', 
    '12PM', 
    '1PM', 
    '2PM', 
    '3PM', 
    '4PM', 
    '5PM',
];

var timeNumbers = {
    '12AM': 0,
    '1AM': 1,
    '2AM': 2,
    '3AM': 3,
    '4AM': 4,
    '5AM': 5,
    '6AM': 6,
    '7AM': 7,
    '8AM': 8,
    '9AM': 9, 
    '10AM': 10, 
    '11AM': 11, 
    '12PM': 12, 
    '1PM': 13, 
    '2PM': 14, 
    '3PM': 15, 
    '4PM': 16, 
    '5PM': 17,
    '6PM': 18,
    '7PM': 19,
    '8PM': 20,
    '9PM': 21,
    '10PM': 22,
    '11PM': 23,
};

for (var i = 0; i < businessHours.length; i++) {
    var businessHour = businessHours[i];

    var hourEl = $('<div>');

    hourEl.attr('class', 'hour');
    hourEl.addClass('col-2');

    var inputEl = $('<input>');

    inputEl.attr('class', 'description');
    inputEl.addClass('col-8');

    var inputId = 'input_' + businessHour;

    inputEl.attr('id', inputId);

    inputEl.attr('data-hour', businessHour);

    var inputContents = '';

    try {
        inputContents = localStorage.getItem(`task.${businessHour}`) || '';
    } catch (err) {
        console.error(err);
    };

    inputEl.val(inputContents);

    var saveBtn = $('<button>');

    saveBtn.attr('class', 'saveBtn');
    saveBtn.attr('data-input', inputId);
    saveBtn.addClass('col-2');
    saveBtn.text('Save');

    saveBtn.on('click', saveToLocal)

    var rowEl = $('<div>');

    rowEl.attr('class', 'row');

    rowEl.append(hourEl, inputEl, saveBtn);

    timeBlockEl.append(rowEl);

    hourEl.text(businessHours[i]);

    addTimeClass();
};

function addTimeClass(businessHour, currentHour) { 
    var businessHourVal = timeNumbers[businessHours[i]]
    var currentHourVal = timeNumbers[currentHour];
    
    if (currentHourVal === businessHourVal){
        inputEl.addClass('present');
    } else if (currentHourVal < businessHourVal) {
        inputEl.addClass('future');
    } else {
        inputEl.addClass('past')
    }
};       
   

function saveToLocal(save) {
 
    var saveBtn = save.target;

    var inputId = $(saveBtn).attr('data-input');
 
    var $input = $('#' + inputId);
  
    var taskContent = $input.val();
  
    var hour = $input.attr('data-hour');
  
    localStorage.setItem(`task.${hour}`, taskContent);
};